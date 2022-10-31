import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";


const HouseFinalCal = () => {

const price = localStorage.getItem("amount");
const years = localStorage.getItem("years")
let FinalAmount = parseInt(price*(1+(0.05/4))**(4*years))
// alert(FinalAmount)
// console.log(FinalAmount)
// let n = (years*12);
// let n1 = (n**2+n)/24
// const installment = parseInt((FinalAmount-((n1*5)/100))/n)

let MA = FinalAmount;
let n = years*12;
let r = 5/100;
let n1 = (n+1)/24;
n1 = 1+(n1*r);

   
const installment = parseInt(MA/(n1*n))
console.log(installment)
console.log(n)
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
                <div class="col-12 col-md-8">
                    <div class="card bg-black text-white bg-opacity-50 h-100">
                        <div class="card-body text-center">
                        <div className='m-5' >
            <div >
             <label  htmlFor="cost"><h4>Cost of Home Today</h4></label> <br /> 
            <input style ={{backgroundColor:"rgba(0,0,0,0.4)", border:"none"}} class="form-control text-white" type="number" id="cost" value={price} />
            </div>
            <br></br>

            <div >
             <label htmlFor="years"><h4>Time to Buy</h4></label> <br /> 
            <input style ={{backgroundColor:"rgba(0,0,0,0.4)", border:"none"}} class="form-control text-white" type="number" id="years" value={years} placeholder='Years' />
            </div>
            <br></br>

            <div >
             <label htmlFor="inflation"><h4>Inflation Rate</h4></label> <br /> 
            <input style ={{backgroundColor:"rgba(0,0,0,0.4)", border:"none"}} class="form-control text-white" type="text" id="inflation" value={'5%'} placeholder='Inflation' />
            </div> 
        </div>
                        </div>
                    </div >
                </div>
                <div class="col-6 col-md-4">
                    <div class="card bg-white text-black  h-100">
                        <div class="card-body text-center">
                        <h5 className='text-secondary'>The cost of Home you want to buy after <strong>{years}</strong> Years will be about <span className='display-6 text-danger' > Rs.{FinalAmount}</span></h5><br />
                        <div>
                        <img class="img-fluid" src="https://images.squarespace-cdn.com/content/v1/58d6a3d91b10e366b41efb58/1584912471211-NWA8I7F1MOZTTTK6UZSC/cbf36ed4630866dc125af54cd5a9f508.gif" alt="Card image top"/>
                        </div>
            <h4 className='text-secondary'>You Will need to invest <span className='display-6 text-danger' ><strong>Rs.{installment}</strong></span> monthly, for  {years} years</h4> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* </div> */}
      
        {/* <div >
            <div >
             <label htmlFor="cost"><h5>Cost of Home Today</h5></label> <br /> 
            <input type="number" id="cost" value={price} />
            </div>

            <div >
             <label htmlFor="years"><h5>Time to Buy</h5></label> <br /> 
            <input type="number" id="years" value={years} placeholder='Years' />
            </div>

            <div >
             <label htmlFor="inflation"><h5>Inflation Rate</h5></label> <br /> 
            <input type="text" id="inflation" value={'5%'} placeholder='Inflation' />
            </div> <br /><br />
            <h4>The cost of Home you want to buy after 5 Years will be about <span > Rs.{FinalAmount}</span></h4><br />
            <h4>You Will need to invest <span >[Rs.{installment}]</span> monthly, for  {years} years</h4>                  
        </div> */}
        </div>
        </>
        
     );
}
 
export default HouseFinalCal;