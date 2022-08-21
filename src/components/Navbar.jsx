import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <br />
      <AppBar position="static">
        <Toolbar variant="dense" style={{display:"flex" , justifyContent:"space-around"}}>
          <Typography variant="h6" color="inherit" component="div">
            <Link className='link' to='/'>Home</Link>
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            <Link className='link' to='/login'>Login</Link>
          </Typography><Typography variant="h6" color="inherit" component="div">
            <Link className='link' to='/signup'>SignUp</Link>
          </Typography><Typography variant="h6" color="inherit" component="div">
            <Link className='link' to='/addtodo'>Add-Todo</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
