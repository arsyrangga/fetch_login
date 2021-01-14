import './Home.css'
import NoteContainer from '../../note_container/NoteContainer'
import Navbar from '../../navbar/Navbar'
const Home = ()=>{
    const isLogin = sessionStorage.getItem("isLogin")
    
    return(
        <>
        {isLogin ? (
            <>
            <Navbar />
            <section className="home">
            <div className="home-banner">
            <h3>Selamat Datang</h3>
            <NoteContainer />
            </div>
        </section>
            </>
        ) : window.location.href = '/login'}
        

        
        </>
    )
    
    

}


export default Home