import EmbeddedImage from "./EmbeddedImage.js";

interface SocialMediaBadgeProperties {
    href: string;
    src: string;
    alt: string;
}

const SocialMediaBadge = ({ href, src, alt }: React.PropsWithChildren<SocialMediaBadgeProperties>) => {
    return (
        <a
            href={href}
            color="#6A78D1"
            style={{ display: "inline-block", padding: 0 }}>
            <EmbeddedImage src={src} alt={alt} height="32"/>
        </a>
    );
};

export default SocialMediaBadge;
