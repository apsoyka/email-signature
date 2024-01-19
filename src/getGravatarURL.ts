import { URL } from "url";
import { createHash } from "crypto";

export default function getGravatarURL(email: string, size: number): string {
    const hash = createHash("sha256").update(email).digest("hex");

    const url = new URL("https://www.gravatar.com");

    url.pathname = `avatar/${hash}.png`;

    url.searchParams.append("size", size.toString());
    url.searchParams.append("rating", "g");
    url.searchParams.append("default", "404");
    url.searchParams.sort();

    return url.href;
}
