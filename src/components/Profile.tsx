import Avatar from "./Avatar.js";

type ProfileProperties = {
    name: string;
    pronouns: string;
    src: string;
};

const Profile = (props: React.PropsWithChildren<ProfileProperties>) => {
    const { name, pronouns, src } = props;

    return (
        <table
            style={{
                fontSize: "medium",
                fontFamily: "Arial",
                width: "100%",
                padding: "0.5em"
            }}
            cellSpacing="0"
            cellPadding="0"
        >
            <tbody>
                <tr>
                    <td>
                        <h1
                            color="#000000"
                            style={{
                                margin: 0,
                                fontSize: 18,
                                color: "rgb(0, 0, 0)"
                            }}
                        >
                            <span>{name}</span>
                        </h1>
                        <h2
                            color="#000000"
                            style={{
                                margin: 0,
                                fontWeight: 500,
                                color: "rgb(0, 0, 0)",
                                fontSize: 14,
                                lineHeight: "22px"
                            }}
                        >
                            <span><i>{pronouns}</i></span>
                        </h2>
                    </td>
                    <td style={{ textAlign: "right" }}>
                        <Avatar src={src} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export default Profile;
