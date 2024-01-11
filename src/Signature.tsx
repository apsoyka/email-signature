import EmbeddedImage from "./EmbeddedImage.js";
import Profile from "./Profile.js";
import SocialMedia from "./SocialMedia.js";
import loadImage from "./loadImage.js";

const flag = await loadImage("assets/png/flag.png", "image/png");

const Signature: React.FC = () => {
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
                            src="https://www.gravatar.com/avatar/eb59af229b9abe122d2900014e91cc31"
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
                        <EmbeddedImage src={flag} alt="Flag" height="32"/>
                    </td>
                    <td>
                        <SocialMedia />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Signature;
