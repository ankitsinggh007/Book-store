import { Route,Routes,Navigate } from "react-router-dom";
import MainBody from "./Component/MainBody";
import Navbar from "./Component/Navbar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categories from "./pages/Categories"
import { useState,useEffect } from "react";
import db from "./Component/Firbase"
import {  collection, getDocs } from 'firebase/firestore/lite';
function App() {
  const [state, setstate] = useState("");
  useEffect(()=>{
     const  fetch = async ()=> {
      const citiesCol = collection(db, 'Arts');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    setstate(cityList);
    }
    fetch();
  },[]);
  console.log(state)
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/Signup'} element={<Signup/>}/>
      <Route path={'/'} element={<MainBody/>}/>
      <Route path={'/cart'} element={<Cart/>}/>
      <Route path={'/categories'} element={<Categories/>}/>
      <Route path={'/*'} element={<Navigate to={"/"}/>}/>
      </Routes>
    </div>
  );
}

export default App;
