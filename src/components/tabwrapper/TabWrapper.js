import "../../style/buttons.scss";
import "../../style/style.scss";
import Tab from "../tab/Tab";
import Content from "../content/Content";
import { useState, useEffect } from "react";

import "./TabWrapper.scss";

const TabWrapper = ({ cards }) => {
  const [id, setId] = useState(1);
  const [currentTab, setCurrentTab] = useState(cards[0]);

  const onTabSelect = (id) => {
    setId(id);
  };

  const findCurrentTab = (id) => {
    let item = cards.find((i) => i.id === id);
    setCurrentTab(item);
  };

  useEffect(() => {
    findCurrentTab(id);
  }, [id]);

  return (
    <div className="Item">
      <Tab onTabSelect={onTabSelect} currentTabId={id} />
      <Content card={currentTab} />
    </div>
  );
};

export default TabWrapper;
