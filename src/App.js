import logo from './logo.svg';
import './App.css';
import Header from './Pages/Share/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import InventoryItems from './Pages/InventoryItems/InventoryItems';
import Login from './Pages/Login/Login';
import SignUP from './Pages/SignUP/SignUP';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<InventoryItems></InventoryItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUP></SignUP>}></Route>
      </Routes>
    </div>
  );
}

export default App;
