import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";




const Savings = () => {
    const f1 = ()=> {
        let price =  document.getElementById('FinalAmount').value;
        let years = document.getElementById('year').value;
        let interest = document.getElementById('interest').value;
        // alert(interest)
        
        localStorage.setItem('amount',price);
        localStorage.setItem('years', years);
        localStorage.setItem('interest',interest);
}

    return ( 
        <>
        <div className='d-flex justify-content-center align-items-center' style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)) ,url('https://img.freepik.com/premium-photo/cartoon-style-arrow-showing-financial-coins-reduction-stacks-green-bag-money-purple-pastel-background-cost-saving-concept-minimal-cartoon-style-3d-render-illustration_598821-165.jpg') ", 
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0",
    
    }}>

          <div class="card bg-black text-white bg-opacity-25">
            <div class="card-body m-5  ">
            <div >
            
            <form action="">
              <label  htmlFor="num"><h4>Enter amount you want to save </h4></label> <br />
              {/* <input type="number"   id='FinalAmount' required/>    */}

              <input style ={{backgroundColor:"rgba(0,0,0,0.4)", border:"none"}} type="number" class="form-control text-white" id='FinalAmount'  placeholder="Amount..." tabindex="3" required/>

              <br /><br />
              <label htmlFor="year"><h4>After how many years you are expecting that amount?</h4></label> <br />
              {/* <input type="number"  id='year' required/> */}

              <input style ={{backgroundColor:"rgba(0,0,0,0.4)", border:"none"}} type="number" class="form-control text-white" id='year'  placeholder="Year..." tabindex="4" required/>

              <br /><br />
              <label htmlFor='interest'><h4>Rate of interest  </h4> </label><br/>
              {/* <input type={"number"} id='interest' required></input><br/><br/> */}

              <input style ={{backgroundColor:"rgba(0,0,0,0.4)", border:"none"}} type={"number"} class="form-control text-white" id='interest'  placeholder="Interest..." tabindex="4" required/>
              <br></br>
              
               {/* <a href="SaveFinalCal"><button onClick={f1} type='button'>continue</button></a> */}
               <div >
               <Link to="SaveFinalCal"><button type="button" onClick={f1} class="btn btn-outline-warning mb-2" >
                    Continue
                  </button></Link>
                    </div>
              </form> 
          </div>
              
              
            </div>
          </div>
        </div>
        
    </>
     );
}
 
export default Savings;

