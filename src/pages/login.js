import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const executeLogin = (e) => {
    e.preventDefault();

    fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login",{
      method: 'POST',
      headers: { 'content-type': 'application/json',
                 'x-api-key': 'QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY' },
      // body: `{ "userName": "${username}","userPass": "${password}" }`
      body: `{ "userName": "Group13","userPass": "XLzd8Kx20pFEU6v" }`
    }).then(respond => respond.json())
      .then(data => {
                      localStorage.setItem("user", JSON.stringify(data));
                      history.push("/balance");
                    });
  }

  return(
    <div>
      <form onSubmit={executeLogin}>
        <img src="https://www.pinclipart.com/picdir/big/117-1177303_1-dbs-group-holdings-ltd-dbs-bank-logo.png" width="250" height="auto"/>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="user name" onChange={e => setUsername(e.target.value)}/>
            <label for="floatingInput">User name</label>
        </div>

        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <label for="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
