import logo from './logo.svg';
import './App.css';

//components
import AddCoffee from './components/AddCoffee';
import NavBar from './components/NavBar';
import CoffeeMachine from './components/CoffeeMachine';
import AllCoffees from './components/AllCoffees';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/add' element={<AddCoffee />} />
      <Route path='/all' element={<AllCoffees/>} />
      <Route path='/' element={<CoffeeMachine />} />
     </Routes>
      
    </BrowserRouter>
  );
}

export default App;
