import { copyFile } from "fs/promises";
import getPath from "./getPath.js";

export default async function copyImage(name: string, format: "png" | "jpeg") {
    const filename = `${name}.${format}`;
    const inputPath = getPath("src", format, filename);
    const outputPath = getPath("build", format, filename);

    await copyFile(inputPath, outputPath);
}
