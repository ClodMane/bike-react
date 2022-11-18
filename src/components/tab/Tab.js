import "./tab.scss";

const Tab = (props) => {
  const buttonsData = [
    { id: 1, label: "Горный велосипед" },
    { id: 2, label: "Женский велосипед" },
  ];

  const buttons = buttonsData.map(({ id, label }) => {
    const active = props.currentTabId === id;
    const activeClass = active ? "button-tab-on" : "button-tab";
    return (
      <button
        className={`${activeClass}`}
        type="button"
        key={id}
        onClick={() => props.onTabSelect(id)}
      >
        {label}
      </button>
    );
  });
  return (
    // <button className="button-tab">Горный велосипед</button> button-tab
    <div className="tabs-wrapper">
      <div className="tabs">{buttons}</div>
    </div>
  );
};

export default Tab;
