import {Link, NavLink, useNavigate} from "react-router-dom";


const Car = () => {

    const f1 = ()=> {
        let price =  document.getElementById('price').value;
        let years = document.getElementById('year').value;
        // alert(price)
        
        localStorage.setItem('amount',price);
        localStorage.setItem('years', years)
}
    return ( 
        <div className="container">
           
            
        <h1 style={{position: 'relative',justifyItem:'center',left:'40%'}}>Buy your dream Home</h1>
    <div style={{marginTop:100}}>
        
      <form action="">
        <label htmlFor="num"><h2>Enter Current Price of the Car you Want to buy </h2></label> <br />
        <input type="number"   id='price'/>
        <br /><br />
        <label htmlFor="year"><h2>In how many years do you want to buy this Car?</h2></label> <br />
        <input type="number"  id='year'/>
        <br /><br />
         <Link to="CarFinalCal"><button onClick={f1} type='button'>continue</button></Link>
        </form> 
    </div>
    </div>
     );
}
 
export default Car;
