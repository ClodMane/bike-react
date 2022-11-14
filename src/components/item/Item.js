import '../../style/buttons.scss';
import '../../style/style.scss'
import Tabs from '../tabs/Tabs';
import Content from '../content/Content';

import './item.scss'

const Item = () => {
    return (
        <div className="Item">
            <Tabs/>
            <Content/>
        </div>
    )
}

export default Item;