import axios from 'axios';
import "./CSS/Dashboard.css"

import  {useState, useEffect} from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Coachdata from './Coachdatas';
export default function Search({dbpath}) {

    const [user, setUser] = useState([]);
    const [type1, setType1] = useState([]);
    const [type2, setType2] = useState([]);
    const [type3, setType3] = useState([]);
    const [filter1, setFilter1] = useState([]);
    const [Gage, setGage] = useState('');   //new code;

    const loadUser = async (query) => {
      try{    //---new code---//
        const result = await axios.get(dbpath+"dynamicQuery.php?query="+query);
        setUser(result.data.phpresult);
        console.log(result.data.phpresult); 
      }   //----new code;----//
      catch (error) {   //new code;
        console.error("Error loading user data", error);    //new code;
      }   //new code;
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
      var query = '';
    
      if (Gage === "Under-19") {
        query += ` AND ageGroup = "${Gage}"`;
      }
    
      function nextProcess(query) {
        loadUser(query);
      }
    
      if (type1 === '1') {
        // recreational
        if (type2 === '1') {
          query = 'select * from tregister where id ="' + filter1 + '" AND id != 0;';
          nextProcess(query);
        } else if (type2 === '2') {
          query = 'select * from rregister where id ="' + filter1 + '" AND id != 0;';
          nextProcess(query);
        } else if (type2 === '3') {
          // handle other cases if needed
        } else {
          alert("Please select the proper action");
        }
      } else if (type1 === '2') {
        // coaching
        if (type2 === '1') {
          query = 'select * from tregister where name LIKE "%' + filter1 + '%" AND id != 0;';
          nextProcess(query);
        } else if (type2 === '2') {
          query = 'select * from tregister where name LIKE "%' + filter1 + '%" AND id != 0;';
          nextProcess(query);
        } else if (type2 === '3') {
          // handle other cases if needed
        } else {
          alert("Please select the proper action");
        }
      } else if (type1 === '3') {
        // coaching
        if (type2 === '1') {
          query = 'select * from tregister where mobile LIKE ' + filter1 + ' AND id != 0;';
          nextProcess(query);
        } else if (type2 === '2') {
          query = 'select * from tregister where mobile LIKE ' + filter1 + ' AND id != 0;';
          nextProcess(query);
        } else if (type2 === '3') {
          // handle other cases if needed
        } else {
          alert("Please select the proper action");
        }

      }
      //Age Group
      else if (type1 === '4') {
        // coaching
        if (type2 === '1' && type3 === 'Under-19' ) {
          query = 'select * from tregister where Gage = "Under 19";';
          nextProcess(query);
        } 
        else if (type2 === '1' &&  type3 === 'Under-17' ) {
          query = 'select * from tregister where Gage = "Under 17";';
          nextProcess(query);
        }else if (type2 === '1' &&  type3 === 'Under-15' ) {
          query = 'select * from tregister where Gage = "Under 15";';
          nextProcess(query);
        }
        else if (type2 === '1' &&  type3 === 'Under-13' ) {
          query = 'select * from tregister where Gage = "Under 13";';
          nextProcess(query);
        } 



        else if (type2 === '2' &&  type3 === 'Under-19') {
          // handle other cases if needed
          query = 'select * from rregister where Gage = "Under 19";';
          nextProcess(query);
        }else if (type2 === '2' &&  type3 === 'Under-17') {
          // handle other cases if needed
          query = 'select * from rregister where Gage = "Under 17";';
          nextProcess(query);
        }
        else if (type2 === '2' &&  type3 === 'Under-15') {
          // handle other cases if needed
          query = 'select * from rregister where Gage = "Under 15";';
          nextProcess(query);
        }
        else if (type2 === '2' &&  type3 === 'Under-13') {
          // handle other cases if needed
          query = 'select * from rregister where Gage = "Under 13";';
          nextProcess(query);
        }

        else {
          alert("Please select the proper action");
        }
      }  else {
        alert("Please select the proper action");
      }
      
    };
    
    function nextProcess(query)
    {
      /* alert(query); */
      loadUser(query);
    }
console.log(type1)
    return (    
    <>
        <br></br><br></br>
        <p className='sp1' >Search</p>
        <br></br>
        <center>
       
        </center>
            <br></br>
        
        <form style={{display:'flex'}}>
          
         
          <div className="mb-3" style={{marginLeft:'27%', display:'flex'}}>

            <div className="input-group mb-3" >
              <select className="form-select" id="inputGroupSelect01"  value={type1} onChange={(e) => setType1(e.target.value)} >
                <option value="">Search by...</option>
                <option value="1">ID</option>
                <option value="2">Name</option>
                <option value="3">Number</option>
                <option value="4">Age Group</option>    {/*new code;*/}
              </select>
            </div>
            &nbsp;&nbsp;&nbsp;

            {/* new dropdown list */}
            {type1 === '4' && (
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect01" value={type3} onChange={(e) => setType3(e.target.value)}>
                    <option value="">Select Age Group...</option>
                    <option value="Under-19">Under-19</option>
                    <option value="Under-17">Under-17</option>
                    <option value="Under-15">Under-15</option>
                    <option value="Under-13">Under-13</option>
                </select>
              </div>
            )}

            &nbsp;&nbsp;&nbsp;
            <div className="input-group mb-3" >
              <select className="form-select" id="inputGroupSelect01"  value={type2} onChange={(e) => setType2(e.target.value)} >
                <option value="">from...</option>
                <option value="1">Player</option>
                <option value="2">Recreatioal</option>
              </select>
            </div>
            &nbsp;&nbsp;&nbsp;
      {type1 !== "4" && <input type="text"  className="form-control" placeholder='Type Here..' style={{height:'38px'}} id="taddress" onChange={(e) => setFilter1(e.target.value)} />}      
            
          </div>
          
          
          <br />
          <br />
          <center>
          &nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-primary"  onClick={onSearch} >
              Search
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
                <th scope="col">VCA ID</th>
                <th scope="col">Name</th>
                <th scope="col">Parents Name</th>
                <th scope="col">Address</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">Residential No.</th>
                <th scope="col">Date of birth</th>
                <th scope="col">Age Group</th>
                <th scope="col">Role</th>
                {/* <th scope="col">School/Clg</th> */}
                <th scope="col">Timing</th>
                <th scope="col">Joining</th>
                <th scope="col">Valid Till</th>
                <th scope="col">Level</th>
                <th scope="col">Coach</th>
                </tr>
            </thead>
            <tbody> 
                {user.map((res)=>
                
                    <tr style={{fontSize:'14px'}}>
                        <td>{res.id}</td>
                        <td>{res.vca}</td>
                        <td>{res.name}</td>
                        <td>{res.fname}</td>
                        <td>{res.address}</td>
                        <td>{res.mobile}</td>
                        <td>{res.rphno}</td>    
                        <td>{res.dob}</td>
                        <td>{res.Gage}</td>
                        <td>{res.role}</td>
                        {/* <td>{res.clg}</td>                         */}
                        <td>{res.timing}</td> 
                        <td>{res.joiningdate}</td>  
                        <td>{res.validtill}</td>   
                        <td>{res.level}</td>   
                        <td>{res.coach}</td>   
                                      
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

