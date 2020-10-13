import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from '../firebase-setup';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => { history.push('/') })
        .catch(error => console.log('unable to login: ', error.message))
    }

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => { history.push('/') })
        .catch(error => console.log('unable to register user: ', error.message))
    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazone logo"
        />
      </Link>
      <div className="login__container">
        <h1>Login</h1>
        <form>
          <h5>Email</h5>
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} required />
          <h5>Password</h5>
          <input type="password" value={password} onChange={event => setPassword(event.target.value)}  required />
          <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button onClick={register} className="login__signInButton__createAccount">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
