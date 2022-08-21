import React from 'react'
import {Button, TextField} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { signup } from '../redux/auth/action'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [usrName,setUsrName] = useState("")
    const [mobile,setMobile] = useState("")
    const [desc,setDesc] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // https://masai-api-mocker.herokuapp.com/auth/register

    const handleSignup = (name,email,pass,usrName,mobile,desc) => {
        const data = {
            name,
            email,
            password :pass,
            username: usrName,
            mobile,
            description:desc
        }
        fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "content-Type" : "application/json"
            }
        }).then((res) => res.json())
        .then((res) => {
            dispatch(signup());
            navigate('/login');
        })
        .catch((err) => console.log(err))
    }
    
  return (
    <div>
        <br/>
        <br/>
        <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
        <br/>
        <br/>
        <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
        <br/>
        <br/>
        <TextField value={pass} onChange={(e) => setPass(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />
        <br/>
        <br/>
        <TextField value={usrName} onChange={(e) => setUsrName(e.target.value)} id="outlined-basic" label="User Name" variant="outlined" />
        <br/>
        <br/>
        <TextField value={mobile} onChange={(e) => setMobile(e.target.value)} id="outlined-basic" label="Mobile" variant="outlined" />
        <br/>
        <br/>
        <TextField value={desc} onChange={(e) => setDesc(e.target.value)} id="outlined-basic" label="Description" variant="outlined" />
        <br/>
        <br/>
        <Button onClick={() => handleSignup(name,email,pass,usrName,mobile,desc)} variant="contained">SIGNUP</Button>
    </div>
  )
}

export default Signup

// "name": "MASAI School",
//   "email": "hello@masai.com"
//   "password": "secret",
//   "username": "masai-school",
//   "mobile": "9876543210",
//   "description": "A Transformation in education!" 