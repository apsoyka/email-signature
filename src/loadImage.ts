import { writeFile } from "fs/promises";
import sharp from "sharp";
import getPath from "./getPath.js";

function formatDataURL(data: string): string {
    return `data:image/png;base64,${data}`;
}

export default async function loadImage(name: string, width: number, height: number): Promise<string> {
    const srcPath = getPath("src");
    const buildPath = getPath("build");

    const inputPath = `${srcPath}/svg/${name}.svg`;
    const outputPath = `${buildPath}/png/${name}.png`;

    const buffer = await sharp(inputPath)
        .resize(width, height)
        .png({ compressionLevel: 9, palette: false, progressive: false })
        .toBuffer();
    const data = buffer.toString("base64");

    await writeFile(outputPath, buffer);

    return formatDataURL(data);
}
