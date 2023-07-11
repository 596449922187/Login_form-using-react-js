import React from 'react'

const Register = () => {
  return (
    <div className="auth-form-container">
        <><h2>Sign Up </h2>
      <form className="register-form">
      <label for="First Name">First Name</label>
        <input type=" First Name" placeholder=" First Name" id="First Name" name="First Name"/>
        <label for="email">LastName</label>
        <input type="Last Name" placeholder="Last Name" id="Last Name" name="Last Name"/>
        <label for="email">email</label>
        <input type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
        <label for="password">Password</label>
        <input type="password" placeholder="********" id="password" name="password"/>
        <button>Sign Up</button>
      </form>
      <button className="link-button">Don't have an account? Register here</button>
      </>
    </div>
  )
}

export default Register
