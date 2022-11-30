import React,{useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import {signupUser} from './actions';
import "./login.css";
import {UserContext} from '../../context/UserContext'

const Signup = () => {
    const [err,setErr] = useState(false);
    const [loading,setLoading] = useState(false);
    const {signup_success} = useContext(UserContext);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password1:"",
            password2:"",
        },

       onSubmit: async (values) =>{
         setLoading(true);
          let newUser = await signupUser(values);
          if(newUser) {
              signup_success(newUser);
              console.log(newUser);
              navigate('/home');
          } else {
              setErr(true);
              setLoading(false);
          }
       }
        
    })
    return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialApp</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialApp.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" type="text" name="username" onChange={formik.handleChange} value={formik.values.username}/>
            <input placeholder="Email" className="loginInput" type="text" name="email" onChange={formik.handleChange} value={formik.values.email} />
            <input placeholder="Password" className="loginInput" type="password" name="password1" onChange={formik.handleChange} value={formik.values.password1}/>
            <input placeholder="Password Again" className="loginInput" type="password" name="password2" onChange={formik.handleChange} value={formik.values.password2}/>
            {err && <p className="text-danger">Error Occoured. Try Again</p>}
            <button className="loginButton" onClick={formik.handleSubmit} type="submit">Sign Up</button>
            <button className="loginRegisterButton" onClick={() => navigate("/")}>
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Signup;