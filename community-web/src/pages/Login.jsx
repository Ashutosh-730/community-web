import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export const Login = () => {
  return (
    <>
    <div className = "App">
            <div className="login-page">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <Link to="/register"><button className="link-btn" type="submit">Don't have an account? Register here.</button></Link>
            </div>
        </div>
    </>
  )
}

