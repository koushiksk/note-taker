import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res))
      .then((data) => {
        setData(data)
        console.log(data)
      })
  };

  // const getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:4000/user",
  //   }).then((res) => {
  //     setUser(res.data);
  //     console.log(res.data.username);
  //   });
  // };


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
          <fieldset id="login" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw7 ph0 mh0">Login</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor='email-address'>Email</label>
              <input onChange={(e) => setLoginEmail(e.target.value)} className="pa2 f5 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor='password'>Password</label>
              <input onChange={(e) => setLoginPassword(e.target.value)} className="b pa2 f5 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
          </fieldset>
          <div className="">
            <input onClick={login} className="b ph3 pv2 input-reset ba b--black bg-transparent hover-bg-black hover-white grow pointer f6 dib" type="submit" value="Login" />
          </div>
          <div className="lh-copy mt3">
            <Link to="/register" className="f6 link dim black pointer dib">Register</Link>
          </div>
        </div>
      </main>

      <div>
        {!data ? <Navigate to="/user" /> : null}
      </div>
    </div>
  )
}

export default Login