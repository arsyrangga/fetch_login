import { Link } from 'react-router-dom'
import './Login.css'
import { useEffect, useState } from 'react'


const Login = () =>{

        //tampung nilai session storage bernama isLogin
      const isLogin = sessionStorage.getItem("isLogin")
      


    const [inputData, setInputData] = useState({
        email : '',
        password : '',
    })

    const handleLogin = (e) => {
        //menjadikan page tidak reload ke page lain
        //ketika form di submit
        e.preventDefault()
        fetch("http://localhost:5000/login",{
            method : "POST",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(inputData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.accessToken){
                //kalo login berhasil
                alert("Login Berhasil . . .")

                //kalo isTrue
                sessionStorage.setItem('isLogin', true)

                //data user yang sedang login
                sessionStorage.setItem("user", inputData.email)

                window.location.href = '/home'
            }
            else{
                alert("Silahkan Cek Kembali Data Anda")
            }
        } )
    }
    
    return(
        <>

        {isLogin ? window.location.href = '/home' : (
            <form className="login" onSubmit={handleLogin}>
            <h1 className="log-title">Login</h1>
            <input type="email" name="email" placeholder="Email" onChange={(e)=> {
                setInputData({
                    ...inputData,
                    email : e.target.value
                })
                console.log(inputData)
            }} />
            <input autoComplete="off" type="password" name="password" placeholder="Password" onChange={(e)=> {
                setInputData({
                    ...inputData,
                    password : e.target.value
                })
                console.log(inputData)
            }}/>
            <div className="btn-container">
                <button type="submit">Sign In</button>
                <h3>Or</h3>
                <Link to="/register">Sign UP</Link>
            </div>
        </form>
        )}
        
        </>
    )
}

export default Login