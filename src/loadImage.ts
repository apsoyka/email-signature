import { readFile } from "fs/promises";

export default async function loadImage(path: string, type: string): Promise<string> {
    const data = await readFile(path, { encoding: "base64" });

    return `data:${type};base64,${data}`;
}
