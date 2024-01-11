interface AvatarProperties {
    src: string;
}

const Avatar = ({ src }: React.PropsWithChildren<AvatarProperties>) => {
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
                    display: "inline",
                    textAlign: "right"
                }}
                width="130">
            </img>
        </span>
    )
};

export default Avatar;
