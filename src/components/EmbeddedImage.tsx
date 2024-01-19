type EmbeddedImageProperties = {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
};

const EmbeddedImage = (props: React.PropsWithChildren<EmbeddedImageProperties>) => {
    const { src, alt, width, height } = props;

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
