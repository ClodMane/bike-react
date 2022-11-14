import '../../style/buttons.scss';
import '../../style/style.scss'
import './app.scss'

import Item from '../item/Item';


const  App = () => {
  return (

      <div className="App" style={{background: '#F4F4F4'}}>
          <Item/>
      </div>
    
  );
}

export default App;
