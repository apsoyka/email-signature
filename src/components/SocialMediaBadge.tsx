import EmbeddedImage from "./EmbeddedImage.js";

type SocialMediaBadgeProperties = {
    href: string;
    src: string;
    alt: string;
};

const SocialMediaBadge = (props: React.PropsWithChildren<SocialMediaBadgeProperties>) => {
    const { href, src, alt } = props;

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
