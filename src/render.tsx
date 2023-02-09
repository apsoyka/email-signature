import React from "react";
import { writeFileSync } from "fs";
import minfify from "html-minifier";
import { renderToStaticMarkup } from "react-dom/server";
import Signature from "./Signature";

const render = () => {
    const html = renderToStaticMarkup(<Signature />);

    const minified = minfify.minify(
        html,
        {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyCSS: true,
            minifyURLs: true,
            removeComments: true,
            removeOptionalTags: true,
            removeTagWhitespace: true
        }
    );
    
    const file = "./build/signature.html";

    writeFileSync(file, minified);
};

render();