import logo from './logo.svg';
import './App.css';
import Header from './Pages/Share/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import InventoryItems from './Pages/InventoryItems/InventoryItems';
import Login from './Pages/Login/Login';
import SignUP from './Pages/SignUP/SignUP';
import Banner from './Pages/Banner/Banner';
import Footer from './Pages/Share/Footer/Footer';
import Inventory_Details from './Pages/Inventory_Details/Inventory_Details';
import PagenotFound from './Pages/PagenotFound/PagenotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<InventoryItems></InventoryItems>}></Route>

        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <Inventory_Details></Inventory_Details>
          </RequireAuth>
        }>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUP></SignUP>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/*' element={<PagenotFound></PagenotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
