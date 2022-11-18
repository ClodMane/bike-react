import "../../style/buttons.scss";
import "../../style/style.scss";
import Card from "../card/Card";
import Creater from "../creater/Creater";
import Panel from "../panel/Panel";


import "./content.scss";

const Content = ({ card }) => {
  return (
    <div className="Content">
      <Card card={card} />
      <Creater />
      <Panel />
    </div>
  );
};

export default Content;
