import React, {useState, useEffect,  useContext } from 'react';
import { UserContext } from '../App';

const Home = () => {

  const [show, setShow] = useState(false);

  const [userName, setUserName] = useState("");
	const userHomePage = async () => {
		try {
      const res = await fetch("/getData", {
        method:"GET",
        headers:{
        // Accept: "application/json",
        "Content-Type":"application/json"
        },
        // credentials:"include"
      } );

      // const data = await res.json();
      const data = await res.json();
      console.log(data);
      setUserName({...userName, first_name:data.first_name, last_name:data.last_name});
      setShow(true);

      if (!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
      } catch(err) {
      console.log(err)
      // navigate('/login');

		}
	}

	useEffect(() => {
		userHomePage();
	}, []);
  return (
    <>
    <div className='home-page'>
      <div className='home-div'>
        
        
        <div
          class="d-flex justify-content-center align-items-center "
          style={{backgroundImage: "url('https://www.incworx.com/wp-content/uploads/2022/02/smart-goals.jpg')",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: "0"}}>
            

          <div class="card bg-black text-white bg-opacity-50">
            <div class="card-body m-5  ">
              <h4 class="card-title pt-5">Welcome, to the dashboard</h4>
              <h4 class="card-title display-3 font-weight-bold "><span style={{color:"red"}}>{userName.first_name} {userName.last_name}</span></h4>
              <p class="card-text">
              { show ? "you can start your routine now " : "You are not logged in"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
    
  )
}

export default Home