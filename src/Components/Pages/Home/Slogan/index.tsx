import "./styles.scss";
import img from "../../../../Assets/Images/bg-content.png";

interface Props {
  className: string;
}

const Slogan = ({ className }: Props) => {
  return (
    <div className={`slogan ${className}`}>
      <div className="slogan-container">
        <div className="slogan-img">
          <img src={img} alt="" />
        </div>
        <div className="slogan-title">
          <p>
            LOOCREATIVE <br></br> PHILOSOPHY
          </p>
        </div>
        <div className="slogan-content">
          <p>Dreams come true</p>
          <p>Without that possibility,</p>
          <p>Nature would not incite</p>
          <p>us to have them.</p>
        </div>
      </div>
    </div>
  );
};
export default Slogan;
