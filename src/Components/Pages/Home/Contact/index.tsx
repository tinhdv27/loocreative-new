import "./styles.scss";

import img from "../../../../Assets/Images/bg-banner.png";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface Props {
  className: string;
}

const Contact = ({ className }: Props) => {
  return (
    <div className={`contact ${className}`}>
      <div className="contact-img">
        <img src={img} alt="" />
      </div>
      <div className="contact-container">
        <div className="contact-partner contact-partner-title">
          <span className="title-head">LOOCREATIVE</span>
          <span className="content-head">creative partners</span>
        </div>
        <div className="contact-partner contact-partner-content">
          <span className="title">Partnership.</span>
          <span className="content content-icon">
            <span>loocreative@playlooc.com</span>
            <MailOutlined className="icon" />
          </span>
        </div>
        <div className="contact-partner contact-partner-content">
          <span className="title">Recruiting.</span>
          <span className="content content-icon">
            <span>loocreative@playlooc.com</span>
            <MailOutlined className="icon" />
          </span>
        </div>
        <div className="contact-partner contact-partner-content">
          <span className="title">Learn more.</span>
          <span className="contact-partner-learn-more">
            <Link to="/works">Learn more about us.</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Contact;
