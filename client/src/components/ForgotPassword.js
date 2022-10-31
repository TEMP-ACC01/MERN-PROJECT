import React, { useEffect, useState } from 'react';
import { NavLink , useNavigate, useParams} from 'react-router-dom';
import {ToastContainer, toast} from "react-toastify";


const ForgotPassword = () => {

  const {id, token} = useParams();

  const navigate = useNavigate();

  const [password, setpassword]  = useState("");
  const [message, setMessage]  = useState("");

  const userValid = async () => {
    const res = await fetch(`/forgotpassword/${id}/${token}`, {
      method :"GET",
      headers: {
        "Content-Type":"application/json"
      }

    });
    const data = await res.json()

    if (data.status == 201) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  const setval = (e) => {
    setpassword(e.target.value);

  }
  const sendpassword = async(e) => {
    e.preventDefault()

    const res = await fetch(`/${id}/${token}`,{
      method : "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({password})
    });

    const data = await res.json()

    if (data.status == 201) {
      setpassword("")
      setMessage(true)
    } else{
      toast.error("! token expired ganerate new link")
    }
  }

  useEffect(() => {
    userValid()
  }, [])

  return (
    <>
    <div style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)) ,url('https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80') ", 
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0",
    
    }}>
    <section className="vh-100" >
            <div className='container py-5 h-100'>
                <div className='row d-flex align-items-center justify-content-center h-100'>
                <div class="col-md-8 col-lg-7 col-xl-6">
                {message ? <h3 style={{color:"green"}}>password updated successfully</h3>:""}
      </div>
                    <div className='col-md-7 col-lg-5 col-xl-5 offset-xl-1'>
                        <h2 className='form-title'>Enter Your New Password</h2>

              
                        <form method = "POST" className='register-form' id='register-form'>
                    
                            
                            <div className="form-outline mb-4">
                                {/* <label htmlFor="email">Email</label> */}
                                <label class="form-label text-secondary" for="form1Example13">New Password</label>
                                <input style ={{backgroundColor:"rgba(0,0,0,0.1)", border:"none"}} type="password" name = "password" className="form-control form-control-lg" id="password" aria-describedby="emailHelp" 
                                 value = {password}
                                //  onChange = {(e) => setEmail(e.target.value)}
                                onChange = {setval}
                                 placeholder="new password"/>
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            
                            
                            

                            <div className='form-group form-buton' >
                                <input type = "submit" name = "signin" id = "signin" className='btn btn-primary btn-lg btn-block' 
                                value = "Enter" 
                                onClick = {sendpassword}
                                />
                            </div>
                        
                        
                        </form>
                        <ToastContainer/>
                    </div>
                  
                </div>
            </div>
        </section>
        </div>
    </>
  )
}

export default ForgotPassword