import { rm, readdir } from "fs/promises";

async function clean() {
    const directory = "build";
    const files = await readdir(directory);
    const promises = files.map(file => `${directory}/${file}`).map(path => rm(path));

    await Promise.all(promises);
}

await clean();
