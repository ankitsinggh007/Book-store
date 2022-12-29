import { Button } from '@mui/material'
import React,{useContext} from 'react'
import {Avatar} from '@mui/material';
import { User } from '../App';
import {TextField} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {SearchIcon} from '@mui/icons-material';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import classes from "./Navbar.module.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import tbc from "../Media/TBC.png"
import { Link } from 'react-router-dom';
import { pink } from '@mui/material/colors';
function Navbar() {
const {Creadential, setCreadential,createUser}=useContext(User);
  console.log(Creadential)
  return (
    <div className={classes.container}>
     <Link to="/" style={{color:"black",textDecoration:"none"}}><div className={classes.Logo} >
     <span className={classes.logo}><img src={tbc} height="110px" width="110px"/></span>
        <span className={classes.Name}> &nbsp;The Bookstore Cafe</span>
     </div></Link>
     <div className={classes.search}>
     <TextField id="outlined-basic" label="Search" variant="outlined" style={{width:"100%"}}  />
     <SearchSharpIcon color="action" style={{fontSize:"3rem",position:"absolute",right:"2px",}} />
     </div>
     <span className={classes}><Link to={"/categories"} style={{textDecoration:"none", color:"black"}}><span>Categories</span></Link></span>

     <div className={classes.navItem}>
        <span className={classes.cart}><Link to={"/cart"} style={{textDecoration:"none", color:"black"}}><span>Cart </span></Link><span><AddShoppingCartIcon style={{position:"relative",top:"5px"}}/></span></span>
        <span className={classes.wishlist}><Link to={"/wishlist"}style={{textDecoration:"none", color:"black"}}><span>Wishlist</span></Link><span> <FavoriteSharpIcon style={{position:"relative",top:"5px"}}/></span></span>
<div>
{
  !Creadential.isAuthrized && 

<Link to={"/signup"}><Button variant="contained" style={{backgroundColor:"#161619",padding:"12px",fontSize:"1.2rem"}}>Register</Button></Link>
}
{
  Creadential.isAuthrized && 
<Avatar
  sx={{ bgcolor:pink[400] }}
  alt={"ankit singh"}
  src="/broken-image.jpg"
/>
}
</div>
    </div>
    </div>

  )
}

export default Navbar