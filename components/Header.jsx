import React from "react";
import { useTranslation } from 'react-i18next';

export default function Header () {
    const { t, i18n } = useTranslation();

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);  // Change language
    }

    return (
        <header>
            <span className="header-title">{t("SITE_HEADER")}</span>
            <button 
                className="switch-language-button"
                onClick={() => changeLanguage(i18n.language === "en" ? "it" : "en")}
            >
                {i18n.language.toUpperCase()}
            </button>
        </header>
    )
}