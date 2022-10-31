import React, {useState} from 'react';
import {NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

    const [user, setUser] = useState({
        first_name:"",last_name:"", email:"", phone_no:"",date_of_birth:"",password:"", cpassword:""
      });
      let name, value;
      const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
    
        setUser({...user, [name]:value});
      }


      const PostData = async (e) => {
        e.preventDefault();

        const {first_name,last_name, email, phone_no,date_of_birth,password, cpassword} = user;

        const res = await fetch("/register", {
            method: "POST", 
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                first_name,last_name, email, phone_no,date_of_birth,password, cpassword
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid registration");
        } else {
            window.alert("successfull");
            console.log("successful");

            navigate('/Login');
        }
      }


  return (
    <>
    <section className="vh-90" style={{backgroundColor:'#898685', minHeight: "100vh", display:"flex"}}>
            <div className='container h-90' >
                <div className='row d-flex justify-content-center align-items-center h-100'> 
                    <div className='col-lg-12 col-xl-11 m-3'>
                    <div class="card text-black" style={{borderRadius:'25px'}}>
                    <div class="card-body p-md-2">
                    <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p class="text-center h1 fw-bold mb-1 mx-1 mx-md-4 mt-0">Sign up</p>
                                <form method='POST' className='mx-1 mx-md-4' id='register-form'>
                                    <div className="form-group  ">
                                    {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}


                                    <div class="d-flex flex-row align-items-center mb-2">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">

                                        <label class="form-label" for="form3Example1c">Your first_Name</label>
                                        <input  type="text" name = "first_name" id="form3Example1c" class="form-control" 
                                        value = {user.first_name}
                                        onChange = {handleInputs}
                                        placeholder="Enter first Name"/>
                                        
                                        </div>
                                    </div>




                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">

                                        <label htmlFor="last_name" className="form-label">Your Last_Name</label>
                                        <input  type="text" name = "last_name" id="last_name" className="form-control" aria-describedby="emailHelp"
                                        value = {user.last_name}
                                        onChange = {handleInputs}
                                        placeholder="Enter Last Name"/>
                                        
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">

                                        <label htmlFor="email" className="form-label">Your Email</label>
                                        <input  type="text" name = "email" id="email" className="form-control" aria-describedby="emailHelp"
                                        value = {user.email}
                                        onChange = {handleInputs}
                                        placeholder="Enter Email"/>
                                        
                                        </div>
                                    </div>



                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">

                                        <label htmlFor="phone_no" className="form-label">Your Phone No</label>
                                        <input  type="number" name='phone_no' id="phone_no" className="form-control" aria-describedby="emailHelp"
                                        value = {user.phone_no}
                                        onChange = {handleInputs}
                                        placeholder="Enter Phone No"/>
                                        
                                        </div>
                                    </div>



                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">

                                        <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
                                        <input  type="date" name='date_of_birth' id="date_of_birth" className="form-control" aria-describedby="emailHelp"
                                        value = {user.date_of_birth}
                                        onChange = {handleInputs}
                                        placeholder="Enter Date Of Birth"/>
                                        
                                        </div>
                                    </div>


                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">

                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input  type="password" name='password' id="password" className="form-control" aria-describedby="emailHelp"
                                        value = {user.password}
                                        onChange = {handleInputs}
                                        placeholder="Password"/>
                                        
                                        </div>
                                    </div>





                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">

                                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                        <input  type="password" name='cpassword' id="cpassword" className="form-control" aria-describedby="emailHelp"
                                        value = {user.cpassword}
                                        onChange = {handleInputs}
                                        placeholder="Confirm Your Password"/>
                                        </div>
                                    </div>





                

                



                                    <div className='form-group form-buton' >
                                        <input type = "submit" name = "signup" id = "signup" className='btn btn-primary btn-lg btn-block' 
                                        value = "register" 
                                        onClick = {PostData}
                                        
                                        />
                                    </div>
                                    </div>
                                    <NavLink to = "/Login" className="signin-image-link" >already resistered </NavLink>
                                </form>
                                
                            </div>
                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://img.freepik.com/premium-vector/woman-with-list-successful-career-personal-productivity-growth-time-management-concept_442961-174.jpg?w=740"
                  class="img-fluid" alt="Sample image"/>
                  

              </div>
             
                            </div>
                            </div>
                            </div>
                    </div>
                    {/* <NavLink to = "/Login" className="signin-image-link" >already resistered </NavLink>  */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Signup