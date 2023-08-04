/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card/Card";
import Popup from "./Popup/Popup";
import { worksData } from "./worksData";
import "./Works.scss";
import logo from "./Asset/logo.png";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
const tabs = [
  "ALL",
  "SHOWREEL",
  "COMMERCIAL",
  "MOTION",
  "OPENING TITLE",
  "MV",
  "ARTWORK",
  "DESIGN",
];
function Works() {
  const [vimeoId, setVimeoId] = useState("");
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState<any>("");
  const [tabOfWork, setTabOfWork] = useState("");
  // const { tab } = useParams();
  const [works, setWorksData] = useState(worksData);
  const { t } = useTranslation();

  const param = useLocation().search;
  const path = useLocation().pathname;

  useEffect(() => {
    if (!param) return;
    if (param.split(" ").join("%20") === "?ALL") {
      setWorksData(worksData);
      return;
    }
    const newWork = worksData.filter(
      (work) => `?${work.tab.split(" ").join("%20")}` === param
    );

    setWorksData(newWork);
  }, [param]);

  console.log(path);

  return (
    <div className="works">
      <h4 className="works-title">WORKS</h4>
      <div>
        <ul className="works-tabs">
          {tabs.map((tabItem, index) => (
            <li
              key={index}
              className={`works-tabs-item ${
                param === `?${tabItem.split(" ").join("%20")}` ||
                (path === "/works" && index === 0 && !param)
                  ? "active"
                  : ""
              }`}
            >
              <Link to={`/works?${tabItem}`}>{tabItem}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="works-list-cards" style={{ paddingTop: "10px" }}>
        {works.map((work, index) => (
          <div
            key={index}
            style={{ width: "100%" }}
            onClick={() => {
              setVisible(true);
              setVimeoId(work.vimeoId);
              setTitle(t(`langWorks${work.id}`));
              setTabOfWork(work.tab);
            }}
          >
            <Card
              title={t(`langWorks${work.id}`)}
              tab={work.tab}
              cover={work.cover}
            />
          </div>
        ))}
      </div>
      <div className="box-footer">
        <ul className="footer">
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <a href="">Vimeo</a>
          </li>
          <li>
            <a href="">Youtube</a>
          </li>
          <li>
            <a href="">instagram</a>
          </li>
          <li>
            <a href="">facebook</a>
          </li>
        </ul>
      </div>
      <Popup
        visible={visible}
        tab={tabOfWork}
        title={title}
        vimeoId={vimeoId}
        setVisible={setVisible}
      />
      <div className="hidden-scroll-works"></div>
    </div>
  );
}

export default Works;
