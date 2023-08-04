import { Drawer } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideMenu.scss";

interface Props {
  visible: boolean;
  onClose: () => void;
  isLanguage: boolean;
  onchange: (value: any) => void;
}
const menus = [
  {
    path: "/",
    // eslint-disable-next-line no-restricted-globals
    label: <span onClick={() => (location.href = "/")}>Home</span>,
  },
  {
    path: "/works",
    label: "Works",
  },
  {
    path: "/teams",
    label: "Teams",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];
const SideMenu = ({ visible, onClose, isLanguage, onchange }: Props) => {
  const param = useLocation();

  return (
    <div className="sidemenu">
      <Drawer
        placement="right"
        visible={visible}
        width={460}
        style={{ zIndex: "20" }}
        mask={false}
      >
        {visible && (
          <div className="sidemenu-multilanguage">
            <span
              className={isLanguage ? "sidemenu-multilanguage-active" : ""}
              onClick={() => onchange("kr")}
            >
              KR
            </span>
            <span
              className={isLanguage ? "" : "sidemenu-multilanguage-active"}
              onClick={() => onchange("en")}
            >
              EN
            </span>
          </div>
        )}
        <div className="sidemenu-menu">
          {menus.map((menu, index) => (
            <div
              className={
                menu.path === param.pathname
                  ? "sidemenu-menu-item sidemenu-menu-item-active"
                  : "sidemenu-menu-item"
              }
              key={index}
            >
              <Link to={menu.path} onClick={onClose}>
                <span>{menu.label}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="sidemenu-menu-line"></div>
        <div className="sidemenu-menu-item">
          <div className="sidemenu-menu-item-infoWrapper">
            <p id="adress">
              서울특별시 강남구 도산대로 8길 17-10 이리스빌딩 1F
              <br />
              Tel 02. 543. 4983 / Fax 02. 6280. 4079
            </p>
            <p className="link">
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr"
                target="blank"
              >
                View Map
              </a>
            </p>
            <p className="link">
              Work with us.
              <br />
              <a href="mailto:loocreative@playlooc.com" title="">
                loocreative@playlooc.com
              </a>
            </p>
            <p className="link">
              Recruiting <br />
              <a href="mailto:loocreative@playlooc.com" title="">
                loocreative@playlooc.com
              </a>
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideMenu;
