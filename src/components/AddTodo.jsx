import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextareaAutosize, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../redux/auth/action'
import SubTask from './SubTask'

const AddTodo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // task
  const [title, setTitle] = useState("")
  const [state,setState] = useState("")
  const [tag,setTag] = useState("")
  const [desc,setDesc] = useState("")

  // sub-task
  const [subtaskData, setsubtaskData] = useState([])
  const profileData = useSelector(state => state?.profile)

  useEffect(() => {
    (!profileData) ? <Navigate to='/login' /> : console.log("profieldata")
    // handleFetch();
  }, [])

  console.log(title,state,tag ,desc)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/signup')
  }


  const handleAdd = (title,state,tag ,desc,subtaskData) => {
    const data = {
      title,
      state,
      tag,
      description:desc,
      subTask:subtaskData
    }
    fetch(`http://localhost:8080/tasks`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json"
      }
    }).then((res) => res.json())
      .then((res) => {
        alert("succefully added")
        setTitle("")
        setDesc("")
        setState("")
        setTag("")
        setsubtaskData([])
      })
      .catch((err) => console.log(err))
  }


  
  return (
    (!profileData) ? <Navigate to='/login' /> : <div className='container'>
      <div>
        <div className='profile'>
          <div>
            <h1>User Details</h1>
            <hr />
          </div>
          <div>
            <div><h3>Name -{`${profileData.name}`}</h3></div>
            <div><h3>Number -{`${profileData.mobile}`}</h3></div>
            <div><h3>Description -{`${profileData.description}`}</h3></div>
          </div>
          <div>
            <Button onClick={() => handleLogout()} variant="contained">LOGOUT</Button>
          </div>
        </div>
      </div>


      <div>
        <div>
          <br />
          <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="Title" variant="outlined" /><br /><br />
          <TextareaAutosize value={desc} onChange={(e) => setDesc(e.target.value)} minRows={5} aria-label="empty textarea"placeholder="Description" style={{ width: 200 }}/> <br /><br />
        </div>
        <div>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            style={{ marginLeft: "100px" }}
          >
            <FormControlLabel onChange={(e) => setState(e.target.value)} value="todo" control={<Radio />} label="Todo" />
            <FormControlLabel onChange={(e) => setState(e.target.value)} value="inProgress" control={<Radio />} label="In Progress" />
            <FormControlLabel onChange={(e) => setState(e.target.value)} value="done" control={<Radio />} label="Done" />
          </RadioGroup>
        </div>
        <br />
        <br />
        <br />
        <div>
          <h4>Tags</h4>
          <FormGroup style={{ marginLeft: "100px" }}>
            <FormControlLabel onChange={(e) => setTag(e.target.value)} value="official" control={<Checkbox />} label="Official" />
            <FormControlLabel onChange={(e) => setTag(e.target.value)} value="personal" control={<Checkbox />} label="Personal" />
            <FormControlLabel onChange={(e) => setTag(e.target.value)} value="other" control={<Checkbox />} label="Other" />
          </FormGroup>
        </div>
      </div>


      <div>
       <SubTask subtaskData={subtaskData} setsubtaskData={setsubtaskData}/>
      </div>


      <div>
        <br />
        <Button onClick={() => handleAdd(title,state,tag ,desc,subtaskData)} variant="contained">Create A New Task</Button>

      </div>
    </div>
  )
}

export default AddTodo

