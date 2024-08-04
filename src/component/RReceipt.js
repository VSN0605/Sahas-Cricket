import axios from 'axios';
import "./CSS/Dashboard.css"

import  {useState, useEffect} from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Coachdata from './Coachdatas';
export default function Reports({dbpath}) {

    const [user, setUser] = useState([]);
    const [type1, setType1] = useState([]);
    const [filter1, setFilter1] = useState([]);

    const loadUser = async (query) => {
        const result = await axios.get(dbpath+"dynamicQuery.php?query="+query);
        setUser(result.data.phpresult);
        console.log(result.data.phpresult); 
    }
    const navigate = useNavigate();
    const isUserLoggedIn = Cookies.get('userLoggedIn');

    useEffect(() => {
        if (isUserLoggedIn !== 'true') {
            navigate('/AdminLogin');
        }
        else
        {
            //loadUser();
        }

        
    }, [isUserLoggedIn]);      


    function nextWeekDateFunc(validTill)
    {
      const date = new Date(validTill);

            date.setDate(date.getDate() + 7);
        
            const year = date.getFullYear();
            let month = date.getMonth() + 1; 
            let day = date.getDate();
        
            month = month < 10 ? '0' + month : month;
            day = day < 10 ? '0' + day : day;

            return `${year}-${month}-${day}`;
    }

    const onSearch = () => {

      var todayDate = new Date().toISOString().slice(0, 10);
      console.log(todayDate);
      var nextWeekDate = nextWeekDateFunc(todayDate);
      var query;
      console.log(nextWeekDate);
      if(type1==='1')
      {

        //recreational
        if(filter1==='1')
        {
          
          query='select * from receipt Where status="Paid" AND `for`="Recreational";'; 
          // query='select * from rregister Where status="Paid";';

          nextProcess(query);
        }
        else if(filter1==='2')
        {
          query='select * from receipt Where status="Paid" AND `for`="Recreational";';
          nextProcess(query);
        }
        else if(filter1==='3')
        {  
          query='select * from receipt Where status="" OR status="unpaid"  AND `for`="Recreational";';

          // query='select * from rregister where status= "unpaid" OR status= "" AND id !=0;';
          nextProcess(query);
        }
        else
        {
          alert("Please select the proper action");
        }
      }
      else if(type1==='2')
      {
        //coaching
        if(filter1==='1')
        {
          // query='select * from tregister where status= "paid" AND id !=0;';
          query='select * from receipt Where status="Paid" AND `for`="Coaching";'; 

          nextProcess(query);
        }
        else if(filter1==='2')
        {
          query='select * from receipt Where status="Paid" AND `for`="Coaching";'; 
          nextProcess(query);
        }
        else if(filter1==='3')
        {
          query='select * from receipt Where status="" OR status="unpaid"  AND `for`="Coaching";';
          nextProcess(query);
        }
        else
        {
          alert("Please select the proper action");
          
        }
      }
      else if(type1==='3')
      {
        if(filter1==='1')
        {
          query='select * from tregister where validtill < "'+todayDate+'" AND validtill LIKE "%-%" AND level = "Beginner" AND id != 0;';
          nextProcess(query);
        }
        else if(filter1==='2')
        {
          query='select * from tregister where validtill < "'+nextWeekDate+'" And validtill > "'+todayDate+'" AND validtill LIKE "%-%" AND level = "Beginner" AND id != 0;';
          nextProcess(query); 
        }
        else if(filter1==='3')
        {
          query='select * from tregister where validtill NOT LIKE "%-%" AND level = "Begineer" AND id != 0;';
          nextProcess(query);
        }
        else{
          alert("Please select the proper action");
        }
      }
      else if(type1==='4') 
      {
        if(filter1==='1')
        {
          query='select * from tregister where validtill < "'+todayDate+'" AND validtill LIKE "%-%" AND level = "Professional" AND id != 0;';
          nextProcess(query);
        }
        else if(filter1==='2')
        {
          query='select * from tregister where validtill < "'+nextWeekDate+'" And validtill > "'+todayDate+'" AND validtill LIKE "%-%" AND level = "Professional" AND id != 0;';
          nextProcess(query);
        }
        else if(filter1==='3')
        {
          query='select * from tregister where validtill NOT LIKE "%-%" AND level = "Professional" AND id != 0;';
          nextProcess(query);
        }
        else{
          alert("Please select the proper action");
        }
      }
      else if(type1==='5')
      {
        if(filter1==='1')
        {
          
        }
        else if(filter1==='2')
        {

        }
        else{
          alert("Please select the proper action");
        }
      }
      else{
        alert("Please select the proper action");
      }

    }

    function nextProcess(query)
    {
      /* alert(query); */
      loadUser(query);
    }

    return (    
    <>
        <br></br><br></br>
        <p className='sp1' >Reports</p>
        <br></br>
        <center>
       
        </center>
            <br></br>
        
        <form style={{display:'flex'}}>
          
         
          <div className="mb-3" style={{marginLeft:'32%', display:'flex'}}>

            <div className="input-group mb-3" >
              <select className="form-select" id="inputGroupSelect01"  value={type1} onChange={(e) => setType1(e.target.value)} >
                <option value="">Type...</option>
                <option value="1">Recreational</option>
                <option value="2">Coaching</option>
                {/* <option value="3">Coaching(Begineer)</option> */}
                {/* <option value="4">Coaching(Pro)</option> */}
              </select>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="input-group mb-3" >
              <select className="form-select" id="inputGroupSelect01"  value={filter1} onChange={(e) => setFilter1(e.target.value)} >
                <option value="">Filters...</option>
                <option value="1">Completed</option>
                {/* <option value="2">Upcoming</option> */}
                <option value="3">Unpaid</option>

              </select>
            </div>
          </div>
          
          
          <br />
          <br />
          <center>
          &nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-primary"  onClick={onSearch} >
              Submit
            </button> &nbsp;&nbsp;&nbsp;
            <Link to="/dashboard"><button type="button" className="btn btn-primary">
              Dashboard
            </button></Link>
          </center>
        </form>

       
        <br></br><br></br>
        <div id="tablediv">
        <table class="table">

    
            <thead>
                <tr>
                <th scope="col">ID</th>
                {/* <th scope="col">VCA ID</th> */}
                <th scope="col">Name</th>
                {/* <th scope="col">Parents Name</th> */}
                <th scope="col">Time</th>
                <th scope="col">valid Till</th>
                <th scope="col">Prospectus Fee</th>
                <th scope="col">Registration Fee</th>
                <th scope="col">Coaching Fee</th>
                <th scope="col">Recreatioal Fee</th>
                <th scope="col">Maintanence Fee</th>
                <th scope="col">Activiy Fee</th>
                <th scope="col">Uniform Fee</th>
                <th scope="col">Sport Fee</th>
                <th scope="col">Other Fee</th>
                <th scope="col"> Paid Amount </th>
                <th scope="col">Status</th>

                <th scope="col">timestamp Fee</th>




                {/* <th scope="col">Address</th>
                <th scope="col">Mobile No.</th> */}
                {/* <th scope="col">Residential No.</th> */}
                {/* <th scope="col">Date of birth</th> */}
                {/* <th scope="col">Age Group</th>
                <th scope="col">Sport</th>
                {/* <th scope="col">School/Clg</th> */}
                {/* <th scope="col">Timing</th> */}
                {/* <th scope="col">Joining</th> */}
                {/* <th scope="col">Valid Till</th>
                <th scope="col">Level</th>
                <th scope="col">Status</th> */} 

                {/* <th scope="col">Coach</th> */}
                </tr>
            </thead>
            <tbody> 
                {user.map((res)=>
                
                    <tr>
                        {/* <td>{res.id}</td> */}
                        <td>{res.uid}</td>
                        <td>{res.name}</td>
                        {/* //New Code */}
                        <td>{res.time}</td>
                        <td>{res.validTill}</td>
                        <td>{res.ProspectusFee}</td>
                        <td>{res.RegistrationFee}</td>
                        <td>{res.CoachingFee}</td>
                        <td>{res.RecreatioalFee}</td>
                        <td>{res.MaintanenceFee}</td>
                        <td>{res.ActiviyFee}</td>
                        <td>{res.UniformFee}</td>
                        <td>{res.SportFee}</td>
                        <td>{res.OtherFee}</td>
                        <td>{res.amount}</td>
                        <td>{res.status}</td>
                        <td>{res.timestamp}</td>






                        {/* <td>{res.fname}</td> */}
                        {/* <td>{res.address}</td> */}
                        {/* <td>{res.mobile}</td> */}
                        {/* <td>{res.rphno}</td>     */}
                        {/* <td>{res.dob}</td> */}
                        {/* <td>{res.Gage}</td> */}
                        {/* <td>{res.sport}</td> */}
                        {/* <td>{res.clg}</td>                         */}
                        {/* <td>{res.timing}</td>  */}
                        {/* <td>{res.joiningdate}</td>   */}
                        {/* <td>{res.validtill}</td>    */}
                        {/* <td>{res.level}</td>    */}
                        {/* <td>{res.coach}</td>    */}
                        {/* <td>{res.status}</td>    */}

                    </tr>
                )}
            </tbody>
        </table>
        
        </div>
        <br />
        <br />
        <br />
        <br />
    </>
  )
}

