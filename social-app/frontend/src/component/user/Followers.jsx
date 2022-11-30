import React,{useState} from 'react';
import UserLogo from '../../assets/user.png'
import {followUser,updateUser} from './actions'
import {useFormik} from 'formik';
import FormData from 'form-data';

const Followers = (props) => {
    
    const [image,setImage] = useState(''); // image use to update avatar
    const [followStatus,setFollowStatus] = useState(props.followState); // follow status of current user
    
        // const [user,setUser] = useState({
        //     username:null,
        //     email:null,
        //     bio:null,
        //     avatar:null,
        //     })
    
        // initial data = values fetch from api 
        const formik = useFormik({
            enableReinitialize:true,
            initialValues:{
                username:props.username ? props.username : "",
                email:props.email ? props.email : "",
                bio:props.bio ? props.bio : "",
            },
            onSubmit: async (values) => {
                let form = new FormData();
                form.append("username",values.username)
                form.append("email",values.email)
                form.append("bio",values.bio)
                if(image) {
                    form.append("avatar",image)
                }
                
                let data =  await updateUser(form);
                if(data) {
               // setUser(data);
                
                }
            }
        })
    
    
        return (
            <div className="d-flex justify-content-start align-items-center">
            <img className="img-fluid" 
            src={props.avatar ? props.avatar : UserLogo} 
            alt="profile" style={{width:"3em",height:"3em",borderRadius:"50%"}} />
            <div className="ms-4">
            <span style={{fontFamily:"Roboto"}}>{props.username}</span>
            
            <br/>
            <span style={{fontFamily:"Ubuntu",marginTop:"0.5em"}}>
            {props.total_followers} Followers</span>
            
            </div>
          
        {/* update form modal */}
        
        </div>
        
       
        )
    }
    
    

export default Followers;