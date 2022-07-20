import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials,setCredentials] = useState({email:"",password:""});
  const navigate = useNavigate();// //use navigate hook to redirect

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: credentials.email,password: credentials.password}) 
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      //save the auth token & redirect
      localStorage.setItem('token',json.authtoken);
      //use history hook to redirect
      navigate('/');

    }
    else{
      alert("Invalid credentials");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" placeholder="Password" />
        </div>
  
      <button type="submit" className="btn btn-primary my-2" >Submit</button>
    </form>
      
    </div>
  )
}

export default Login
