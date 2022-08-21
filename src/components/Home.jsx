import { Button, Checkbox, FormControlLabel } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../redux/auth/action'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const profileData = useSelector(state => state?.profile)
  console.log("profile data in home", profileData)

  useEffect(() => {
    (!profileData) ? <Navigate to='/login' /> : console.log('sucessfully loged in')
    handleFetch()
  }, [])

  const handleLogout = () => {
    dispatch(logout())
    navigate('/signup')
  }

  const handleFetch = () => {
    fetch(`http://localhost:8080/tasks`).then((res) => res.json()).then((res) => setData(res))
  }

  return (
    (!profileData) ? <Navigate to='/login' /> : <div className='container_home'>
      <div>
        <div className='profile' style={{border:"2px solid green"}}>
          <div style={{backgroundColor:"lightgreen"}}>
            <h1>User Details</h1>
          </div>
          <hr />
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


      <div style={{border:"2px solid blue"}}>
        <div style={{backgroundColor:"lightblue"}}>
          <h1 >Todo</h1>
        <hr />
        </div>
        <div>
          {
            data.map((el) => el.state == "todo" ?
              <div style={{ border: "1px solid black", margin: "auto", marginBottom: "10px", width: "70%" }}>
                <h2>{el.title}</h2>
                <h3 style={{ border: "1px solid #cecece", width: "70%", margin: "auto" }}>{el.tag}</h3>
                <p>{el.description}</p>
                <h3>Sub-Task</h3>
                {
                  el.subTask.map((e) => (
                    <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginLeft:"10px", marginRight:"10px"}} >
                      <FormControlLabel control={<Checkbox checked={e.status} />} />
                      <h3>{e.title}</h3>
                    </div>
                  ))
                }
              </div> : console.log())
          }
        </div>
      </div>


      <div style={{border:"2px solid pink"}}>
        <div style={{backgroundColor:"lightpink"}}>
          <h1>Progress</h1>
          <hr />
        </div>
        <div>
        {
            data.map((el) => el.state === "inProgress" ?
              <div style={{ border: "1px solid black", margin: "auto", marginBottom: "10px", width: "70%" }}>
                <h2>{el.title}</h2>
                <h3 style={{ border: "1px solid #cecece", width: "70%", margin: "auto" }}>{el.tag}</h3>
                <p>{el.description}</p>
                <h3>Sub-Task</h3>
                {
                  el.subTask.map((e) => (
                    <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginLeft:"10px", marginRight:"10px"}} >
                      <FormControlLabel control={<Checkbox checked={e.status} />} />
                      <h3>{e.title}</h3>
                    </div>
                  ))
                }
              </div> : console.log())
          }
        </div>
      </div>


      <div style={{border:"2px solid gray"}}>
        <div style={{backgroundColor:"lightgray"}}>
          <h1>Done</h1>
          <hr />
        </div>
        <div>
        {
            data.map((el) => el.state === "done" ?
              <div style={{ border: "1px solid black", margin: "auto", marginBottom: "10px", width: "70%" }}>
                <h2>{el.title}</h2>
                <h3 style={{ border: "1px solid #cecece", width: "70%", margin: "auto" }}>{el.tag}</h3>
                <p>{el.description}</p>
                <h3>Sub-Task</h3>
                {
                  el.subTask.map((e) => (
                    <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginLeft:"10px", marginRight:"10px"}} >
                      <FormControlLabel control={<Checkbox checked={e.status} />} />
                      <h3>{e.title}</h3>
                    </div>
                  ))
                }
              </div> : console.log())
          }
        </div>
      </div>
    </div>
  )
}

export default Home
