import React from "react";
import SocialMediaBadge from "./SocialMediaBadge";

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
                                            src="data:image/png;base64,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"
                                            alt="email"
                                        />
                                    </td>
                                    <td width="5">
                                        <div></div>
                                    </td>
                                    <td>
                                        <SocialMediaBadge
                                            href="https://www.facebook.com/ddsoyka"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAB/CAMAAAAQJDo1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwCfIDDvz2BAvxCAr99QcI9JAGF/AAADY0lEQVRo3u2b25LbMAiGrTOWT3r/p+12Nt1usj6gH4inM+UqF7H5LAFCSAwDIqHUSkTtIR8/ay1heIv4vH0pfhXasjdVPi5ubhcyu2U0Up+nxpQp62sPLrYOiU7XIjK1biG9Ychzg2TOt6pXQijUREJF5neuicUJvHKJTUHign7+1JRkggYhzE1NZiAqrE1V1husT2KLY2rqkjoIgoH+DwK2IYTYTCSGe/VzCez08wgs9XMIxtRM5coXrPVfErhmLu6N8bc7KhfBcjPVXB6Sa53oZCk7zFFG1AGm3f2ILwcGNR+ZAbb+x+1wN3SUzk0H+Y/6KneYTy5qExBPc85DgDgqeeCFU1OPLxaDsEY9npD09Z8BpB/7H2D+L2sBZ5ua1z0TkAJfp/tnALN4AKZBBPAyBMAAeCHALBwANwgBnoYAcIEgBvjmCAFwwUEM8O0bgCC4KgA4ySpwNgN/8oJyMbNfKwIShI5Sijx1fE3G8wBSqWg8QskILEN1V3/tfc2IzsC+DfZnNBlOBIpORuPQMLwLAOT0MxiF9gGQiqIHTWAXAHlPRndjWgAOW4h2AaBtVQLB1QAaaIN6AAHcD6kBLP3hUxegDtu9ANtA9wLQ/QDpXoCEhQE9gPYf4F8BgE696t0AdDdAuhuA92YyAwiaoRg6974boPIAqhkAK9uthgDEAyhmAJEXUr0VAG/T7bneauQEjR0wgcsv3ELHZgTAsu6NW1awcoLf9WZvBJCYNsj7p9FS9Fnu3EwAAtcEeEZAL7JTpwzP/0hcE+CGLIucMOKlYh0Ah59Y6gAs+HmJCsCMl1h1AP7We/09AF5wbq4BMEke1gAokjKrAgCJnlYAKKJKsxyAZI/LAYrsAokY4OfJs4/vBNg7+q/vBKhwDqUDkPAcRgcgCBJpDYAqSmTlAMcn73xPkACcXX4p7wAoGhcKBQCrQllDAuBUtnQ4ACldK0cBOBfMWQQgAO+CO4cAA+BesGcQQAD8C/7X3SUIQFenidMHcEOXZG2A7p6r81v2vQARaLMZSQ+AsG6rNeoAxHUAxZMGAEn6UHOUAkRhx9+4yQA2eQesdziA0+kC3kFgATi9JmRfYy9ArMo90M+Nt1cAZNB5PPg18QDSatYA7vOj//kQIDrj9vPP7ve9voYSod73X5bYc3jAYI+RAAAAAElFTkSuQmCC"
                                            alt="facebook"
                                        />
                                    </td>
                                    <td width="5">
                                        <div></div>
                                    </td>
                                    <td>
                                        <SocialMediaBadge
                                            href="https://www.twitter.com/ddsoyka"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABoCAMAAAAO9wgWAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwCAz2AwIJ/vvxDfj0BQcK+rsf0oAAADHUlEQVRo3sVb2aKrIAyUfRf+/2uvXW5be9QSEiCPdpmBJEMCuCzU5hKzvNyM2yDUMtbc+sB+G18HclC6HFmOx9/OiXj0x/B3Cn9nwYVi9g8cEj+Zcm5mPZirsHvELA5fl2vLHwNM+f5oNy3OFI2Zfl5+GZePr8bwnKo9HtuerD3xNzfIRQn9cpTZ+9zfnome+BvkLkr2w5WPh40MbIHbV8iFgmAQGvD9V9L50s4gNuAb+eXE90dwBh6Br8LfQTAgPmvGd8KWpxqvnx/D9MAZMD6/KZBa8wfWfhTcdZ2A4KLQfo8UrkOENALM+xdGnSZytSim0m4f47SXawdmDboycfk3JvXKwaOEZ78W0NMaiAb/JJTN2jEERJWa8kivQoeCez6TVpGvQ4d5fhFLWhEvxE8pBGRTjrQEtAMHExeUBA7/6deSYrTsS6AimnyQHQnUKYoPyeHTECnqPCTVg4ACFRZWsxRdWz14QmBfFVUXty0qRCsq6I4AVd3RElikmUbgmVxjGIQj9xvmhjFgJ/GXxcZB+v4ExHkC8C27+zOIdHVFmzkqEWrtBqg6bFoZGEggTJXh0w2IgUFwXOO6uTGIbDJBlgl3mghDYLM8NQRwfS6ohOrQZxKowMP4CAKSdsON0gNjypGwTGbwa/+vNwP+c89H8jkqVHX2RrAOVG0+Rj8rBF8melGoP8QVXVYG0DmAY3x4Dt7rc2NtZtb2KNGqjmblRBHqvSJVRoAYX4nQHQCAe+KRxaGvPwjrUxwCbmt0qUtAtyM6pKKB3aShzwTo1QhqBhl8IE7LwDRc0EmUkRiXBlN8WgC8OiUzdA3oVh5yzA0tx/xACT5RJWYxroDcRLiYiJj4TPz2doUKn02d//Zujcj/emr8uXY14gR3WRVCDK1Dw0eMEAZ05AWMBhrcfV2XNE6BEe6XkWW0/AOv4wVv/xvNNhA4+yRlJ2yaqg+6HRHdmnw01Y9VUyTvBR+RqotzhKZQ/tTal3pG9RKDWuFrr9G07ynAOFCjPzmIOi22TC7dTIlwVQ5bvcalv7koWLD27ZNNrzVbI+V7M/8At5HzZbr31DIAAAAASUVORK5CYII="
                                            alt="twitter"
                                        />
                                    </td>
                                    <td width="5">
                                        <div></div>
                                    </td>
                                    <td>
                                        <SocialMediaBadge
                                            href="https://www.instagram.com/ddsoyka"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwBwMJ8QQO+/z4DfIK9gj1CITHMMAAAEF0lEQVR42t1b2ZbkIAiNu2T1/7+2u2a6quMWMUqcM7ylT3W4UbgCwjQVZFEKvmU1b3GX8vmZeP2XUnJqEAWrdc1iV1A3lC/MuI5i2FKlfrOuu5gNq12CdiSiAWURjEj9HwjlVeDWkYrlhc935MKudn91D4jIWoK07hGxcqz+HIKyfoMVewdBTr81L0rnN4j8dYjksCQQJOxPr4xPzcLZmmAWUfY/PHUiqN2UvJFHa6SmrqIiCP7iBlul2dRdQoq3Fxtg+UQgIcufPlJqFFG0SuBo+lcNPKI/QgDpBaDTHyLQHyfx/sonQuHet24pF+hr/5K9wulTQMgSjrBknaOdgHS43ZPHB0sMqiv/iAT1qni5z5hMT/1H0uRjdSmz6CKzi5c7MPloTcgW4GTdOtjxMwutPQFAcLqmDn4Inrv6oMkAYMEXWyofyAHggdffNQHF9ncMuLNUGp7bgkDjmYZmNKNCFOvZnSON0FvzxXMCg6TXOR1pzkzm3fB0+K7epp8B7Bj1+0XyqsW5DKAyZwx4ACDFVvdTdy8F39JRsK/y/HQUDW8upz2zin+vvTerLICSF+64zOu8kwcYA8GH3QUgTVvul8wB4HxkOtmrdDFfh1VehmSQPMSrKjfXgZ3n+UgAvLJydIngBoBc7qyNySCbZVcACfubxfHzlcuxJ9zTot5m/Ae8/4nAY5S49MZGACp895oovC5RhUF1AxAssM4wptJIM6gFAFiaCakK+gAIcmeBzAReS7UgAJTDAcDrDxGIsk+VAQS5c1UkqGUHAAzxxixe1gGA5wLFiCHw2bkdAHe1QeOar4XdAQCp/O76uqlIh1UATH3mJkpGWwWg0gIiK5CNANSdvGUuHAg1ABieg9KHJzQCgDvVi6NghTUATMmlSn5gOgLAZ87DAWgSABUlRHPtOo8CsP/RFow3wiFuOJyIhlPx8MNo+HE8PiAZHpIND0qrw/Kjc1g+PjGpvNa03VMz6uR0eHretUBhSQoU6BLNQVWiiYtU5uEiVbgJVGU6XVmo3D6FStGnUPkvl2qHF6sJy/UCG/ZSXVgMv7IhvrQq0QrxtV0tgN4XlwhaYwGcqQ2Cf3WLAaAoL68xQaPyYlh0Ao66vkcFTZKwgQFDA24ibOHA0ICdCJtYchI2sZC18WBsECbCRiZE/ebvnpO1cqUlauWia2YrB1cmzr3I/SDR2ULY0FiKLpdEOsee88HPhg9vavUc4zKcbZVMW+/wxubxrd1jmtu3bF1jQHv/+AGH4SMeYXHlPeTSYR2QQy6FMZ8bQHjlmA9i0MmiJ52oRq1oR73GD7t9IxBP6BcSe1rSSIHjuCFe/jLLb5RDryiKlzATqQfZQJ3ti19H7QvrOgBbO/r9c4KNHH7/tQilGACIm+P/xQ//Av/qrTww2LhCAAAAAElFTkSuQmCC"
                                            alt="instagram"
                                        />
                                    </td>
                                    <td width="5">
                                        <div></div>
                                    </td>
                                    <td>
                                        <SocialMediaBadge
                                            href="https://github.com/ddsoyka"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAB9CAMAAABd7Js+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwBg3yAQgM+/QO8wn49wUK/uVa0oAAAEkElEQVRo3u1byZLjIAw12GzGNvr/r53YSaY7CUIIZOfSqprTdIWH0PK0eBgaZN6Mcc7BQ7Rz0Sg/DVfIvEYLiARntlNRjCoFoMQu/qTTVwuVEuImfrxywJKwzIKnTyYAX5yS0n1sOf7wDiVye+iQfghrgD7RXfboLfSLG5u1v4CMmMaYp0FKbItPriApK1v9CWQl8ZLEaEFaWM8wB5CXUJ+ktjPOv0ltVFJwlqgvn18XETY4U9bv2B/jFc4+n0IwWThdit6Yzj8fQiE7GrhCLBqVPVwjETMAnas1XOd1na02xBz/mI9iqNE0w3LwMVtpBrkHsE/vjB20PMMsXA5AjgAtPwmaWRu4H28b6yKioXx2ZGjBvjh75gXDhydM2Qu+hcl3g7zV5Ye8//rb/WKNJ2SvZz8yZXjW4cq/GNLkN/Os2+NUQy/fCNKYJ3IZrqiXDQ9l3jjt6+KLq1BAK6H/YJh0ThjhTAADkCowXwDwooLwDQCJpoHnAoAfY8YSziJzvqd+fkTjqQwAjOdqsg4NMgBQnrPhsfrjlXrEEcxkFKyqs0QHCA0XOgEiVjjjv78RVNjKdH4VcUFcQ1KdZ7TZpMtcWK7r7EpWvsLJcRClOw9+jJmAlmz9q4IR6M5+RtcjONwGg+zsA7M0/H+i8MQBUfSMZgrpoYfBPA3LFNLTJ4+52nJqIiRZiSmZp6xY5JzLADjkHPttAPBdAPAH4A/AQHF2MQk8AHBRJMQBSOcCjPyjVYm/JhlZlC+uwgAM8HKBOCFJGIDlIjcIGCtFS9dZ9PwN5f7bqXUh0YbbubeHK94ArUx8oTSUpKWqEG40XJAOdEHN6QIVmNIl8UmVWHU4hlIB7PnTJa4F2nIHQHLzguWCz5TnBEb+jedbqkklEI4mR47zx5P2kO5ZuDjrmstO+qgSTbszjOVhdMg3sbT9gNCmBU/N2WKuk6j3w7b3Fb6kuGrwC72JtWUL1+NdvPrgCXZRlRl69CbVjDl1PlUcG0cJfHaXzDqzepQuzl6ZWD/tXpBkGdQ+BxxmPIDN7IhH9eLfrMVNu2HYSTOj08RawHMF0r53qV1A+tyJ34yjiX/Ko1u4UwzGEoouQ9+D5KpzcSy29CPph3QZQ1sgem7JpNsUkBlruH1SrT7JXGgcDZCWHLM3nWZVb4Il/k9uBnzSJnuHFb3mTBHG9n0qk/ub24WGyfyHULE3X3d+qmllxntSuP3z82puss4DXbR3rHPNiMP7I2p743eMqXk8VME1TV5PU9of/ujaBHqQ5JhBuPgIv11lTXV1imt9gKwnNJDiCgAbo4ZcJnkAkRXINJeLOX4IItJZiL+pGPk5EwWAmsYhrMb+39nyfQACySspVtMJoMKViM3ePgBVblVG0AWg0q2LCCgAWqLWLn3f4NuTESOsUT2NFgCB1f6eojQAze28GlkAjl/jI62FNgBNjZZ8c6UFQGidfuQ+dWsAkDpaLK4fQN/3dsOmOwGY7nbr2043D0CU2Md7/eSUAyDKrAMOv0sTEoCVP/7OFl3lHOXRd9Wr+DfY43pTQ6ID6mpBx/q4+w89uMhb/iCY3AAAAABJRU5ErkJggg=="
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
