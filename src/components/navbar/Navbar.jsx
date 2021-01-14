import './Navbar.css'
import Menu from '../menu/Menu'
import Logo from './logo512.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
    const [show, setShow] = useState(false)
    const[tabMenu, setTabMenu] = useState(false)
    const user = sessionStorage.getItem('user')
    const handleLogout = () =>{
        sessionStorage.removeItem('isLogin')
        window.location.href = '/login'
    }
return(
    <>

        <Menu show={tabMenu}/>

        {show && (
        <div className="menu-modal">
            <button className='logout-btn' onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <h3>Logout</h3>
            </button>
        </div>)
        }

    <nav className="navbar">

        <img className="imgicon" src={Logo} alt="teh"/>
        <h3 className="brand">RANGGA</h3>
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Contact</Link>
        </div>

        <div className="user-area" onClick={()=>{
            setShow(!show)
        }}>
            <i className="fa fa-user-friends logoUser"></i>
            <h3>{user}</h3>
        </div>
        
        <span className="material-icons menu-icon" onClick={()=>{
            setTabMenu(!tabMenu)
        }}>
            menu
        </span>
    


        
    </nav>
    </>
    )
}


export default Navbar


