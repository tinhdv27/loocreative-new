import "./styles.scss";
import icon from "../../../../Assets/Images/slider-icon.png";
import { useState } from "react";

interface Props {
  className: string;
}
const Slider = ({ className }: Props) => {
  const [hoursNow, setShoursNow] = useState<any>();

  function checkTime(i: any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  function startTime() {
    let currentdate = new Date();
    let hours =
      currentdate.getHours() < 10
        ? `0${currentdate.getHours()}`
        : currentdate.getHours();
    let minutes: any = currentdate.getMinutes();
    let seconds: any = currentdate.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    setShoursNow(hours + ":" + minutes + ":" + seconds);
  }
  setTimeout(startTime, 1000);
  return (
    <div className={`slider ${className}`}>
      <video autoPlay loop muted>
        <source type="video/mp4" src="https://tinyurl.com/y5x5jmnf" />
        <source type="video/webm" src="https://tinyurl.com/y6q5jxr6" />
      </video>
      <div className="slider-container">
        <div className="slider-image">
          <img src={icon} alt=""></img>
        </div>
        <div className="slider-content-look">
          <span className="slider-lool">
            <p className="slider-lool-1">LOOK</p>
            <p className="slider-lool-2">CREATIVELY.</p>
          </span>
        </div>
        <div className="slider-content-view">VIEW WORK</div>
        <div className="slider-time">
          <p className="slider-time-title">Time is our only limitation.</p>
          <p className="slider-time-detail">{hoursNow}</p>
        </div>
      </div>
    </div>
  );
};
export default Slider;
