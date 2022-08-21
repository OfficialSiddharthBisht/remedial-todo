import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'


const SubTask = ({subtaskData,setsubtaskData}) => {
  const [subTask, setSubTask] = useState("")

  const handleAdd = (subTask) => {
    const data = {
        title:subTask,
        status:false,
        id:uuid()
    }
    setsubtaskData(prev => (
        [...prev,data]
    ))
  }

  const toggleStatus = (id, status) => {
    const updatedData = [...subtaskData].map((el) => el.id===id ? {...el,status:!el.status} : el)
    setsubtaskData(updatedData)
  }


  const handleDelete = (id) => {
    const updatedData = [...subtaskData].filter((el) => el.id!==id )
    setsubtaskData(updatedData)
  }
  return (
    <div>
       <div>
          <br />
          <TextField value={subTask} onChange={(e) => setSubTask(e.target.value)} id="outlined-basic" label="Sub Task" variant="outlined" />
          <br />
          <br />
          <Button onClick={() => handleAdd(subTask)} variant="contained">ADD</Button>
          {/* onClick={() => handleAdd()} */}

        </div>
        <br />
        <br />
        <div>
          {
            subtaskData.map((e) => (
              <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around",marginTop:"10px", border: "1px solid #cecece" }} >
                <FormControlLabel onChange={() => toggleStatus(e.id, e.status)} control={<Checkbox checked={e.status} />} />
                <h3>{e.title}</h3>
                <Button style={{ height: "70%", marginTop: "15px" }} onClick={() => handleDelete(e.id)} variant="contained">Delete</Button>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default SubTask
