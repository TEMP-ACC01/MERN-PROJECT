import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";




const House = () => {
    const f1 = ()=> {
        let price =  document.getElementById('price').value;
        let years = document.getElementById('year').value;
        // alert(price)
        
        localStorage.setItem('amount',price);
        localStorage.setItem('years', years)
}

    //   const n = 6;
     

    return ( 
        <>
        <div className='d-flex justify-content-center align-items-center' style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)) ,url('https://www.gmmllc.com/wp-content/uploads/2021/04/iStock-1199773761_FLIPPED.jpg') ", 
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0",
    
    }}>

        <div className="container">
            <div class="row">
                <div class="col-4">
                    <div class="card bg-light h-100">
                        <div class="card-body text-center">
                            <h1 className='card-text fw-bold'>Buy your dream Home</h1>
                            <img class="img-fluid" src="https://assets.website-files.com/612c815f4ea9363859c85610/613217fa51d1acf1a770c55e_img-lending-property_loan.svg" alt="Card image top"/>
                        </div>
                    </div >
                </div>
                <div class="col-8">
                    <div class="card bg-black text-white bg-opacity-50 h-100">
                        <div class="card-body text-center">
                            <form action="">
                                <label htmlFor="num"><h4 className='text-white'>Enter Current Price of the House you Want to buy : </h4></label>
                                    {/* <input style ={{backgroundColor:"rgba(0,0,0,0.1)", border:"none"}} type="number"   id='price'/> */}
                                    <input style ={{backgroundColor:"rgba(0,0,0,0.4)", border:"none"}} type="number" class="form-control text-white" id="price"  
                                placeholder="Price..." tabindex="3"/>
                                    <br/><br/>
                                <label htmlFor="year"><h4 className='text-white'>In how many years do you want to buy this home?</h4></label>
                                {/* <input type="number"  id='year'/> */}
                                <input style ={{backgroundColor:"rgba(0,0,0,0.4)", border:"none"}} type="number" class="form-control text-white" id='year'  
                                placeholder="Years...." tabindex="4"/>
                                <br /><br />
                                {/* <a href="HouseFinalCal"><button onClick={f1} type='button'>continue</button></a> */}
                                

                                <div class="text-center" >
                                <Link to="/HouseFinalCal"><button type="button" onClick={f1} class="btn btn-primary btn-lg btn-block" >Continue</button></Link>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default House;

