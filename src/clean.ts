import { rm, readdir } from "fs/promises";
import getPath from "./getPath.js";

async function clean() {
    const buildPath = getPath("build");
    const files = await readdir(buildPath);
    const promises = files.map(file => `${buildPath}/${file}`).map(path => rm(path, { recursive: true }));

    await Promise.all(promises);
}

await clean();
