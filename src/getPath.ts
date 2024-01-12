import process from "process";

const cwd = process.cwd();

export default function getPath(type: "src" | "build"): string {
    switch (type) {
        case "src":
            return `${cwd}/src`;
        case "build":
            return `${cwd}/build`;
    }
}
