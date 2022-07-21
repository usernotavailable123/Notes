import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();// //use navigate hook to redirect

  const [credentials,setCredentials] = useState({email:"",password:"",name:"",cpassword:""});
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const {name,email,password} = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,password}) 
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
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter Name" onChange={onChange}/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" name ="password" id="password" placeholder="Password" onChange={onChange} minLength={5} required/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" name = "cpassword" id="cpassword" placeholder="Confirm Password" onChange={onChange} minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
