import Content from "../content/Content";
import arrow from "../../resources/icon/arrow.svg";
import { useState } from "react";

import "./collapse.scss";

const Collapse = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <div
          className={`button-tab-collapse ${
            isOpen ? "button-tab-collapse--open" : ""
          }`}
        >
          {card.head}
          <div
            className={`button-arrow-collapse ${
              isOpen ? "button-arrow-collapse--open" : ""
            }`}
          >
            <img
              src={arrow}
              alt="arrow"
              сlassName="button-arrow-collapse__icon"
            />
          </div>
        </div>
      </div>
      <div
        className={`collapse__content ${
          isOpen ? "collapse__content--open" : ""
        }`}
      >
        <Content card={card} />
      </div>
    </div>
  );
};
export default Collapse;
