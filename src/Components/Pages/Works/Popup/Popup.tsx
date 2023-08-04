import Vimeo from "@u-wave/react-vimeo";
import closeIcon from "../Asset/close-icon.png";
import "./Popup.scss";
interface PopupProps {
  visible: boolean;
  vimeoId: string;
  tab: string | undefined;
  title: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const Popup = ({ visible, vimeoId, tab, title, setVisible }: PopupProps) => {
  if (!visible) return <></>;
  return (
    <div className="wapper">
      <div className="popup">
        <Vimeo video={vimeoId} className="video" />
        <p className="popup-tab">{tab}</p>
        <p className="popup-title">{title}</p>

        <div className="contact-us-btn">Contact us</div>
      </div>
      <div className="icon-close" onClick={() => setVisible(false)}>
        <img src={closeIcon} alt="" className="icon-image" />
      </div>
    </div>
  );
};

export default Popup;
