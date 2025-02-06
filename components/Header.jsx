import React from "react";
import { useTranslation } from 'react-i18next';

export default function Header () {
    const [currentLanguage, setCurrentLanguage] = React.useState("EN");

    const { t, i18n } = useTranslation();

    function changeLanguage(lang) {
        setCurrentLanguage(prevLang => prevLang === "EN" ? "IT" : "EN");
        i18n.changeLanguage(lang);  // Change language
    }

    return (
        <header>
            <span className="header-title">{t("My portfolio")}</span>
            <button 
                className="switch-language-button"
                onClick={currentLanguage === "EN" ? () => changeLanguage('it') : () => changeLanguage('en')}
            >{currentLanguage}</button>
        </header>
    )
}