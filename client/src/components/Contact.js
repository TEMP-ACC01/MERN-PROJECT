import React, {useEffect, useState,  useContext } from 'react';
import { UserContext } from '../App';

const Contact = () => {

	// const navigate = useNavigate();
	const [userData, setUserData] = useState({first_name:"", last_name:"", email:"", phone_no:"", message:""});
	const userContact = async () => {
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
		setUserData({...userData, first_name:data.first_name,last_name: data.last_name, email:data.email,phone_no:data.phone_no});

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
		userContact();
	}, []);

	const handleInputs = (e) =>{
		const name = e.target.name;
		const value = e.target.value;

		setUserData({...userData, [name]:value})
	}


	const contactForm = async (e) => {
		e.preventDefault();

		const {first_name, last_name, email,phone_no, message} = userData;
		const res = await fetch("/contact", {
			method: "POST",
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify({
				first_name, last_name, email, phone_no, message
			})
		});

		const data = await res.json();

		if(!data) {
			console.log("message not send");
		} else {
			alert("Message send");
			setUserData({...userData, message:""})
		}

	}


  return (
    <>
    <div className="container">
			<div className="row">
				<div className="col-sm text-center">
				  <h1 className="div-heading display-4">Contact US</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<form method='POST'>
					  <div className="form-group">
						  <input type="text" className="form-control" id="exampleInputName" name='first_name' onChange={handleInputs} value = {userData.first_name} placeholder="Your Full Name..."/>
					  </div>
            <div className="form-group">
						  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleInputs} value = {userData.email} placeholder="Your Email Address..."/>
					  </div>
                      <div className="form-group">
						  <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='phone_no' onChange={handleInputs} value = {userData.phone_no} placeholder="Your Phone No.."/>
					  </div>
            <div className="form-group">
              <textarea className="form-control" name='message' aria-label="With textarea"
			  onChange={handleInputs} value={userData.message}
			  ></textarea>
              <br></br>
            </div>
					  <button type="submit" className="btn btn-warning btn-lg btn-block" onClick = {contactForm}>Submit</button>
					</form>
			  </div>
			  <div  className="col-md-6">
          <h5>Address: <small className="text-muted">....</small></h5>
          <h5>Email: <small className="text-muted">...</small></h5>
          <h5>Contact: <small className="text-muted">....</small></h5>
         {/* <p><iframe width="600" height="450" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJtcNatvRsrjsRA38LEBPt_78&key=..." allowfullscreen></iframe></p> --> */}
          <div className="text-center">
            {/* <img className="img-fluid contact-image" alt="Responsive image" src="https://csds.qld.edu.au/sdc/resources/images/find-us-map.jpg" class="rounded" alt="..."> */}
          </div>
	  		</div>
        
			</div>
		</div>
    </>
  )
}

export default Contact