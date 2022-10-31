import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link, NavLink, useNavigate} from "react-router-dom";

const LongTerm = () => {
    return ( 
    //   <div className="container">
      
    //   <div style={{display: 'inline-block'}}>
    //    <Card style={{ width: '18rem',marginTop: 50, marginLeft:100,  height: 200, backgroundColor: 'greenyellow'  }}>
    //    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //    <Card.Body>
    //      <Card.Title >Own Link House</Card.Title>
    //      <Card.Text style={{marginTop: 43}}>
         
    //      Buy Your Dream Home 
       
    //      </Card.Text>
    //     <a href="/House"><Button variant="primary" style={{marginTop: 20}}>Click Here</Button></a> 
    //    </Card.Body>
    //  </Card>
    //  </div>
    //  <div style={{display: 'inline-block'}}>
    //    <Card style={{ width: '18rem',marginTop: 50, marginLeft: 500,  height: 200, backgroundColor: 'greenyellow'  }}>
    //    <Card.Body>
    //      <Card.Title >Education</Card.Title>
    //      <Card.Text style={{marginTop: 43}}>
         
    //      Plan your or your childs future study
       
    //      </Card.Text>
    //      <Button variant="primary" style={{marginTop: 20}}>Click Here</Button>
    //    </Card.Body>
    //  </Card>
    //  </div>

    //  <div style={{display: 'inline-block'}}>
    //    <Card style={{ width: '18rem',marginTop: 50, marginLeft:100,  height: 200, backgroundColor: 'greenyellow'  }}>
    //    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //    <Card.Body>
    //      <Card.Title >Own a Car</Card.Title>
    //      <Card.Text style={{marginTop: 43}}>
         
    //      Buy a car you always Wanted
       
    //      </Card.Text>
    //     <a href="/Car"><Button variant="primary" style={{marginTop: 20}}>Click Here</Button></a> 
    //    </Card.Body>
    //  </Card>
    //  </div>
    //  <div style={{display: 'inline-block'}}>
    //    <Card style={{ width: '18rem',marginTop: 50, marginLeft: 500,  height: 200, backgroundColor: 'greenyellow'  }}>
    //    <Card.Body>
    //      <Card.Title >Savings</Card.Title>
    //      <Card.Text style={{marginTop: 43}}>
         
    //      Save for you future needs
       
    //      </Card.Text>
    //      <a href="/Savings"><Button variant="primary" style={{marginTop: 20}}>Click Here</Button></a> 

    //    </Card.Body>
    //  </Card>
    //  </div>
    //  </div>
    <>
    <div style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)) ,url('https://www.incworx.com/wp-content/uploads/2022/02/smart-goals.jpg') ", 
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0",
    
    }}>
      
      <div class="row row-cols-1 row-cols-md-4 g-4">
        
        <div class="row">
          <div class="col-sm-15 m-5">
              <div class="card h-100">
                  <img class="img-fluid" src="https://img.freepik.com/free-vector/family-house-abstract-concept-vector-illustration-single-family-detached-home-family-house-single-dwelling-unit-townhouse-private-residence-mortgage-loan-down-payment-abstract-metaphor_335657-1957.jpg?w=2000" alt="Card image top"/>
                  <div class="card-body">
                      <h3 class="card-title">Own a House</h3>
                      {/* <h4 class="card-subtitle">Card subtitle</h4> */}
                      <br></br>
                      <p class="card-text">Buy your dream Home</p>
                  </div>
                  <div class="card-footer">
            <Link to="/House" class="btn btn-primary">Enter</Link>
            </div>
              </div>
          </div>
      </div>      
        
        <div class="row">
          <div class="col-sm-15 m-5">
              <div class="card h-100">
                  <img class="img-fluid" src="https://media.istockphoto.com/vectors/car-loan-or-vehicle-rental-concept-vector-id1255013863?k=20&m=1255013863&s=612x612&w=0&h=NDkpw4n8dJ8Kc4o1NJGaZ4kWpQ6NqHe66MisDPcJjz8=" alt="Card image top"/>
                  <div class="card-body">
                      <h3 class="card-title">Own a Car</h3>
                      {/* <h4 class="card-subtitle">Card subtitle</h4> */}
                      <br></br>
                      <p class="card-text">Buy a car you always Wanted</p>
                  </div>
                  <div class="card-footer">
            <Link to="#" class="btn btn-primary">Enter</Link>
            </div>
              </div>
          </div>
      </div>    

        <div class="row">
          <div class="col-sm-15 m-5">
              <div class="card h-100">
                  <img class="img-fluid"  src="https://img.freepik.com/free-vector/student-loan-payments-deferred-abstract-concept-vector-illustration-coronavirus-stimulus-package-pause-suspend-your-payment-financial-obligations-economic-crisis-abstract-metaphor_335657-2935.jpg" alt="Card image top"/>
                  <div class="card-body">
                      <h3 class="card-title">Education</h3>
                      {/* <h4 class="card-subtitle">Card subtitle</h4> */}
                      <br></br>
                      <p class="card-text">Plan Your or your childs future study</p>
                  </div>
                  <div class="card-footer">
                <Link to="/LongTerm" class="btn btn-primary">Enter</Link>
            </div>
                  
              </div>
              
          </div>
      </div>   
      <div class="row">
          <div class="col-sm-15 m-5">
              <div class="card h-100">
                  <img class="img-fluid" src="https://img.freepik.com/premium-vector/time-saving-ideas-money-saving-business-management-time-is-money-financial-investment-future-earnings-growth-stock-market-flat-style-cartoon-illustration-vector_610956-504.jpg" alt="Card image top"/>
                  <div class="card-body">
                      <h3 class="card-title">Savings </h3>
                      {/* <h4 class="card-subtitle">Card subtitle</h4> */}
                      <br></br>
                      <p class="card-text">Save for your future needs</p>
                  </div>
                  <div class="card-footer">
            <Link to="/Savings" class="btn btn-primary">Enter</Link>
            </div>
              </div>
          </div>
      </div>   
      </div>
    </div>
    </>
     
     );
}
 
export default LongTerm
