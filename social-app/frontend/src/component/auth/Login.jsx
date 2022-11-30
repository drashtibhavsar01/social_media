import React,{useState,useContext} from 'react';
import {loginUser} from './actions'
import {UserContext} from '../../context/UserContext'
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import "./login.css";

const Login = () => {
    const [err,setErr] = useState(false);
    const [loading,setLoading] = useState(false);
    const {login_success} = useContext(UserContext);
    const navigate = useNavigate();
   
    const formik = useFormik({
      initialValues:{
        username:"",password:""
      },
      onSubmit: async (values) => {
        setLoading(true)
        let data = await loginUser(values)
        if(data) {
          login_success(data);
          navigate('/');
        } else {
          setErr(true);
          setLoading(false);
        }
      }
    })

    return (
      <div className='login'>
      <div className="loginWrapper">
          <div className="loginLeft">
              <h3 className='loginLogo'>SocialApp</h3>
              <span className="loginDesc">Connect with friends and the world around you on SocialApp.</span>
          </div>
          <div className="loginRight">
               <div className="loginBox">
                <input placeholder="Username" className="loginInput" type="text" name="username" onChange={formik.handleChange} value={formik.values.username}/>
                <input placeholder="Password" className="loginInput" type="password" name="password" onChange={formik.handleChange} value={formik.values.password}/>
                { err && <p className="text-danger"> Invalid Credentials </p> }
                <button className="loginButton" onClick={formik.handleSubmit} type="submit">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton" onClick={() => navigate("/Signup")} >
                Create a New Account
                </button>
                  
              </div>
          </div>
      </div>
  </div>
    )
}

export default Login;