import React, { useEffect, useState } from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom";
import { UserContext } from '../App';
// latest file

const About = () => {


  

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method:"GET",
        headers:{
          Accept: "application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      } );

      // const data = await res.json();
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
    } catch(err) {
      console.log(err)
      navigate('/login');

    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>

      


    <div style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)) ,url('https://www.incworx.com/wp-content/uploads/2022/02/smart-goals.jpg') ", 
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0",
    
    }}>
      <li class="nav-item dropdown">
        <NavLink class="btn btn-default btn-sm fw-bold font-monospace text-uppercase" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><span style={{color:"white"}}>PROFILE</span></NavLink>
        <div class="dropdown-menu dropdown-menu-left dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
        
        <a class="dropdown-item" href="#"><span style={{color:"red"}}>ID : </span>{userData._id}</a>
        <a class="dropdown-item" href="#"><span style={{color:"red"}}>Name : </span>{userData.first_name} {userData.last_name}</a>
        <a class="dropdown-item" href="#"><span style={{color:"red"}}>Email : </span>{userData.email}</a>
        <a class="dropdown-item" href="#"><span style={{color:"red"}}>DOB : </span>{userData.date_of_birth}</a>
        <a class="dropdown-item" href="#"><span style={{color:"red"}}>Phone No. : </span>{userData.phone_no}</a>
        </div>
      </li>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {/* <div class="col-sm-6">
          <div class="card h-70">
            <img src="https://static.vecteezy.com/system/resources/previews/005/883/253/original/to-do-list-concept-illustration-free-vector.jpg" class="card-img-top"
              alt="ToDo list" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
            <div class="card-footer">
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div> */}
        {/* <div class="row"> */}
        <div class="row">
          <div class="col-sm-10 m-5">
              <div class="card h-100">
                  <img class="img-fluid" src="https://static.vecteezy.com/system/resources/previews/005/883/253/original/to-do-list-concept-illustration-free-vector.jpg" alt="Card image top"/>
                  <div class="card-body">
                      <h3 class="card-title">To DO List</h3>
                      <h4 class="card-subtitle">....</h4>
                      <p class="card-text">Make Your To do List</p>
                  </div>
                  <div class="card-footer">
            <Link to="/todolist" class="btn btn-primary">Enter</Link>
            </div>
              </div>
          </div>
      </div>      
        {/* </div>   */}
        {/* <div class="col-sm-6">
          <div class="card h-100" >
            <img src="https://cdni.iconscout.com/illustration/free/thumb/task-list-2080780-1753768.png" class="card-img-top"
              alt="ShortTerm Goals" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.
              </p>
            </div>
            <div class="card-footer">
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div> */}
        {/* <div class="row"> */}
        <div class="row">
          <div class="col-sm-10 m-5">
              <div class="card h-100">
                  <img class="img-fluid" src="https://media.istockphoto.com/vectors/time-management-and-self-discipline-design-concept-vector-vector-id1316395255?k=20&m=1316395255&s=612x612&w=0&h=0NyFgEbJYscObJwpmaG5OcZUfj1QIGF76M8VKsVHAng=" alt="Card image top"/>
                  <div class="card-body">
                      <h3 class="card-title">Short Term Goals</h3>
                      <h4 class="card-subtitle">.....</h4>
                      <p class="card-text">Create Your goals for short duration</p>
                  </div>
                  <div class="card-footer">
            <Link to="/shortterm" class="btn btn-primary">Enter</Link>
            </div>
              </div>
          </div>
      </div>    
{/* </div>   */}
        {/* <div class="col-sm-6">
          <div class="card h-70">
            <img src="https://previews.123rf.com/images/artinspiring/artinspiring1705/artinspiring170500078/77328217-isolated-dreaming-businessman-with-dream-bubbles-with-family-money-car-and-more-.jpg" class="card-img-top"
              alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to show
                that equal height action.
              </p>
            </div>
            <div class="card-footer">
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div> */}
        <div class="row">
          <div class="col-sm-10 m-5">
              <div class="card h-100">
                  <img class="img-fluid"  src="https://previews.123rf.com/images/artinspiring/artinspiring1705/artinspiring170500078/77328217-isolated-dreaming-businessman-with-dream-bubbles-with-family-money-car-and-more-.jpg" alt="Card image top"/>
                  <div class="card-body">
                      <h3 class="card-title">LongTerm Goals</h3>
                      <h4 class="card-subtitle">...</h4>
                      <p class="card-text">Future planning</p>
                  </div>
                  <div class="card-footer">
                <Link to="/LongTerm" class="btn btn-primary">Enter</Link>
            </div>
                  
              </div>
              
          </div>
      </div>      
      </div>
    </div>





    {/* <div className='container emp-profile'>
      <form method='GET'>
        <div className='row'>
          <div className='col-md-4'>

          </div>
          <div className='col-md-6'>
              <div className='profile-head'>
                <h5>{ userData._id}</h5>
                  <ul className="nav-tabs" role = 'tablist'>
                    
                  </ul>
              </div>


            </div>

            <div className='row'>
              <div className='col-md-4'>
                <div className='profile-work'>
                  <p>User Details</p>

                </div>
              </div>
              
            </div>
            
            <div className='col-md-8 pl-5 about-info'>
           
              <div className = "tab-content profile-tab" id = "myTabContent">
    
              <div className='tab-pane fade show active' id = 'home' role = " tabpanel " aria-labelledby='home-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label >User ID</label>
                      
                    </div>
                    <div className='col-md-6'>
                      <p>{userData._id}</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label >FullName</label>
                      
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.first_name} {userData.last_name}</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label >Email</label>
                      
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label >Phone No</label>
                      
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.phone_no}</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label >Date Of Birth</label>
                      
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.date_of_birth}</p>
                    </div>
                  </div>
                </div> 
                
                <div className='tab-pane fade show active' id = 'profile' role = " tabpanel " aria-labelledby='profile-tab'>

                </div>
              </div>
            </div>
        </div>
      </form>
    </div> */}
    </>
  )
}

export default About