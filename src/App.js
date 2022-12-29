import { createUserWithEmailAndPassword , getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Route,Routes,Navigate, useNavigate } from "react-router-dom";
import MainBody from "./Component/MainBody";
import Navbar from "./Component/Navbar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categories from "./pages/Categories"
import { useState,useEffect, createContext } from "react";
import { collection, addDoc } from "firebase/firestore";  
import DataBase from "./Component/Firbase"
import { getDocs } from 'firebase/firestore/lite';
import Categories_page from "./pages/Categories_page";
import Desciption from "./pages/Desciption";
export const User=createContext({});
function App() {
 const [Data, setData] = useState();
 const API_KEY=`AIzaSyCFwMBb4r146zfcv-IrdUn-vk8_asDkvck`;
  const Navigate=useNavigate();
  const [Creadential, setCreadential] = useState({fname:"",lname:"",email:"",Gender:"",Password:""});
  const [LoggedInUserData, setLoggedInUserData] = useState({fname:"",lname:"",email:"",Gender:"",isAuthrized:false,Liked:[],Cart:[]});

 const auth = getAuth();
// Creat user in DataBase
   const CreateUserInDataBase = async ()=>{
    const DocRef= await addDoc(collection(DataBase,"User"),{
    email:Creadential.email,
    firstName:Creadential.fname,
    lastName:Creadential.lname,
    Gender:Creadential.Gender,
  }); 
  Navigate("/login")
 }
// Create User
const createUser=async (email,password)=>{
     createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user,"user");
      CreateUserInDataBase();

  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage,"error");
      setCreadential({...Creadential,message:errorCode.split("/")[1]})
      
  }); 
}
// Login User
const verifyCredential=async()=>{
  console.log("i am in verifyCredential")
   const res= await signInWithEmailAndPassword(auth, Creadential.email, Creadential.Password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email,"user");
      setLoggedInUserData({
        ...LoggedInUserData,
        email:user.email,
      })
      Navigate("/")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage,"err");
      setCreadential({...Creadential,message:errorCode.split("/")[1]})

    });
  
}
console.log(Creadential);
 
  return (
    <User.Provider value={{Creadential,setCreadential,createUser,verifyCredential}}>
      <Navbar/>
      <Routes>
      { !Creadential.isAuthrized && <Route path={'/login'} element={<Login/>}/>}
      {!Creadential.isAuthrized && <Route path={'/Signup'} element={<Signup/>}/>}
      <Route path={'/'} element={<MainBody/>}/>
      <Route path={'/cart'} element={<Cart/>}/>
      <Route path={'/categories'} element={<Categories/>}/>
      <Route path={'/*'} element={<Navigate to={"/"}/>}/>
      <Route path={'/categories/:params'} element={<Categories_page/>}/>
      <Route path={'/categories/:params/:name'} element={<Desciption/>}/>
      
      </Routes>
    </User.Provider>
  );
}

export default App;
