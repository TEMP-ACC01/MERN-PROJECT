import React, {useContext, useState}  from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import {ToastContainer, toast} from "react-toastify";

const PasswordReset = () => {

    const [email, setEmail] = useState("");


    const [message, setMessage] = useState("");

    const setVal = (e) => {
        setEmail(e.target.value)
    }
    const sendLink = async (e) => {
        e.preventDefault();

        const res = await fetch("/sendpasswordlink", {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body:JSON.stringify({email})
        });

        const data = await res.json();
        if (data.status === 201){
            setEmail("");
            setMessage(true)
        } else {
            window.alert("Invaild User")
        }
    }


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
                <img class="img-fluid" src="https://www.freeiconspng.com/thumbs/forgot-password-icon/forgot-password-icon-14.png" alt="Card image top"/>
                {message ? <h5 style={{color:"green"}}>password reset link is send successfully in your email....</h5>:""}
      </div>
                    <div className='col-md-7 col-lg-5 col-xl-5 offset-xl-1'>
                        <h2 className='form-title'>Enter Your Email</h2>

              
                        <form method = "POST" className='register-form' id='register-form'>
                    
                            
                            <div className="form-outline mb-4">
                                {/* <label htmlFor="email">Email</label> */}
                                <label class="form-label text-secondary" for="form1Example13">Email Address</label>
                                <input style ={{backgroundColor:"rgba(0,0,0,0.1)", border:"none"}} type="text" name = "email" className="form-control form-control-lg" id="email" aria-describedby="emailHelp" 
                                 value = {email}
                                //  onChange = {(e) => setEmail(e.target.value)}
                                onChange = {setVal}
                                 placeholder="Enter Email"/>
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            
                            
                            

                            <div className='form-group form-buton' >
                                <input type = "submit" name = "signin" id = "signin" className='btn btn-primary btn-lg btn-block' 
                                value = "Send" 
                                onClick = {sendLink}
                                />
                            </div>
                        
                        
                        </form>
                        
                    </div>
                  
                </div>
            </div>
        </section>
        </div>
    </>
  )
}

export default PasswordReset