import { StaticImage } from "gatsby-plugin-image";
import React from 'react';

const Avatar = () => {
    return (
        <StaticImage
            src="../images/avatar.jpg"
            alt="Avatar"
            width={300}
            height={300}
            layout="constrained"
        />
    );
};

export default Avatar;
