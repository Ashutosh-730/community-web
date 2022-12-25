import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <>
        <div className = "register-page">
            <div className="register-container">
                <h2>Register</h2>
            <form className="register-form">
                <label htmlFor="name">Full name</label>
                <input type="Name" name="name" id="name" placeholder="Full Name" />
                <label htmlFor="age">Age</label>
                <input type="Age" name="age" id="age" placeholder="Age" />
                <label htmlFor="gender">Gender</label>
                <input type="radio" name="gender" value="male"/> Male
                <input type="radio" name="gender" value="female"/> Female
                <label htmlFor="email">Email</label>
                <input type="Email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="Password" placeholder="********" id="password" name="password" />
                <label htmlFor="description">Describe Yourself!</label>
                <input type="Description" placeholder="List hobbies, interests, etc!" id="description" name="description" />
                <input type="file" name="Profile Photo" id="fileId" ></input>
                <button type="submit"> Sign Me Up! </button >
            </form>
            <Link to="/login"><button className="link-btn"> Already have an account? Login here.</button ></Link>
            </div>
        </div>
    </>
  )
}

