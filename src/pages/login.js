import React from 'react';

const Login = () => {

  const executeLogin = (e) => {
    e.preventDefault();

    console.log("executeLogin");
  }

  return(
    <div>
      <form onSubmit={executeLogin}>
        <img src="https://www.pinclipart.com/picdir/big/117-1177303_1-dbs-group-holdings-ltd-dbs-bank-logo.png" width="250" height="auto"/>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="user name"/>
            <label for="floatingInput">User name</label>
        </div>

        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
