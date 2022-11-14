import './creater.scss'

const Creater = () => {
    return (
        <div className="Creater">
            <h3 className="sub__header characteristic__header characteristic__header-creo">Добавить характеристику</h3>
            <input type="text" className="Creater__input" placeholder='Алюминиевый сплав'/>
            <button className="button">Добавить</button>
        </div>
    )
}

export default Creater;