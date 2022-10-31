const ShortTerm = () => {
    return ( 
        <div className="containe">
        <label htmlFor="goalname" style={{marginTop:40}}><h5>Name of the goal</h5></label><br />
        <input type="text" id="goalname"/><br /><br />
        <h6>Starting date of the goal </h6>
        <input type="date" /><br /><br />
        <h6>Ending date of goal</h6>
        <input type="date" /><br /><br />
        <button className="btn btn-success">Save Your Goal</button>
        
        </div>
     );
}
 
export default ShortTerm;
