import { mkdir, writeFile, rm, readdir } from "fs/promises";
import { minify } from "html-minifier";
import { renderToStaticMarkup } from "react-dom/server";
import { parseArgs } from "util";
import Signature from "./components/Signature.js";
import getPath from "./getPath.js";
import exportImage from "./exportImage.js";
import loadImage from "./loadImage.js";
import copyImage from "./copyImage.js";
import getGravatarURL from "./getGravatarURL.js";

type ImageData = {
    flag: string;
    envelope: string;
    facebook: string;
    github: string;
    instagram: string;
    twitter: string;
};

async function mkdirs(...paths: string[]) {
    const promises = paths.map(
        async path => await mkdir(path, { recursive: true })
    );

    await Promise.all(promises);
}

async function createImages() {
    await exportImage("flag", 53, 32);
    await exportImage("envelope", 28, 32);
    await exportImage("facebook", 32, 32);
    await exportImage("github", 31, 32);
    await exportImage("instagram", 28 ,32);
    await exportImage("twitter", 32, 32);
}

async function copyImages() {
    await copyImage("avatar", "jpeg");
}

async function loadImages(email?: string): Promise<ImageData> {
    return {
        flag: await loadImage("flag", "png"),
        envelope: await loadImage("envelope", "png"),
        facebook: await loadImage("facebook", "png"),
        github: await loadImage("github", "png"),
        instagram: await loadImage("instagram", "png"),
        twitter: await loadImage("twitter", "png")
    };
}

function validateEmail(email: string) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email) {
        throw Error("Must provide an email address");
    }

    if (!regex.test(email)) {
        throw Error("Email address is invalid");
    }
}

async function clean() {
    const files = await readdir(getPath("build"));
    const promises = files.map(file => getPath("build", file)).map(path => rm(path, { recursive: true }));

    await Promise.all(promises);
}

async function render(email: string, useGravatar: boolean) {
    // Create build directories if they don't already exist.
    await mkdirs(
        getPath("build", "html"),
        getPath("build", "png"),
        getPath("build", "jpeg")
    );

    // Copy bitmap images to build directory.
    await copyImages();

    // Convert vector images to bitmap images.
    await createImages();

    // Ensure that an email address exists and is valid.
    validateEmail(email);

    // Load all image data.
    const imageData = {
        avatar: useGravatar ? getGravatarURL(email, 130) : await loadImage("avatar", "jpeg"),
        ...await loadImages()
    };

    // Render unoptimized HTML file.
    const unoptimized = renderToStaticMarkup(<Signature email={email} images={imageData} />);

    await writeFile(
        getPath("build", "html", "unoptimized.html"),
        unoptimized
    );

    // Minify HTML markup.
    const minified = minify(unoptimized, {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyCSS: true,
            minifyURLs: true,
            removeComments: true,
            removeOptionalTags: true,
            removeTagWhitespace: true
    });

    await writeFile(
        getPath("build", "html", "minified.html"),
        minified
    );
}

async function main() {
    const { values, positionals } = parseArgs({
        options: {
            useGravatar: {
                type: "boolean",
                short: "g",
                default: false
            }
        },
        strict: true,
        allowPositionals: true
    });

    const command = positionals[0];

    switch (command) {
        case "render":
            const email = positionals[1];
            const { useGravatar } = values;
            await render(email, useGravatar);
            break;
        case "clean":
            await clean();
            break;
        default:
            throw Error("Invalid command")
    }
};

await main();
