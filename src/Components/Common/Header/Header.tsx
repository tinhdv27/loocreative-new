import React, { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import "./Header.scss";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import { transEN } from "../../lang/TranslationEN";
import { transKR } from "./../../lang/TranslationKR";

const translationEN = transEN;
const translationKR = transKR;
const resources = {
  en: { translation: translationEN },
  kr: { translation: translationKR },
} as const;

i18next.use(initReactI18next).init({
  lng: "kr",
  resources,
  fallbackLng: "kr",
  interpolation: { escapeValue: false },
});

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLanguage, setIsLanguage] = useState(true);

  const showDrawer = () => {
    setVisible(!visible);
    setIsActive(!isActive);
  };

  const onClose = () => {
    setVisible(false);
    setIsActive(false);
  };

  const onchange = (value: any) => {
    i18n.changeLanguage(value);
    value === "en" ? setIsLanguage(false) : setIsLanguage(true);
  };

  return (
    <>
      <div className="header">
        <div
          className={
            isActive ? "header-menu header-menu-active" : "header-menu"
          }
          onClick={showDrawer}
        >
          <div className="header-menu-line header-menu-line-1"></div>
          <div className="header-menu-line header-menu-line-2"></div>
          <div className="header-menu-line header-menu-line-3"></div>
        </div>
        <div className="header-multilanguage">
          <span
            onClick={() => onchange("kr")}
            className={isLanguage ? "header-multilanguage-active" : ""}
          >
            KR
          </span>
          <span
            className={isLanguage ? "" : "header-multilanguage-active"}
            onClick={() => onchange("en")}
          >
            EN
          </span>
        </div>
      </div>
      <SideMenu
        onClose={onClose}
        visible={visible}
        isLanguage={isLanguage}
        onchange={onchange}
      />
    </>
  );
};

export default Header;
