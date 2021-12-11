import { Route } from 'react-router-dom';
import { Routes as Switch } from 'react-router';

// 
import Analytics  from './Analytics'
import Customers  from './Customers'
import Dashboard  from './Dashboard'
import Products  from './Products'

export default ()=> {
  return (
    <Switch>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/customers" element={ <Customers/>}/>
      <Route path="/products" element={ <Products/>}/>
      <Route path="/" exact element={ <Dashboard/>}/>
    </Switch>
  )
}

export {default as Products} from './Products'