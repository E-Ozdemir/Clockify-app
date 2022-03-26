import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const APP_KEY = process.env.REACT_APP_APP_KEY;


export const Login = () => {
    const [clientId, setClientId] = useState()
    const [workspaceId, setWorkspaceId] = useState()
    const history = useHistory();

    axios({
        method: 'get',
        url: 'https://api.clockify.me/api/v1/user',
        headers: {
            'X-Api-Key': APP_KEY,
            'content-type': 'application/json',
        },
    })
        .then(function (res) {
            //   setclientId(response.data);
            setClientId(res.data.id);
            setWorkspaceId(res.data.defaultWorkspace);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

  function check() {
        let typedId = document.getElementById('user-id').value
        console.log('typedId :>> ', typedId);
        if (typedId == clientId) {
            history.push('/detail')
        }
        else {
            alert('fail')
        }
    }
    return (
        <div>
            <input id='user-id' type="text" />
            <button onClick={check}>Login</button>
        </div>
    )
}
