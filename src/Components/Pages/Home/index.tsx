import React, { useEffect, useState } from "react";
import Slider from "./Slider/index";
import Slogan from "./Slogan/index";
import Category from "./Category/index";
import History from "./History/index";
import Contact from "./Contact";
import "./styles.scss";

import { useLocation } from "react-router-dom";
import { scroll } from "./Common/Fullpage/fullpage";

export const Home = () => {
  const param = useLocation();
  const [sliderClass, setSliderClass] = useState("");
  const [sloganClass, setSloganClass] = useState("");
  const [categoryClass, setCategoryClass] = useState("");
  const [historyClass, setHistoryClass] = useState("");
  const [contactClass, setContactClass] = useState("");

  const resetClass = () => {
    setSliderClass("");
    setSloganClass("");
    setCategoryClass("");
    setHistoryClass("");
    setContactClass("");
  };

  useEffect(() => {
    scroll();
  });

  useEffect(() => {
    switch (param.hash) {
      case "#firstPage":
        resetClass();
        setSliderClass("slider-animation");
        break;
      case "#secondPage":
        resetClass();
        setSloganClass("slogan-animation");
        break;
      case "#thirdPage":
        resetClass();
        setCategoryClass("category-animation");
        break;
      case "#fourthPage":
        resetClass();
        setHistoryClass("history-animation");
        break;
      case "#fifthPage":
        resetClass();
        setContactClass("contact-animation");
        break;

      default:
        resetClass();
        break;
    }
  }, [param]);

  return (
    <>
      <div className="page-home" id="fullpage">
        <div className="section">
          <Slider className={sliderClass} />
        </div>
        <div className="section">
          <Slogan className={sloganClass} />
        </div>
        <div className="section" id="s1">
          <Category className={categoryClass} />
        </div>
        <div className="section">
          <History className={historyClass} />
        </div>
        <div className="section">
          <Contact className={contactClass} />
        </div>
      </div>
    </>
  );
};
