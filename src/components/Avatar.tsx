type AvatarProperties = {
    src: string;
};

const Avatar = (props: React.PropsWithChildren<AvatarProperties>) => {
    const { src } = props;

    return (
        <span
            style={{
                display: "inline-block",
                textAlign: "right",
                width: "100%"
            }}>
            <img
                src={src}
                alt="avatar"
                role="presentation"
                style={{
                    maxWidth: 130,
                    maxHeight: 130,
                    display: "inline",
                    textAlign: "right"
                }}
                width="130"
                height="130">
            </img>
        </span>
    )
};

export default Avatar;
