import React from 'react'
import classes from "./Categories.module.css"
import {categories} from "../Component/MainBody"
function Categories() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Categories</h1>
    <div className={classes.Categories}>
    {
          categories.map((obj,index)=>{
        return(
               <div className={classes.cat_items} style={{backgroundColor: `rgba(${obj.color} ,.60)`}}>
                <img className={classes.cat_items_icons} src={obj.icon} width="35%"/>
                <h2>{obj.subtitle}</h2>
                <h3 >Shop Now</h3>
                </div>
                
              )
          })
        }
        
    </div>
    </>

  )
}

export default Categories