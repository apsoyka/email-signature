interface EmbeddedImageProperties {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
}

const EmbeddedImage = ({ src, alt, width, height }: React.PropsWithChildren<EmbeddedImageProperties>) => {
    return (
        <img
            src={src}
            alt={alt}
            color="#6A78D1"
            style={{ maxWidth: width, maxHeight: height, display: "block" }}
            width={width}
            height={height}>
        </img>
    );
};

export default EmbeddedImage;
