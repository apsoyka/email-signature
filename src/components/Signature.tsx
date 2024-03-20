import EmbeddedImage from "./EmbeddedImage.js";
import Profile from "./Profile.js";
import SocialMedia from "./SocialMedia.js";

type ImageData = {
    avatar: string;
    flag: string;
    envelope: string;
    facebook: string;
    github: string;
    instagram: string;
    twitter: string;
};

type SignatureProps = {
    email: string;
    images: ImageData;
}

const Signature = (props: React.PropsWithChildren<SignatureProps>) => {
    const { email, images } = props;

    return (
        <table
            style={{
                fontSize: "medium",
                fontFamily: "Arial",
                width: 420
            }}
            cellSpacing="0"
            cellPadding="0"
        >
            <tbody>
                <tr>
                    <td
                        colSpan={2}
                        color="#F2547D"
                        dir="horizontal"
                        style={{
                            width: "100%",
                            borderBottom: "1px solid rgb(0, 0, 0)",
                            borderLeft: "medium none",
                            display: "table-cell"
                        }}
                        height="1">
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} height="30"></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <Profile
                            name="Anastasiya Polina Soyka"
                            pronouns="She/Her"
                            location="🇨🇦"
                            src={images.avatar}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} height="30"></td>
                </tr>
                <tr>
                    <td
                        colSpan={2}
                        color="#F2547D"
                        dir="horizontal"
                        style={{
                            width: "100%",
                            borderBottom: "1px solid rgb(0, 0, 0)",
                            borderLeft: "medium none",
                            display: "table-cell"
                        }}
                        height="1"
                    >
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} height="30"></td>
                </tr>
                <tr>
                    <td>
                        <EmbeddedImage src={images.flag} alt="Flag" height="32"/>
                    </td>
                    <td>
                        <SocialMedia email={email} {...images} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Signature;
