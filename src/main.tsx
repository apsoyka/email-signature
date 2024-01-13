import { mkdir, writeFile } from "fs/promises";
import minfify from "html-minifier";
import { renderToStaticMarkup } from "react-dom/server";
import Signature from "./components/Signature.js";
import getPath from "./getPath.js";
import loadImage from "./loadImage.js";

async function mkdirs(path: string) {
    await mkdir(`${path}/png`, { recursive: true });
    await mkdir(`${path}/html`, { recursive: true });
}

async function main() {
    const buildPath = getPath("build");
    const outputPath = `${buildPath}/html/output.html`;
    const minifiedPath = `${buildPath}/html/minified.html`;

    await mkdirs(buildPath);

    const email = "apsoyka@protonmail.com";
    const flag = await loadImage("flag", 53, 32);
    const envelope = await loadImage("envelope", 28, 32);
    const facebook = await loadImage("facebook", 32, 32);
    const github = await loadImage("github", 31, 32);
    const instagram = await loadImage("instagram", 28 ,32);
    const twitter = await loadImage("twitter", 32, 32);

    const images = { flag, envelope, facebook, github, instagram, twitter };
    const props = { email, images };
    const root = <Signature {...props} />;

    const output = renderToStaticMarkup(root);

    await writeFile(outputPath, output);

    const minified = minfify.minify(output, {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyCSS: true,
            minifyURLs: true,
            removeComments: true,
            removeOptionalTags: true,
            removeTagWhitespace: true
    });

    await writeFile(minifiedPath, minified);
};

await main();
