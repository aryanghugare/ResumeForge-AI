import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../app/features/authSlice'

function Navbar() {
const dispatch = useDispatch() ;
const user = {name : "John Doe"}
const navigate = useNavigate() ;
const handleLogout = () => {
  // Perform logout logic here
  // After logout, navigate to the login page

  dispatch(logout());
  navigate("/");
}
  return (
    <div className='shadow bg-white'>
<nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
<Link to="/" className="flex items-center gap-2">
<img src={logo} alt="ResumeForge AI Logo" className="h-8 w-auto" />
</Link>
<div className='flex items-center gap-4 text-sm'>
<p className='max-sm:hidden'>Hi , {user?.name} </p>
<button onClick={handleLogout} className='bg-white hover:bg-slate-50 border border-slate-200 rounded-md px-4 py-2 active:scale-95 transition-all '>Logout</button>
</div>
</nav>
</div>
  )
}

export default Navbar