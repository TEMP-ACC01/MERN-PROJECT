import React, { useEffect,useState } from 'react'

const ToDoList = () => {
    const [userData, setUserData] = useState([]);

    const taskManage = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/getData', {
                method : 'GET',
                headers:{
                    // Accept:"application/json",
                    "Content-Type":"application/json"
                },
                // credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            setUserData({...userData, first_name : data.first_name,task : data.task,due_date : data.due_date, status : data.status});

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

            


        }catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        taskManage();
    }, []);

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({...userData, [name]:value })
    }


    const taskList = async (e) => {
        e.preventDefault();

        const {first_name, task, due_date, status} = userData;

        const res = await fetch('/todolist', {
            method:"POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body:JSON.stringify({
                first_name, task,due_date, status
            })
        });
        const data = await res.json();

        if(!data) {
            console.log("task doesnt save");
        } else {
            alert("task saved");
            setUserData({...userData, task:"",due_date:"", status:""})
        }
    }

    useEffect(() => {
        taskManage();
    }, []);

   

    const getTaskData = async(e) => {

        // const [gettaskdata, setUserData] = useEffect([]);
        // e.preventDefault();

        
        const res = await fetch("/getdataTask", {
            method : "GET",
            headers:{
                "Content-Type" :"application/json"
            },
        })

        const data = await res.json();
        console.log(data);

        if (!res.status === 200){
            const error = new Error(res.error);
            throw error;}
        else {
            // alert("data added");
            setUserData(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getTaskData();
    }, []);

    // let status = document.getElementById("status")
    // function statusf(){
    // if (element.status === "Completed") {
    //     status.classList.remove("bg-success");
    //     status.classList.add("bg-danger")


                
    // }}

    const listItems = userData.tasks?.map(
        (element, i) => {

            return (
                // <ul>
                //     {/* <li style={{ 
                //         fontWeight: 'bold', 
                //         color: 'red' }}
                //     >
                //         {element.task}
                //     </li>
                //     <li>{element.due_date}</li>
                //     <li>{element.status}</li> */}
                //     {/* <li>{eleme}</li> */}


                //     <tr class="table-info">
                //     <th scope="row">{i+1}</th>
                //     <td>{element.task}</td>
                //     <td>{element.due_date}</td>
                //     <td>{element.status}</td>
                //     </tr>


                //     {/* <td>{element.task}</td>
                //     <td>{element.due_date}</td>
                //     <td>{element.status}</td> */}


                // </ul>
                // <tr className='table-info'>
                //     <th scope='row'>{i}</th>
                //     <td>{element.task}</td>
                //     <td>{element.due_date}</td>
                //     <td>{element.status}</td>
                // </tr>
                <tr className='text-white'>
                <td>
                  <p class="fw-normal mb-1">{i}</p>
                  
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="ms-3">
                      <p class="fw-bold mb-1">{element.task}</p>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">{element.due_date}</p>
                  
                </td>
                <td>
            
                
                  <span class="badge" id = "status" >{element.status}</span>
                </td>
                
                <td>
                  <button type="button" class="btn btn-link btn-sm btn-rounded">
                    Edit
                  </button>
                </td>
              </tr>
            )
        }
    )





  return (
    <>
    <div style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)) ,url('https://img.freepik.com/free-photo/clipboard-with-checklist-paper-note-icon-symbol-purple-background-3d-rendering_56104-1491.jpg?w=740&t=st=1664294370~exp=1664294970~hmac=177912f0155385521df4f9b0b85612db1b4d1b38bfe0cb69d4956d586ca72d9e') ", 
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0",
    
    }}>
        <h1>HELLO, {userData.first_name}</h1>
        <p style={{color:"darkseagreen"}}>now you can add your tasks below</p>
        {/* <div className='col-md-6'>
            <h1 className='font-bold pb-4 text-xl'>Tasks & Routine </h1> */}
            {/* <form id='form'>
                <div className='grid gap-4'>
                    <div className='input-group'>
                        <input type = "text" 
                        name = "task"
                        value={userData.task}
                        onChange = {handleInputs}
                        placeholder='Add your Task here' className='form-input'></input>
                        <input type = "time" 
                        name = "due_time"
                        value={userData.due_time}
                        onChange = {handleInputs}
                        placeholder='Due Time' className='form-input'></input>
                    </div>
                    <div className='input-group'>
                    <input type = "date"
                name = "due_date"
                value={userData.due_date}
                onChange = {handleInputs}    
                    placeholder='Due Date' className='form-input'></input>
                    </div>
                    <div>
                        <p>Enter the current status:</p>
                    <input type = "text"
                name = "status"
                value={userData.status}
                onChange = {handleInputs}    
                    placeholder='status' className='form-input'></input>


                    <select className='form-input'>
                        <option value="status" defaultValue>Status</option>
                        <option value="InProgress">InProgess</option>
                        <option value="Pending">Pendning</option>
                        <option value="Completed">Completed</option>

                        
                    </select>
                    </div>
                    <div className='submit-btn'>
                        <button className='border py-2 text-black bg-indigo-500 w-full'>Add to List</button>
                    </div>
                
                </div>
            </form> */}




