import { useState } from 'react'
import {NAV_LOGO} from '../utils/constants'
import './dashboard.css'
import { Link } from 'react-router-dom'


const Header = () => {
  const [loginValue, setLoginValue] = useState("Login")
  return (
    <div className="header">
        <div>
            <img src={NAV_LOGO} alt="nav-logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/">Cart</Link></li>
                <input className='nav-login-btn' type="button" value={loginValue} onClick={()=>{loginValue === "Login" ? setLoginValue("Logout"):setLoginValue("Login")}}/>
            </ul>
        </div>
    </div>
  )
}

export default Header