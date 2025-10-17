import { useState } from 'react'
import {NAV_LOGO} from '../utils/constants'
import './dashboard.css'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'


const Header = () => {
  const [loginValue, setLoginValue] = useState("Login")
  const isOnline = useOnlineStatus()

  return (
    <div className="header">
        <div>
            <img src={NAV_LOGO} alt="nav-logo"/>
        </div>
        <div className="nav-items ">
            <ul>
                <li>Online Status : {isOnline ? "✅" : "🔴"}</li>
                <li><Link to="/" className="resLink">Home</Link></li>
                <li><Link to="/about" className="resLink">About Us</Link></li>
                <li><Link to="/contact" className="resLink">Contact Us</Link></li>
                <li><Link to="/" className="resLink">Cart</Link></li>
                <input className='nav-login-btn' type="button" value={loginValue} onClick={()=>{loginValue === "Login" ? setLoginValue("Logout"):setLoginValue("Login")}}/>
            </ul>
        </div>
    </div>
  )
}

export default Header