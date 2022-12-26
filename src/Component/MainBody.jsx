import React from 'react'
import classes from "./MainBody.module.css"
import TBC from "../Media/TBC.png"
import banner from "../Media/banner.png";
import {Button, TextField} from "@mui/material"
import Creative from "../Media/Creative.svg"
import Bio from "../Media/Bio.svg"
import Romance from "../Media/Romance.svg"
import health from "../Media/health.svg"
import Food from "../Media/Food.svg"
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import { positions } from '@mui/system';
import Slider from "./Slider"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
function MainBody() {
  const categories=[
    {
      id:1,
      color:"2,176,78",
      icon:Creative,
      subtitle:"Arts & Photography",
    },
    
    {
      id:1,
      color:"239,32,77",
      icon:Romance,
      subtitle:"Romance",
    },
    {
      id:1,
      color:`254,131,77`,
      icon:Bio,
      subtitle:"Biography",
    },
    {
      id:1,
      color:`226,145,168`,
      icon:health,
      subtitle:"Health",
    },
    {
      id:1,
      color:`255,213,158`,
      icon:Food,
      subtitle:"Food & Drink",
    }
  ];
  
  
  
  return (
    <>
    <div className={classes.section1}>
        <span>
            <h2 className={classes.feature}>The BookStore Features'</h2><p>
you're looking for a good read!, you've come to the right <b>place!</b></p>
<Button variant="contained" style={{backgroundColor:"#161619",padding:"15px",fontSize:"1.2rem"}}>See More</Button>
</span>
<span className={classes.image}><img src={banner}/></span>
    </div>
    <div className={classes.section2}>
      <div className={classes.header}><span style={{fontSize:"2rem"}}>Featured Categories</span><span className={classes.link} style={{fontSize:"1rem",display:"flex",cursor:"pointer"}}><span>All Categories</span><span><ArrowForwardIosTwoToneIcon /></span></span></div>
      <div className={classes.categories}>
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
    </div>
    <Slider/>
    <div className={classes.section3}>
      <h1>Join Our Newsletter</h1>
      <p>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
      <div className={classes.input}><TextField style={{width:"70%",marginRight:"15px",position:"relative",top:"5px"}} />
      <Button variant="contained" style={{backgroundColor:"#161619",padding:"15px",fontSize:"1.2rem"}}>See More</Button>
      </div>
    </div>
    <div className={classes.footer}>
      <div className={classes.details}>
        <div><img src={TBC} width="150"/></div>
        <div>1418 River Drive, Suite 35 Cottonhall, CA 9622
United States</div>
<div className={classes.contact}><div>as3824115@gmail.com</div>
<div>9784578456</div></div>
        <div className={classes.social}><FacebookIcon/><InstagramIcon/><YouTubeIcon/><TwitterIcon/></div>
      </div>
      <div className={classes.Explore}>
      <h3>Explore</h3>
        <div>About us</div>
        <div>Sitemap</div>
        <div>Bookmarks</div>
        <div>Signin/join</div>
      </div>
      <div className={classes.Categories}>
        <h3>Categories</h3>
        <div>Horror</div>
        <div>Art & Photography</div>
        <div>Self Help</div>
        <div>Novel</div>
        <div>Medical</div>
      </div>
    </div>
    </>
  )
}

export default MainBody