{/* <form id='form' method='POST'>
                <div className='grid gap-4'>
                    <div className="form-group">
					<input type="text" className='form-input' 
					id="exampleInputName" 
					name = "task" 
					onChange={handleInputs} 
					value={userData.task}
					placeholder="Enter your Task.."/>
				</div>
					
					<div className="form-group" >
					<input type="datetime-local" className='form-input' 
					id="exampleInputName" 
					name='due_time' 
					onChange={handleInputs} 
					value={userData.due_time}
					placeholder="Enter due time..."/>
                        
					</div>	
                        
					<div className="form-group" >	
					<input type="datetime-local" className='form-input' 
					id="exampleInputName" 
					name = "due_date" 
					onChange={handleInputs} 
					value={userData.due_date}
					placeholder="Enter due date..."/>
					</div>
						
                    
					
					
                    <div className="form-group">
                    <input type="text" className='form-input' 
					id="exampleInputName" 
					name = "status" 
					onChange={handleInputs} 
					value={userData.status}
					placeholder="Enter current status"/>
					</div> 
					
                    
      
                    <div className='submit-btn'>
                        <button className='border py-2 text-black bg-indigo-500 w-full' onClick={taskList}>Add to List</button>
                    </div>
                
                </div>
            </form>
        </div> */}
        <br></br>
    <div class="container">
        <div class="row">
            <div class="col-sm-4" >
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">                        
                        <h2 style={{color:"white"}}>Schedule Your 
                            Routine
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xs-offset-3">
                        <form id="contact-form" class="form" method='POST' role="form">
                            <div class="form-group">
                                <label class="form-label text-black" for="name">Enter your next Task</label>
                                <input style ={{backgroundColor:"rgba(0,0,0,0.1)", border:"none"}} type="text" className='form-control' id="tassk" name="task" 
                                onChange={handleInputs}
                                value = {userData.task}
                                placeholder="Task...." tabindex="1" required/>
                                
                            </div>  
                            <br></br>                                               
                            <div class="form-group">
                                <label class="form-label text-blak" for="subject">Whats the Due Time</label>
                                <input style ={{backgroundColor:"rgba(0,0,0,0.1)", border:"none"}} type="datetime-local" class="form-control" id="due_date" name="due_date" 
                                onChange={handleInputs}
                                value = {userData.due_date}
                                placeholder="date" tabindex="3"/>
                            </div>  
                            <br></br>                          
                            <div class="form-group">
                                <label class="form-label text-black" for="message">Current Status</label>
                                <input style ={{backgroundColor:"rgba(0,0,0,0.1)", border:"none"}} type="text" class="form-control" id="name" name="status" 
                                onChange={handleInputs}
                                value = {userData.status}
                                placeholder="Completed/pending/Ongoing...." tabindex="1" required/>                                 
                            </div>
                            <br></br>
                            
                            

                            <div class="text-center" >
                                <button type="submit" onClick={taskList} class="btn btn-primary btn-lg btn-block" >Add Task</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            

            
            <div class="col-sm-8" style={{background:"linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))", borderRadius:"10px"}}>
                <div className='container'>
            <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center" >                        
                        <h2 style={{color:"white"}}>Daily Tasks
                        </h2>
                        
                    </div>
                    <div >
                    <button type="button" onClick={getTaskData} class="btn btn-outline-success mb-2" >
                    Refresh
                  </button>
                    </div>
                    
                    
                </div>
            {/* <!--Table--> */}



            
            <div class="table-responsive scrollspy-example " data-bs-spy="scroll">
            <table class="table align-middle p-3 mb-2 bg-indigo bg-lighten-xs bg-opacity-0 text-white ">
                <thead class="bg-dark" >
                    <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
            </div>


        {/* <table class="table table-striped w-100"> */}

        {/* <!--Table head--> */}
        {/* <thead>
            <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Due Date</th>
            <th>Status</th>
            </tr>
        </thead> */}
        {/* <!--Table head--> */}

        {/* <!--Table body--> */}
        {/* <tbody>   
            {listItems}
        </tbody> */}
        
        {/* </table> */}

            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ToDoList