import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation() 

    return (
        <footer>
            <p className="footer-text">{t("FOOTER")}</p>
        </footer>
    )
}