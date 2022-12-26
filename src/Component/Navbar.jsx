import { Button } from '@mui/material'
import React from 'react'
import {TextField} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {SearchIcon} from '@mui/icons-material';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import classes from "./Navbar.module.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import tbc from "../Media/TBC.png"
function Navbar() {
  return (
    <div className={classes.container}>
     <div className={classes.Logo} >
     <span className={classes.logo}><img src={tbc} height="110px" width="110px"/></span>
        <span className={classes.Name}> &nbsp;The Bookstore Cafe</span>
     </div>
     <div className={classes.search}>
     <TextField id="outlined-basic" label="Search" variant="outlined" style={{width:"100%"}}  />
     <SearchSharpIcon color="action" style={{fontSize:"3rem",position:"absolute",right:"2px",}} />
     </div>
     <span className={classes}><span>Categories</span></span>

     <div className={classes.navItem}>
        <span className={classes.cart}><span>Cart </span><span><AddShoppingCartIcon style={{position:"relative",top:"5px"}}/></span></span>
        <span className={classes.wishlist}><span>Wishlist</span><span> <FavoriteSharpIcon style={{position:"relative",top:"5px"}}/></span></span>
        <Button variant="contained" style={{backgroundColor:"#161619",padding:"12px",fontSize:"1.2rem"}}>Register</Button>

    </div>
    </div>

  )
}

export default Navbar