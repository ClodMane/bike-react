import '../../style/buttons.scss';
import '../../style/style.scss'
import Tab from '../tab/Tab';
import Content from '../content/Content';
import { useState} from 'react';

import './item.scss'

const Item = () => {

    const [id, setId] = useState(1);

    const onTabSelect = (id) => {
       setId(id) 
    }

    return (
        <div className="Item">
            <Tab onTabSelect={onTabSelect} currentTab={id}/>
            <Content id={id}/>
        </div>
    )
}

export default Item;