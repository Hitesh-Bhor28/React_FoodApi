import { useState } from 'react'
import {NAV_LOGO} from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'


const Header = () => {
  const [loginValue, setLoginValue] = useState("Login")
  const isOnline = useOnlineStatus()

  return (
    <div className="flex justify-between border-2 border-black mx-0.5">
        <div>
            <img className='w-[70px]' src={NAV_LOGO} alt="nav-logo"/>
        </div>
        <div className='flex items-center m-1.5'>
            <ul className="flex flex-row items-center list-none gap-5 p-[0 20px] h-[40%] text-2xl">
                <li>Online Status : {isOnline ? "✅" : "🔴"}</li>
                <li><Link to="/" className="text-black block bg-amber-50 p-1.5">Home</Link></li>
                <li><Link to="/about" className="text-black block bg-amber-50 p-1.5">About Us</Link></li>
                <li><Link to="/contact" className="text-black block bg-amber-50 p-1.5">Contact Us</Link></li>
                <li><Link to="/" className="text-black block bg-amber-50 p-1.5">Cart</Link></li>
                <input className='w-[6vw] p-2.5 text-white bg-black font-sans hover:text-black hover:bg-white hover:border-2 border-black' type="button" value={loginValue} onClick={()=>{loginValue === "Login" ? setLoginValue("Logout"):setLoginValue("Login")}}/>
            </ul>
        </div>
    </div>
  )
}

export default Header