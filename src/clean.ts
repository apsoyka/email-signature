import { rm, readdir } from "fs/promises";
import getPath from "./getPath.js";

async function clean() {
    const files = await readdir(getPath("build"));
    const promises = files.map(file => getPath("build", file)).map(path => rm(path, { recursive: true }));

    await Promise.all(promises);
}

await clean();
