import '../navbar/Navbar.css'
import { Link } from 'react-router-dom'


const Menu =({show}) =>{
    const handleLogout = () =>{
        sessionStorage.removeItem('isLogin')
        window.location.href = '/login'
    }
    return(
        <section className="modalMenu" style={{
            transform: show ? 'translateY(0)' : 'translateY(-60vh)'
        }}>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Contact</Link>
            <a onClick={handleLogout} style={{cursor:'pointer'}}>Logout</a>
        </section>
    )
}


export default Menu