import React from "react";
import Helmet from "react-helmet";
import Resume from "../settings/resume.json";
import Settings from "../settings/settings.json";
import Favicon from "../assets/logo.png";

export const HelmetMeta = () => {
    const city = Resume?.basics?.location?.city || "";
    const country = Resume?.basics?.location?.country || "";
    const hasLocation = city || country;
    const title = hasLocation
        ? `${Resume.basics.name} | ${city}${city && country ? ", " : ""}${country}`
        : `${Resume.basics.name} | Portfolio`;

    return (
        <Helmet>
            <meta name="theme-color" content={Settings.colors.primary} />
            <title>{title}</title>
            <meta name="author" content={Resume.basics.name} />
            <meta name="description" content={Resume.basics.description} />
            <meta name="keywords" content={Resume.basics.keywords} />
            <link rel="icon" type="image/png" href={Favicon} />
            <link rel="shortcut icon" type="image/png" href={Favicon} />
            <link rel="apple-touch-icon" href={Favicon} />
        </Helmet>
    );
};
