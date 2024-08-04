import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Coaching({ dbpath }) {
  const [type1, setType1] = useState([]);
  const [type2, setType2] = useState([]);
  const [type3, setType3] = useState([]);
  const [filter1, setFilter1] = useState([]);
  const [Gage, setGage] = useState('');   //new code;
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState([]);
  const [remarkText, setRemarkText] = useState(() => {
    const storedData = localStorage.getItem('remarkText');
    return storedData ? JSON.parse(storedData) : {};
  });
  const [attendanceOptions, setAttendanceOptions] = useState({});
  const [matchesPlayed, setMatchesPlayed] = useState({});
  const [Wicket, setWicket] = useState({});
  const [runscore, setrunscore] = useState({});



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

  const handleRemarkChange = (rowId, field, value) => {
    setRemarkText((prevRemarkText) => ({
      ...prevRemarkText,
      [rowId]: {
        ...prevRemarkText[rowId],
        [field]: value,
      },
    }));
    setWicket((prevWicket) => ({
      ...prevWicket,
      [rowId]: field === 'Wicket' ? parseInt(value) : prevWicket[rowId],
    }));

    setrunscore((prevrunscore) => ({
      ...prevrunscore,
      [rowId]: field === 'runscore' ? parseInt(value) : prevrunscore[rowId],
    }));
  
  

    setMatchesPlayed((prevMatchesPlayed) => ({
      ...prevMatchesPlayed,
      [rowId]: field === 'matchesPlayed' ? parseInt(value) : prevMatchesPlayed[rowId],
    }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    user.forEach((res) => {
      if (!attendanceOptions[res.id] ) {
        errors[res.id] = 'Please fill in the detail';
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  async function handleSubmit() {
    if (!validateForm()) {
      alert('Please fill in all details.');
      return;
    }

    const dataToSend = {
      attendanceOptions: attendanceOptions,
      Wicket: Wicket,
      runscore:runscore,

      matchesPlayed: matchesPlayed,
      
      remark: remarkText,
      users: user.map(res => ({
        id: res.id,
        name: res.name,
        type2: type2,

        timing: res.timing,
        coach: res.coach,
      })),
    };

    try {
      const response = await axios.post('http://localhost/test/remark.php', dataToSend);

      console.log('Server Response:', response.data);

      if (response.data.includes('Successful')) {
        alert('Attendance Submitted');
      } else {
        alert('Failed to submit attendance. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting attendance:', error);
      alert('Failed to submit attendance. Please try again.');
    }
  }

  function nextWeekDateFunc(validTill) {
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

    if (type1 === '1' && type2 === 'Coaching') {
      query = 'SELECT * FROM `tregister` WHERE `timing`="Morning"; ';
      nextProcess(query);
    } else  if (type1 === '1' && type2 === 'Recreational') {
      query = 'SELECT * FROM `rregister` WHERE `timing`="Morning"; ';
      nextProcess(query);
    } else   if (type1 === '2' && type2 === 'Coaching') {
      query = 'SELECT * FROM `tregister` WHERE `timing`="Afternoon"; ';
      nextProcess(query);
    } else  if (type1 === '2' && type2 === 'Recreational') {
      query = 'SELECT * FROM `rregister` WHERE `timing`="Afternoon"; ';
      nextProcess(query);
    }else   if (type1 === '3' && type2 === 'Coaching') {
      query = 'SELECT * FROM `tregister` WHERE `timing`="Evening"; ';
      nextProcess(query);
    } else  if (type1 === '3' && type2 === 'Recreational') {
      query = 'SELECT * FROM `rregister` WHERE `timing`="Evening"; ';
      nextProcess(query);
    }
    
    
    else {
      alert("Please select the proper action");
    }
    
  }
  return (
    <>
      <br />

      <center><p className='sp1'>Attendance</p></center>
      <form style={{ display: 'flex' }}>


        <div className="mb-3" style={{ marginLeft: '27%', display: 'flex' }} >

        <div className="input-group mb-3" style={{ overflowY: 'auto', maxHeight: '150px', marginBottom: '10px' }}>

            <select className="form-select" id="inputGroupSelect01" value={type1} onChange={(e) => setType1(e.target.value)}  >
              <option value="" hidden>Search by...</option>
              {/* <option value="0"> 5 am to 6 am</option> */}
              <option value="1"> Morning</option>
              <option value="2"> Afternoon</option>
              <option value="3"> Evening</option>
              {/* <option value="3"> 9 am to 10 am</option>
              <option value="4"> 10 am to 11 am</option>
              <option value="5"> 11 am to 12 am</option>
              <option value="6"> 12 pm to 1 pm</option>
              <option value="7"> 1 pm to 2 pm</option>
              <option value="8"> 2 pm to 3 pm</option>
              <option value="9"> 3 pm to 4 pm</option>
              <option value="10"> 4 pm to 5 pm</option>
              <option value="11"> 5 pm to 6 pm</option>
              <option value="12"> 6 pm to 7 pm</option>
              <option value="13"> 7 pm to 8 pm</option> */}
              {/* <option value="14"> 8 pm to 9 pm</option> */}

            </select>
          </div>



          &nbsp;&nbsp;&nbsp;
          <div className="input-group mb-3" >
            <select className="form-select" id="inputGroupSelect01" value={type2} onChange={(e) => setType2(e.target.value)} >
              <option value="">from...</option>
              <option value="Coaching">Player</option>
              <option value="Recreational">Recreational</option>
            </select>
          </div>
          &nbsp;&nbsp;&nbsp;

        </div>


        <br />
        <br />
        <center>
          {/* &nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-primary"  onClick={onSearch} >
              Search
            </button> &nbsp;&nbsp;&nbsp; */}
          &nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-primary" onClick={onSearch} >
            Search
          </button> &nbsp;&nbsp;&nbsp;
          <Link to="/dashboard"><button type="button" className="btn btn-primary">
            Dashboard
          </button></Link>
        </center>
      </form>




      <br />
      <br />
      <div id='tablediv'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>ID&nbsp;</th>
              <th scope='col'>Name</th>
              <th scope='col'>Type</th>

              <th scope='col'>Timing</th>
              {/* <th scope='col'>Coach</th> */}
              <th scope='col'>Present / Absent</th>
              <th scope='col'>Wicket</th>
              <th scope='col'>Run Score</th>

              <th scope='col'>Matches Played</th>

              <th scope='col'>Remark</th>
            </tr>
          </thead>
          <tbody>

            {user.map((res) => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{type2}</td>

                <td>{res.timing}</td>
                {/* <td>{res.coach}</td> */}
                <td>
                  <label style={{ color: attendanceOptions[res.id] === 'Present' ? 'blue' : 'black' }}>
                    <input
                      type='radio'
                      name={`attendance-${res.id}`}
                      value='Present'
                      onChange={() =>
                        setAttendanceOptions((prevOptions) => ({ ...prevOptions, [res.id]: 'Present' }))
                      }
                    />
                    Present
                  </label>
                  &nbsp;&nbsp;&nbsp;
                  <label style={{ color: attendanceOptions[res.id] === 'Absent' ? 'red' : 'black' }}>
                    <input
                      type='radio'
                      name={`attendance-${res.id}`}
                      value='Absent'
                      onChange={() =>
                        setAttendanceOptions((prevOptions) => ({ ...prevOptions, [res.id]: 'Absent' }))
                      }
                    />
                    Absent
                  </label>
                  {formErrors[res.id] && (
                    <div className='error' style={{ color: 'red' }}>
                      {formErrors[res.id]}
                    </div>
                  )}
                </td>
                <td>
                  <input
                    type='number'
                    min={-1}
                    value={remarkText[res.id]?.Wicket || ''}
                    style={{ width: '70px' }}
                    onChange={(e) =>
                      handleRemarkChange(res.id, 'Wicket', parseInt(e.target.value))
                    }
                  />
                </td>
                <td>
                  <input
                    type='number'
                    min={0}
                    value={remarkText[res.id]?.runscore || ''}
                    style={{ width: '70px' }}
                    onChange={(e) =>
                      handleRemarkChange(res.id, 'runscore', parseInt(e.target.value))
                    }
                  />
                </td>
                {/* New Code Here */}
                <td>
                  <input
                    type='number'
                    min={0}
                    value={remarkText[res.id]?.matchesPlayed || ''}
                    style={{ width: '70px' }}
                    onChange={(e) =>
                      handleRemarkChange(res.id, 'matchesPlayed', parseInt(e.target.value))
                    }
                  />
                </td>
                {/* NEW Hai uper ka */}
                <td>
                  <input
                    type='text'
                    value={remarkText[res.id]?.remark || ''}
                    onChange={(e) => handleRemarkChange(res.id, 'remark', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
          <button className='btn btn-outline-primary' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

