import React from "react";
import "./Teams.scss";
import bgImage from "../../../Assets/Images//teams-background.jpg";
import { Col, Row } from "antd";

const listData = [
  {
    label: "Motion",
    list: ["Cienema", "TVC", "Viral", "Show", "Drama"],
  },
  {
    label: "Design",
    list: ["Brand Design", "Motion Design", "Social Design"],
  },
  {
    label: "Sound",
    list: ["Looc.Music", "Producing Music", "Music Studio"],
  },
  {
    label: "Academy",
    list: ["Looc.Music.Academy", "Academic Seminar"],
  },
  {
    label: "Games",
    list: ["mini Game", "Virtual R&D"],
  },
  {
    label: "Platform",
    list: ["Video Monster", "IMG Monster", "Motion Trend", "Samsung / SI"],
  },
  {
    label: "Development",
    list: ["Severless", "Platform", "WEB"],
  },
  {
    label: "Store",
    list: ["Space.Looc", "Maho Table", "Piggy Bank", "Huion"],
  },
];
const Teams = () => {
  return (
    <div className="container">
      <div className="teams" style={{ backgroundImage: ` url(${bgImage})` }}>
        <div className="teams-title">
          <span>TEAMS</span>
        </div>
        <div className="teams-content">
          <Row gutter={50}>
            {listData.map((item, index) => (
              <Col
                span={6}
                key={index}
                style={index > 3 ? { marginTop: "30px" } : {}}
              >
                <label className="teams-content-label">{item.label}</label>
                <ul className="teams-content-list">
                  {item.list.map((i, number) => (
                    <li key={number}>
                      <p>{i}</p>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Teams;
