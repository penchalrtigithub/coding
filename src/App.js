
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Expensepage from './components/Expensepage/Expensepage';
import AddExpense from './components/Expensepage/AddExpense';
import Header from './components/Header/Header';

function App() {
  return (
    <div>

      <Header />

      <Switch>
        
        <Route path="/" exact >
          <Login />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/expensepage" exact>
          <Expensepage />
        </Route>

        <Route path="/addexpense" exact>
          <AddExpense />
        </Route>

      </Switch>

    </div>
  );
}
export default App;

