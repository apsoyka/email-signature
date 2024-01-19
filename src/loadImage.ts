import { readFile } from "fs/promises";
import getPath from "./getPath.js";

function formatDataURL(data: string, format: "png" | "jpeg"): string {
    return `data:image/${format};base64,${data}`;
}

export default async function loadImage(name: string, format: "png" | "jpeg"): Promise<string> {
    const filename = `${name}.${format}`;
    const path = getPath("build", format, filename);
    const data = await readFile(path, { encoding: "base64" });

    return formatDataURL(data, format);
}
