const CarFinalCal = () => {

    const price = localStorage.getItem("amount");
    const years = localStorage.getItem("years")
    let FinalAmount = parseInt(price*(1+(0.05/4))**(4*years))
    console.log(FinalAmount)
    let n = (years*12);
    n = (n+n**2+n)/2
    const installment = parseInt(FinalAmount/(n*(5/100)*(1/12)))
    
        return (  
             
            <div style={{marginTop:50}}>
                <div style={{display:'inline-block'}}>
                 <label htmlFor="cost"><h5>Cost of Car Today</h5></label> <br /> 
                <input type="number" id="cost" value={price} />
                </div>
    
                <div style={{display:'inline-block',marginLeft:54}}>
                 <label htmlFor="years"><h5>Time to Buy</h5></label> <br /> 
                <input type="number" id="years" value={years} placeholder='Years' />
                </div>
    
                <div style={{display:'inline-block',marginLeft:54}}>
                 <label htmlFor="inflation"><h5>Inflation Rate</h5></label> <br /> 
                <input type="text" id="inflation" value={'5%'} placeholder='Inflation' />
                </div> <br /><br />
                <h4>The cost of Car you want to buy after 5 Years will be about Rs.{FinalAmount}</h4><br />
                <h4>You Will need to invest [Rs.{installment}] monthly, for 5 years</h4>   <br />               
                <button className="btn btn-success">Save Your Goal</button>
            
            </div>
            
         );
    }
     
    export default CarFinalCal;