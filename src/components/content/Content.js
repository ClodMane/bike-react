import '../../style/buttons.scss';
import '../../style/style.scss'
import Cards from '../cards/Cards';
import Creater from '../creater/Creater';
import Panel from '../panel/Panel';

import './content.scss';

const Content = () => {
    return (
        <div className="Content">
            <Cards/>
            <Creater/>
            <Panel/>
        </div>
    )
}

export default Content;