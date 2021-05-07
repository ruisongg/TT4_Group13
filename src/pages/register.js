import React from 'react';

const Register = () => {
  return(
    <div>
    <form>
      <img src="https://www.pinclipart.com/picdir/big/117-1177303_1-dbs-group-holdings-ltd-dbs-bank-logo.png" width="250" height="auto"/>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

      <div className="form-floating">
        <input type="name" className="form-control" id="floatingInput" placeholder="name"/>
          <label for="floatingInput">Name</label>
      </div>

      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
      </div>

      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Password</label>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Register;
