// import image from "../../resources/image/image_mini_2.png";
// import image from "../../resources/image/image2.png";

import "./card.scss";

const Card = ({ card }) => {
  return (
    <div className="Card">
      <div className="Card-content">
        <div className="Card__img-wrapper">
          <img
            src={card.image}
            alt="bike img"
            className="Card__image Card__image--big"
          />
          <img
            src={card.imageSmall}
            alt="bike img"
            className="Card__image Card__image--small"
          />
        </div>
        <div className="Card__description-wrapper">
          <h1 className="Card__description-header">{card.title}</h1>
          <div
            className="Card__description-dscr"
            dangerouslySetInnerHTML={{ __html: card.description }}
          ></div>
        </div>
      </div>
      <hr className="Card__line"></hr>
      <div className="Card__characteristics-wrapper">
        <h3 className="sub__header characteristic__header">Характеристики</h3>
        <ol
          className={`Card__characteristics-dscr ${
            card.listType === "image" ? "Card__characteristics-dscr_image" : ""
          }`}
        >
          {card.characteristics.map((characteristic, index) => (
            <li key={index}>{characteristic}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Card;
