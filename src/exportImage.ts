import { writeFile } from "fs/promises";
import sharp from "sharp";
import getPath from "./getPath.js";

export default async function exportImage(name: string, width: number, height: number) {
    const inputPath = getPath("src", "svg", `${name}.svg`);
    const outputPath = getPath("build", "png", `${name}.png`);

    const buffer = await sharp(inputPath)
        .resize(width, height)
        .png({ compressionLevel: 9, palette: false, progressive: false, force: true })
        .toBuffer();

    await writeFile(outputPath, buffer);
}
