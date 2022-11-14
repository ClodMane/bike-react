import image from '../../resources/image/image1.png';
import './card.scss'

const  Card = () => {
    return (
   
        <div className="Card">
            <div className="Card__body">
                <div className="card-content">
                        <div className="Card__img-wrapper">
                                <img src={image} alt="bike img" className="Card__image"/>
                        </div>
                        <div className="Card__description-wrapper">
                                <h1 className="Card__description-header">Велосипед STELS Navigator 510 HD 26 2022</h1>
                                <p className="Card__description-dscr">
                                    Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. 
                                    Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.
                                </p>
                                <p className="Card__description-dscr">
                                Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была 
                                изготовлена с учетом использования велосипеда подростками.
                                </p>
                        </div>
                </div>
                <hr className="Card__line"></hr>
                <div className="Card__characteristics-wrapper">
                    <h3 className="sub__header characteristic__header">Характеристики</h3>
                    <ol className="Card__characteristics-dscr">
                        <li>Двойной обод</li>
                        <li>Алюминиевый сплав</li>
                        <li>Колеса диаметром 26 дюймов</li>
                        <li>Покрышки 26х1,95</li>
                    </ol>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default Card;