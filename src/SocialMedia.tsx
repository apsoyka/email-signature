import SocialMediaBadge from "./SocialMediaBadge.js";
import loadImage from "./loadImage.js";

const envelope = await loadImage("assets/png/envelope.png", "image/png");
const facebook = await loadImage("assets/png/facebook.png", "image/png");
const github = await loadImage("assets/png/github.png", "image/png");
const instagram = await loadImage("assets/png/instagram.png", "image/png");
const twitter = await loadImage("assets/png/twitter.png", "image/png");

const SocialMedia: React.FC = () => {
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
                    <td
                        style={{
                            verticalAlign: "top",
                            textAlign: "right"
                        }}
                    >
                        <table
                            style={{
                                fontSize: "medium",
                                fontFamily: "Arial",
                                display: "inline-block"
                            }}
                            cellSpacing="0"
                            cellPadding="0"
                        >
                            <tbody>
                                <tr style={{ textAlign: "right" }}>
                                    <td>
                                        <SocialMediaBadge
                                            href="mailto:apsoyka@protonmail.com"
                                            src={envelope}
                                            alt="email"
                                        />
                                    </td>
                                    <td width="5">
                                        <div></div>
                                    </td>
                                    <td>
                                        <SocialMediaBadge
                                            href="https://www.facebook.com/apsoyka"
                                            src={facebook}
                                            alt="facebook"
                                        />
                                    </td>
                                    <td width="5">
                                        <div></div>
                                    </td>
                                    <td>
                                        <SocialMediaBadge
                                            href="https://www.twitter.com/apsoyka"
                                            src={twitter}
                                            alt="twitter"
                                        />
                                    </td>
                                    <td width="5">
                                        <div></div>
                                    </td>
                                    <td>
                                        <SocialMediaBadge
                                            href="https://www.instagram.com/apsoyka"
                                            src={instagram}
                                            alt="instagram"
                                        />
                                    </td>
                                    <td width="5">
                                        <div></div>
                                    </td>
                                    <td>
                                        <SocialMediaBadge
                                            href="https://github.com/apsoyka"
                                            src={github}
                                            alt="github"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export default SocialMedia;
