import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./login.css";
const Login = () => {
    
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    const history=useHistory();
    const submitHandler = (e) =>{
      e.preventDefault();
      const detail = { name, pass};
      fetch('http://localhost:8000/credentials/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(detail)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
       
    }

    return (
        <div className='login-wrapper'>

        <form onSubmit={submitHandler} >
          <div class="imgcontainer">
          <i className="fa-solid fa-user fa-2xl"></i>
          </div>
        
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input 
              type="text" 
              placeholder="Enter Username" 
              name="uname" required 
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
        
            <label for="pass"><b>Password</b></label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              name="pass" required 
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
              />
                
            <button type="submit" className='login-btn'>Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
           </div>
          <div class="container bottom-btn" >
            <button type="button" class="cancelbtn">Cancel</button>
          { /* <span class="psw"><button type='button' className='forgotbtn'>Forgot  </button></span> */}
          </div>

        </form>
        </div>
    );
}

export default Login;
