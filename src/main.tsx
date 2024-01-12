import { writeFile } from "fs/promises";
import minfify from "html-minifier";
import { renderToStaticMarkup } from "react-dom/server";
import Signature from "./components/Signature.js";

async function main() {
    const outputPath = "build/output.html";
    const minifiedPath = "build/minified.html"

    const output = renderToStaticMarkup(<Signature />);

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
