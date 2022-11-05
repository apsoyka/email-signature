import React from "react";

interface Properties {
    href: string;
    src: string;
    alt: string;
}

const SocialMediaBadge: React.FC<Properties> = ({ href, src, alt }) => {
    return (
        <a 
            href={href}
            color="#6A78D1"
            style={{ display: "inline-block", padding: 0 }}>
            <img
                src={src}
                alt={alt}
                color="#6A78D1"
                style={{ maxWidth: 128, display: "block" }}
                height="32"
            >
            </img>
        </a>
    );
};

export default SocialMediaBadge;
