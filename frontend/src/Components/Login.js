import React, { useState } from 'react'
import { login_user } from '../controllers/userRoutes';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginuser = async () => {
        await login_user({ username, password }).then((res) => {
            localStorage.setItem('token', res.token);
        })
    }
    return (
        <>
        <div style={{background:"grey"}}>
            EMAIL : 
            <br />
            <input type="email" onChange={(e) => setUsername(e.target.value)} />
            <br />
            PASSWORD : 
            <br />
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
            <br /><button
                onClick={() => loginuser()}
            >
                LOGIN
            </button>
            </div>
        </>
    )
}

export default Login