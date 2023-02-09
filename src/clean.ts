import { rmSync } from "fs";

function clean() {
    rmSync(
        "./build",
        {
            "force": true,
            "recursive": true
        }
    )
}

clean();