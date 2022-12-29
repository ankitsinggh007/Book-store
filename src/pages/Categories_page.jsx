import { ClassNames } from '@emotion/react'
import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./Categories_pages.module.css";
import BestSelling from '../Component/Data/BestSellingbook';
import {MdFavoriteBorder} from "react-icons/md"
function Categories_page() {
const Navigate=useNavigate();
  const API_KEY=`AIzaSyCFwMBb4r146zfcv-IrdUn-vk8_asDkvck`;
const [Data, setData] = useState([]);
const params=useParams();
console.log(params,"params");
useEffect( () => {
  const fetchData= async ()=>{
    const response=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.params}&maxResults=40&key=${API_KEY}`);
  const data=await response.json();
      console.log(data,"data")
  const result=data?.items?.filter(obj=>(obj.volumeInfo &&obj.volumeInfo.imageLinks &&obj.volumeInfo.imageLinks.thumbnail &&obj.volumeInfo.title && obj.volumeInfo.authors && obj.volumeInfo.description ));
  // setData(result);.
  console.log(result);
  setData(result)


  }
  fetchData();
}, [])
console.log(Data)
    return (
<>
<h1 style={{textAlign:"center"}} >{params.params}</h1>
<div className={classes.Categories_container}>
       {Data.length!=0 &&
        Data.map((Data,index)=>{
          
          return(
            <div className={classes.Categories_items} onClick={()=>Navigate(`/categories/${params.params}/${Data.volumeInfo.title}`)}>
            <MdFavoriteBorder className={classes.icon} fontSize={"1.6rem"}  fill='red'/>

            <div className={classes.Categories_img} style={{backgroundImage:`url(${Data?.volumeInfo?.imageLinks?.thumbnail})`}} />
            <div className={classes.deatils}>
            <span style={{fontSize:"1.2rem"}}>{Data.volumeInfo.title}</span>
            <span style={{fontSize:"1rem",color:"grey"}}>{Data?.volumeInfo?.authors[0]}</span>
            <span style={{color:"grey"}}><span style={{color:"black"}}>Language:</span>{Data.volumeInfo.language?"English":"Hindi"}</span>
            <span>₹{200}</span>
            </div>
            </div>
          )

        })
       }
        </div>
        </>

  )
}

export default Categories_page