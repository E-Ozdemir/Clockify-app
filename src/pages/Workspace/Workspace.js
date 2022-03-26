import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {workspaceId} from '../Login/Login'


const APP_KEY = process.env.REACT_APP_APP_KEY;

const Workspace = (workspaceId) => {
    const [projects, setProjects] = useState()
  

    axios({
        method: 'get',
        url: `https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects`,
        headers: {
            'X-Api-Key': APP_KEY,
            'content-type': 'application/json',
        },
      })
        .then(function (res) {
        //   setclientId(response.data);
        setProjects(res.data?.map((item)=>item))
          
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })
  return (
    <div>
        {projects?.map((item)=> (<div>{item.name}</div>))}
    </div>
  )
}

export default Workspace