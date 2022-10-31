const SaveFinalCal = () => {

    const price = localStorage.getItem("amount");
    const years = localStorage.getItem("years");
    const interest = localStorage.getItem("interest")
    
    // alert(FinalAmount)
    
let MA = price;
let n = years*12;
let r = interest/100;
let n1 = (n+1)/24;
n1 = 1+(n1*r);

   
const installment = parseInt(MA/(n1*n))
    console.log(installment)
    
        return (  
            <>


            <div className='d-flex justify-content-center align-items-center' style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)) ,url('https://img.freepik.com/premium-photo/cartoon-style-arrow-showing-financial-coins-reduction-stacks-green-bag-money-purple-pastel-background-cost-saving-concept-minimal-cartoon-style-3d-render-illustration_598821-165.jpg') ", 
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0",
    
    }}>
        <div className="container">
            <div className="row">
            <div class="col-8">
                    
                            {/* <h1 className='card-text fw-bold'>Buy your dream Home</h1>
                            <img class="img-fluid" src="https://assets.website-files.com/612c815f4ea9363859c85610/613217fa51d1acf1a770c55e_img-lending-property_loan.svg" alt="Card image top"/> */}
                        <div class="card bg-black text-white bg-opacity-50 h-100">
                        <div class="card-body text-center m-5">
                        <div >
                            <label htmlFor="cost"><h5>Final Amount you want to save  </h5></label> <br /> 
                            <input className="form-control text-white" style ={{backgroundColor:"rgba(0,0,0,0.4)", border:"none"}} type="number" id="cost" value={price} />
                        </div>
                        <br></br>
                        <div >
                            <label htmlFor="years"><h5>Time Period</h5></label> <br /> 
                            <input className="form-control text-white" style ={{backgroundColor:"rgba(0,0,0,0.4)", border:"none"}} type="number" id="years" value={years} placeholder='Years' />
                        </div>
                        </div>
                    </div >
                </div>
                <div class="col-4">
                    
                            {/* <h1 className='card-text fw-bold'>Buy your dream Home</h1>
                            <img class="img-fluid" src="https://assets.website-files.com/612c815f4ea9363859c85610/613217fa51d1acf1a770c55e_img-lending-property_loan.svg" alt="Card image top"/> */}
                        <div class="card bg-white text-black  h-100">
                        <div class="card-body text-center">
                        <div >

                            <h3 className="text-secondary">Monthly amount you need to save in order to achieve your goal <span style={{color: "red"}}> Rs{installment} </span></h3>
                            <img class="img-fluid" src="https://assets.website-files.com/612c815f4ea9363859c85610/613217fa51d1acf1a770c55e_img-lending-property_loan.svg" alt="Card image top"/>
                        </div>


                        </div>
                    </div >
                </div>

            </div>
        </div>






















































        
            </div>
            
            </>
            
         );
    }
     
    export default SaveFinalCal;