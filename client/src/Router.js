import React, { useContext, useState } from "react";
import { BrowserRouter,Routes, Route,useHistory } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Customers from "./components/customers/Customers";
import Navbar_ from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import Cart from "./components/Cart/Cart";
import ItemLayout from "./components/layout/ItemLayout";
import ViewProduct from "./components/Items/ViewProduct";
import Profile from "./components/layout/Profile"
import { useEffect } from "react";
import { Navbar } from "react-bootstrap";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  const [CartSize, setCartSize] = useState(0);
  const SetCart = (value) => {
    setCartSize(value);
  };
  return (
    <>
    <BrowserRouter>
      <Navbar_/>
      <Routes>
        
        {loggedIn === false? (
          <>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={ <Login />}/>
            <Route path="/Cart" element={<Cart functionToSetCartSize={SetCart} />}/>

            <Route exact path="/" element= {<ItemLayout functionToSetCartSize={SetCart} />}/>

            <Route path="/ViewProduct/:product" element={ <ViewProduct />}/>
          </>
        ): <>
        <Route path="/customer" element={<Customers/>}/>
        <Route path="/Cart" element={<Cart functionToSetCartSize={SetCart} />}/>
        <Route exact path="/" element={<ItemLayout functionToSetCartSize ={SetCart}/>}/>
        <Route path="/ViewProduct/:product" element={<ViewProduct/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </>}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Router;
