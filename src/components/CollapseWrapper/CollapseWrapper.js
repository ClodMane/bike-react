import Collapse from "../Collapse/Collapse";
import "./CollapseWrapper.scss";

const CollapseWrapper = ({ cards }) => {
  return (
    <div className="collapse-wrapper">
      {cards.map((card) => (
        <Collapse card={card} key={card.id} />
      ))}
    </div>
  );
};
export default CollapseWrapper;
