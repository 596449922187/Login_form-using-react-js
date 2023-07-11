import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <label for="email">email</label>
        <input type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
        <label for="password">email</label>
        <input type="password" placeholder="********" id="password" name="password"/>
        <button>LOG IN</button>
      </form>
    </div>
  )
}

export default Login
