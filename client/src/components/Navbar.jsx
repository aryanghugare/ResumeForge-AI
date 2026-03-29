import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../app/features/authSlice'
import { useSelector } from 'react-redux'
import { LogOut } from 'lucide-react'

function Navbar() {
const dispatch = useDispatch() ;
const {user} = useSelector(state => state.auth) ;
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
<button
  type='button'
  onClick={handleLogout}
  className='inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-green-600/40 focus:ring-offset-2'
>
  <LogOut className='size-4' />
  Logout
</button>
</div>
</nav>
</div>
  )
}

export default Navbar