import { writeFile } from "fs/promises";
import sharp from "sharp";

function formatDataURL(data: string): string {
    return `data:image/png;base64,${data}`;
}

export default async function loadImage(name: string, width: number, height: number): Promise<string> {
    const inputPath = `src/svg/${name}.svg`;
    const outputPath = `build/${name}.png`;

    const buffer = await sharp(inputPath)
        .resize(width, height)
        .png({ compressionLevel: 9, palette: false, progressive: false })
        .toBuffer();
    const data = buffer.toString("base64");

    await writeFile(outputPath, buffer);

    return formatDataURL(data);
}
