import { writeFile } from "fs/promises";
import minfify from "html-minifier";
import { renderToStaticMarkup } from "react-dom/server";
import Signature from "./Signature.js";

async function main() {
    const html = renderToStaticMarkup(<Signature />);

    const minified = minfify.minify(html, {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyCSS: true,
            minifyURLs: true,
            removeComments: true,
            removeOptionalTags: true,
            removeTagWhitespace: true
    });

    const file = "./build/signature.html";

    await writeFile(file, minified);
};

await main();
