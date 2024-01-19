import { cwd } from "process";
import { join } from "path";

export default function getPath(type: "root" | "src" | "build", ...paths: string[]): string {
    const parent = cwd();

    switch (type) {
        case "root":
            return join(parent, ...paths);
        case "src":
            return join(parent, "src", ...paths);
        case "build":
            return join(parent, "build", ...paths);
    }
}
