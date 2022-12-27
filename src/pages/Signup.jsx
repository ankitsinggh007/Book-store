import React from 'react'
import TextField from '@mui/material/TextField';
import "./Signup.css"
import { Button } from '@mui/material';
import tbc from "../Media/TBC.png"
function Signup() {
  return (
    <div className='Register'>
          <div  ><img className='Logo_register' src={tbc} height="60px" width="60px"/>
          </div>

<div className='name'>
<TextField id="outlined-search" label="First Name" type="text" />
<TextField id="outlined-search" label="Last Name" type="text" />
</div>
<div>
<TextField id="outlined-search" label="Phone no." type="number" />
<TextField id="outlined-search" label="Email" type="email" />
</div>
    <div className='credential'>
    <TextField id="outlined-search" label="Password" type="password" />
    <TextField  id="outlined-search" label="Re-enterd Password" type="password"  />
    </div>
<div>
<Button variant="contained" style={{backgroundColor:"#161619",padding:"12px",fontSize:"1.2rem"}}>Register</Button>

</div>
    
  </div>
  )
}

export default Signup