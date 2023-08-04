import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "./styles.scss";

interface Props {
  className: string;
}

const History = ({ className }: Props) => {
  const { t } = useTranslation();
  const dataHistory = [
    {
      year: "2020",
      content: [
        { title: t("langHome1"), content: "MOTION" },
        { title: t("langHome2"), content: "MOTION" },
        { title: t("langHome3"), content: "MOTION" },
        { title: t("langHome4"), content: "MOTION" },
        { title: t("langHome5"), content: "MOTION" },
      ],
    },
    {
      year: "2019",
      content: [
        { title: t("langHome1"), content: "MOTION" },
        { title: t("langHome2"), content: "MOTION" },
        { title: t("langHome3"), content: "MOTION" },
        { title: t("langHome4"), content: "MOTION" },
        { title: t("langHome5"), content: "MOTION" },
      ],
    },
    {
      year: "2018",
      content: [
        { title: t("langHome1"), content: "MOTION" },
        { title: t("langHome2"), content: "MOTION" },
        { title: t("langHome3"), content: "MOTION" },
        { title: t("langHome4"), content: "MOTION" },
        { title: t("langHome5"), content: "MOTION" },
      ],
    },
    {
      year: "2017",
      content: [
        { title: t("langHome1"), content: "MOTION" },
        { title: t("langHome2"), content: "MOTION" },
        { title: t("langHome3"), content: "MOTION" },
        { title: t("langHome4"), content: "MOTION" },
        { title: t("langHome5"), content: "MOTION" },
      ],
    },
    {
      year: "2016",
      content: [
        { title: t("langHome1"), content: "MOTION" },
        { title: t("langHome2"), content: "MOTION" },
        { title: t("langHome3"), content: "MOTION" },
        { title: t("langHome4"), content: "MOTION" },
        { title: t("langHome5"), content: "MOTION" },
      ],
    },
  ];
  const settings = {
    className: "center",
    infinite: false,
    // centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index: any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className={`history ${className}`}>
      <div className="history-container">
        <div className="history-thread">History</div>
        <div className="history-box-item">
          <Slider {...settings}>
            {dataHistory.map((item: any, index: number) => (
              <div className="history-item item" key={index}>
                <div className="history-title">{item.year}</div>
                <div className="history-content">
                  {item?.content.map((itemSub: any, indexSub: number) => (
                    <>
                      <span className={`title ${`title` + indexSub}`}>
                        {itemSub.title}
                      </span>
                      <span
                        className={`description ${`description` + indexSub}`}
                      >
                        {itemSub.content}
                      </span>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default History;
