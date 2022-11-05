import React from "react";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";

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
                        color="#F2547D" 
                        dir="horizontal"
                        style={{
                            width: "100%",
                            borderBottom: "1px solid rgb(0, 0, 0)",
                            borderLeft: "medium none",
                            display: "block"
                        }}
                        height="1"
                    >
                    </td>
                </tr>
                <tr>
                    <td height="30"></td>
                </tr>
                <tr>
                    <td>
                        <Profile
                            name="Anastasiya Polina Soyka"
                            pronouns="She/Her"
                            src="https://www.gravatar.com/avatar/eb59af229b9abe122d2900014e91cc31"
                        />
                    </td>
                </tr>
                <tr>
                    <td height="30"></td>
                </tr>
                <tr>
                    <td 
                        color="#F2547D" 
                        dir="horizontal"
                        style={{
                            width: "100%",
                            borderBottom: "1px solid rgb(0, 0, 0)",
                            borderLeft: "medium none",
                            display: "block"
                        }}
                        height="1"
                    >
                    </td>
                </tr>
                <tr>
                    <td height="30"></td>
                </tr>
                <tr>
                    <td>
                        <SocialMedia />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Signature;