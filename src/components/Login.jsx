import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getProfile, login } from '../redux/auth/action'

const Login = () => {
  const [usrName,setUsrName] = useState("")
  const navigate = useNavigate()
  const [pass, setPass] = useState("")
  const dispatch = useDispatch()
  const token = useSelector(state => state?.token)

  const handleLogin = (usrName, pass) => {
    const data = {
      username:usrName,
      password: pass
    }
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json"
      }
    }).then((res) => res.json())
      .then((res) => {
        handleProfile(usrName);
       dispatch(login(res.token));
        navigate('/');
      })
      .catch((err) => console.log(err))

      const handleProfile =(usrName) => {
        fetch(`https://masai-api-mocker.herokuapp.com/user/${usrName}`,{
          method:"GET",
          mode:"cors",
          headers:{
            Authorization: `Bearer ${token}` 
          }
        })
        .then((res) => res.json())
        .then((res) => dispatch(getProfile(res)))
        .catch((err) => console.log(err))
      }
  }
  
  return (
    <div>
      <h1>LOGIN</h1>
      <TextField value={usrName} onChange={(e) => setUsrName(e.target.value)} id="outlined-basic" label="User Name" variant="outlined" /><br /><br />
      <TextField value={pass} onChange={(e) => setPass(e.target.value)} id="outlined-basic" label="Password" variant="outlined" /> <br /><br />
      <Button onClick={() => handleLogin(usrName, pass)} variant="contained">LOGIN</Button> <br /><br />
    </div>
  )
}

export default Login
