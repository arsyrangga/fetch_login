import { Link } from 'react-router-dom'
import './Register.css'
import '../login/Login.css'
import { useEffect, useState } from 'react'

const Register = () =>{
    
    useEffect(()=>{
        //tampung nilai session storage bernama isLogin
      const isLogin = sessionStorage.getItem("isLogin")
      
      if(isLogin){
          window.location.href = './home'
      }
    }, [])

    const [inputData, setInputData] = useState({
        email : '',
        password : '',
        password2 : '',
    })

    const [same,setSame] = useState(false)

    useEffect(()=>{
        if(inputData.password === inputData.password2){
            setSame(true)
        }
        else{
            setSame(false)
        }
    },[inputData])

    const handleRegister = (e) => {

        e.preventDefault()
        fetch("http://localhost:5000/register",{
            method : "POST",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : inputData.email,
                password : inputData.password
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.accessToken){
                alert("registrasi berhasil")
                window.location.href = '/login'
            }
            else{
                alert(data)
            }
        } )


    }

    return(
        <form className="register" onSubmit={handleRegister}>
            <h1 className="reg-title"> Register</h1>
            <input type="email" id="email" placeholder="Email" onChange={(e)=> {
                setInputData({
                    ...inputData,
                    email : e.target.value
                })
                // console.log(inputData)
            }} required/>
            <input type="password" id="pass" placeholder="Password"
            onChange={(e)=> {
                setInputData({
                    ...inputData,
                    password : e.target.value
                })
                // console.log(inputData)
            }}
            required/>
            <input type="password" id="pass2" placeholder="Repeat Password"
            onChange={(e)=> {
                setInputData({
                    ...inputData,

                    password2 : e.target.value
                })
                // console.log(inputData)

            }}
            required/>

            {same === false ? (<small className="smallT">Password harus sama</small>) : null }
        <div className="btn-container">
            <button type="submit" disabled={!same} >Sign Up</button>
            <h3>Or</h3>
            <Link to="/login">Sign In</Link>
        </div>
        </form>
    )
}

export default Register