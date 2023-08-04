import img from "../../../../Assets/Images/category.png";
import "./styles.scss";
import { useTranslation } from "react-i18next";

interface Props {
  className: string;
}

const Category = ({ className }: Props) => {
  const { t } = useTranslation();
  const dataCategory = [
    {
      title: "Motion",
      content: t("langHome6"),
    },
    {
      title: "Design",
      content: t("langHome7"),
    },
    {
      title: "Develop",
      content: t("langHome8"),
    },
    {
      title: "Culture",
      content: t("langHome9"),
    },
  ];
  return (
    <div className={`category ${className}`}>
      <div className="category-img">
        <img src={img} alt="" />
      </div>
      <div className="category-container">
        <div className="category-box">
          <div className="category-box-item">
            {dataCategory.map((item: any, index: number) => (
              <div className="category-item" key={index}>
                <div className="category-title title">{item.title}</div>
                <div className="category-content">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
