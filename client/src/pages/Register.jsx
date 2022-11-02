import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [data, setData] = useState(null);

    const register = () => {
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                email: registerEmail,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/register",
        }).then((res) => console.log(res))
    };

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/user",
        })
            .then((res) => setData(res.data))
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw7 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor='name'>Name</label>
                            <input onChange={(e) => setRegisterUsername(e.target.value)} className="pa2 f5 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name" id="user-name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor='email-address' >Email</label>
                            <input onChange={(e) => setRegisterEmail(e.target.value)} className="pa2 f5 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor='password'>Password</label>
                            <input onChange={(e) => setRegisterPassword(e.target.value)} className="b pa2 f5 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div className="">
                        <input onClick={register} className="b ph3 pv2 input-reset ba b--black bg-transparent hover-bg-black hover-white grow pointer f6 dib" type="submit" value="Register" />
                    </div>
                    <div className="lh-copy mt3">
                        <Link to="/login" className="f6 link dim black pointer dib">Login</Link>
                    </div>
                </div>
            </main>

            <div>
                {data ? <h1>Welcome Back {data.username}</h1> : null}
            </div>
        </div>
    )
}

export default Register