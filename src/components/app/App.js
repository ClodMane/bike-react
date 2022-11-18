import "../../style/buttons.scss";
import "../../style/style.scss";
import "./app.scss";
import image2 from "../../resources/image/image2.png";
import image1 from "../../resources/image/image1.png";
import image_mini_2 from "../../resources/image/image_mini_2.png";
import image_mini_1 from "../../resources/image/image_mini_1.png";

import TabWrapper from "../tabwrapper/TabWrapper";
import CollapseWrapper from "../CollapseWrapper/CollapseWrapper";

const App = () => {
  const mockData = [
    {
      head: "Горный велосипед",
      title: "Велосипед STELS Navigator 510 HD 26 2022",
      id: 1,
      listType: "number",
      description:
        "<p>Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.</p> <p>Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена с учетом использования велосипеда подростками.</p>",
      image: image1,
      imageSmall: image_mini_1,
      characteristics: [
        "Двойной обод",
        "Алюминиевый сплав",
        "Колеса диаметром 26 дюймов",
        'Покрышки 26х1,95"',
      ],
    },
    {
      head: "Женский велосипед",
      title: "Велосипед SCHWINN Traveler women 2022",
      id: 2,
      listType: "image",
      description:
        "<p>Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам без проблем его перемещать.</p> <p>На данном велосипеде имеется 7 скоростей с переключателями от Shimano, а жесткая вилка обеспечивает отличную управляемость. Подходит для катания по асфальтированным поверхностям.</p>",
      image: image2,
      imageSmall: image_mini_2,
      characteristics: [
        "Стальная рама",
        "Жесткая вилка",
        "Колеса диаметром 24 дюймов",
        "7 скоростей",
      ],
    },
  ];
  return (
    <div className="App" style={{ background: "#F4F4F4" }}>
      <TabWrapper cards={mockData} />
      <CollapseWrapper cards={mockData} />
    </div>
  );
};

export default App;
