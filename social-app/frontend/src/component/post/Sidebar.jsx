import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./sidebar.css"
import {
  Home,
  Chat,
  Person,
  Search
} from "@material-ui/icons";
import ProfileHeader from '../user/Header';
import Followers from '../user/Followers';
import {getProfile} from '../user/actions';

const Sidebar = () => {
  const [posts,setPosts] = useState([]);
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        // fetch profile data
        const fetchProfile = async () =>{
            setLoading(true);
            let response = await getProfile();
            setPosts(response.posts);
            setUser(response.user);
            setLoading(false)
        }
        fetchProfile();
    },[])
    return (
        <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <Link to="/">
           <Home className="sidebarIcon"/>
           <span className="sidebarListItemText">Home</span>
           </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/profile">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
            </Link>
          </li>
          <li className="sidebarListItem">
          <Link to="/chat">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </Link>
          </li>
          <li className="sidebarListItem">
          <Link to="/search">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Search</span>
          </Link>
          </li>
        </ul>
        <Followers username={user.username} 
        email={user.email}
        avatar={user.avatar} 
        bio={user.bio} 
        total_followers={user.total_followers}
         />
      </div>
    </div>
    )
}

export default Sidebar;