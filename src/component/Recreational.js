import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Recretional({ dbpath }) {
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState([]);
  const [remarkText, setRemarkText] = useState(() => {
    const storedData = localStorage.getItem('remarkText');
    return storedData ? JSON.parse(storedData) : {};
  });
  const [attendanceOptions, setAttendanceOptions] = useState({});
  const [matchesPlayed, setMatchesPlayed] = useState({}); // Corrected the state variable name

  const loadUser = async () => {
    try {
      const result = await axios.get(`${dbpath}viewrecretional.php`);
      setUser(result.data.phpresult);
    } catch (error) {
      console.error("Error loading user ", error);
    }
  };

  const navigate = useNavigate();
  const isUserLoggedIn = Cookies.get('userLoggedIn');

  useEffect(() => {
    if (isUserLoggedIn !== 'true') {
      navigate('/AdminLogin');
    } else {
      loadUser();
    }
  }, [isUserLoggedIn, navigate]);

  const handleRemarkChange = (rowId, field, value) => {
    setRemarkText((prevRemarkText) => ({
      ...prevRemarkText,
      [rowId]: {
        ...prevRemarkText[rowId],
        [field]: value,
      },
    }));

    // Set the state for matchesPlayed
    setMatchesPlayed((prevMatchesPlayed) => ({
      ...prevMatchesPlayed,
      [rowId]: field === 'matchesPlayed' ? parseInt(value) : prevMatchesPlayed[rowId],
    }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    user.forEach((res) => {
      if (!attendanceOptions[res.id] || !matchesPlayed[res.id] || matchesPlayed[res.id] <= 0) {
        errors[res.id] = 'Please fill in the detail';
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  // async function handleSubmit() {
  //   const dataToSend = {
  //       attendanceOptions: attendanceOptions,
  //       matchesPlayed: matchesPlayed,
  //       remark: remarkText,
  //   };

  //   try {
  //       const response = await axios.post('http://localhost/test/remark.php', [dataToSend]);

  //       console.log('Server Response:', response.data);

  //       if (response.data.includes('Successful')) {
  //           alert('Attendance Submitted');
  //       } else {
  //           alert('Failed to submit attendance. Error: ' + response.data);
  //       }
  //   } catch (error) {
  //       console.error('Error submitting attendance:', error);
  //       alert('Failed to submit attendance. Please try again.');
  //   }

  // }
  async function handleSubmit() {
    const dataToSend = {
      attendanceOptions: attendanceOptions,
      matchesPlayed: matchesPlayed,
      remark: remarkText,
      users: user.map(res => ({
        id: res.id,
        name: res.name,
        timing: res.timing,
        coach: res.coach,
      })),
    };
  
    try {
      const response = await axios.post('http://localhost/test/rremark.php', dataToSend);
  
      console.log('Server Response:', response.data);
  
      if (response.data.includes('Successful')) {
        alert('Attendance Submitted');
      } else {
        alert('Failed to submit attendance Please fill the Attendance Option');
      }
    } catch (error) {
      console.error('Failed to submit attendance Please fill the Attendance Option');
      // alert('Failed to submit attendance. Please try again.');
    }
  
  //   try {
  //     const response = await axios.post('http://localhost/test/remark.php', dataToSend);
  
  //     console.log('Server Response:', response.data);
  
  //     if (response.data.includes('Successful')) {
  //       alert('Attendance Submitted');
  //     } else {
  //       alert('Failed to submit attendance. Error: ' + response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error submitting attendance:', error);
  //     alert('Failed to submit attendance. Please try again.');
  //   }
  // 
}

  return (
    <>
      <br />
      <br />
      <p className='sp1'>Recreational Attendance</p>
      <div
        className='tab-content'
        style={{ padding: '20px', display: 'flex', justifyContent: 'space-around' }}
      >
        <div id='tab-1' className='tab-pane fade show p-0 active'>
          <div className='' style={{ display: 'flex' }}>
            <Link className='nav-link' to='/Coaching'>
              <button type='button' className='btn btn-outline-primary'>
                Coaching
              </button>
            </Link>
            <Link className='nav-link' to='/Coach'>
              <button type='button' className='btn btn-outline-primary'>
              
                Coach
              </button>
            </Link>
            <Link className='nav-link' to='/dashboard'>
              <button type='button' className='btn btn-outline-primary'>
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div id='tablediv'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>ID&nbsp;</th>
              <th scope='col'>Name</th>
              <th scope='col'>Timing</th>
              <th scope='col'>Present / Absent</th>
              <th scope='col'>Matches Played</th>
              <th scope='col'>Remark</th>
            </tr>
          </thead>
          <tbody>
            
            {user.map((res) => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.timing}</td>
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
                    min={0}
                    value={remarkText[res.id]?.matchesPlayed || ''}
                    style={{ width: '70px' }}
                    onChange={(e) =>
                      handleRemarkChange(res.id, 'matchesPlayed', parseInt(e.target.value))
                    }
                  />
                </td>
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
  





// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import './CSS/Dashboard.css';

// export default function Recreational({ dbpath }) {
//   const [user, setUser] = useState([]);
//   const [remarkText, setRemarkText] = useState(() => {
//     const storedData = localStorage.getItem('remarkText');
//     return storedData ? JSON.parse(storedData) : {};
//   });
//   const [attendanceOption, setAttendanceOption] = useState({});
//   const [formErrors, setFormErrors] = useState({});

//   const loadUser = async () => {
//     try {
//       const result = await axios.get(dbpath + "viewrecretional.php");
//       setUser(result.data.phpresult);
//       console.log(result.data.phpresult);
//     } catch (error) {
//       console.error("Error loading user data:", error);
//     }
//   };

//   const navigate = useNavigate();
//   const isUserLoggedIn = Cookies.get('userLoggedIn');

//   useEffect(() => {
//     if (isUserLoggedIn !== 'true') {
//       navigate('/AdminLogin');
//     } else {
//       loadUser();
//     }
//   }, [isUserLoggedIn]);

//   const handleRemarkChange = (rowId, field, value) => {
//     setRemarkText(prevRemarkText => ({
//       ...prevRemarkText,
//       [rowId]: {
//         ...prevRemarkText[rowId],
//         [field]: value
//       }
//     }));
//   };

//   const validateForm = () => {
//     const errors = {};
//     let isValid = true;

//     user.forEach(res => {
//       if (!attendanceOption[res.id]) {
//         errors[res.id] = 'Please fill in the detail';
//         isValid = false;
//       }
//     });

//     setFormErrors(errors);
//     return isValid;
//   };

//   const onSubmit = () => {
//     if (validateForm()) {
//       alert("Attendance Submitted");
//     } else {
//       alert("Please fill in all required fields");
//     }
//   };

//   return (
//     <>
//       <br /><br />
//       <p className='sp1'>Recreational Attendance</p>
//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
//         <Link className="nav-link" to="/Coaching" ><button type="button" className="btn btn-outline-primary">Coaching</button></Link>
//         <Link className="nav-link" to="/Coach" ><button type="button" className="btn btn-outline-primary">Coach</button></Link>
//         <Link className="nav-link" to="/dashboard" ><button type="button" className="btn btn-outline-primary">Dashboard</button></Link>
//       </div>
//       <br /><br />

//       <div id="tablediv">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">ID&nbsp;</th>
//               <th scope="col">Name</th>
//               <th scope="col">Timing</th>
//               <th scope="col">Mobile Number</th>
//               <th scope="col">Present / Absent</th>
//               <th scope="col">Matches Played</th>
//               <th scope="col">Remark</th>
//             </tr>
//           </thead>
//           <tbody>
//             {user.map(res => (
//               <tr key={res.id}>
//                 <td>{res.id}</td>
//                 <td>{res.name}</td>
//                 <td>{res.timing}</td>
//                 <td>{res.mobile}</td>
//                 <td>
//                   <label style={{ color: attendanceOption[res.id] === "Present" ? "blue" : "black" }}>
//                     <input type="radio" name={`attendance-${res.id}`} value="Present" onChange={() => setAttendanceOption({ ...attendanceOption, [res.id]: 'Present' })} />
//                     Present
//                   </label>
//                   &nbsp;&nbsp;&nbsp;
//                   <label style={{ color: attendanceOption[res.id] === "Absent" ? "red" : "black" }}>
//                     <input type="radio" name={`attendance-${res.id}`} value="Absent" onChange={() => setAttendanceOption({ ...attendanceOption, [res.id]: 'Absent' })} />
//                     Absent
//                   </label>
//                   {formErrors[res.id] && <div className="error" style={{ color: 'red' }}>{formErrors[res.id]}</div>}
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     min={0}
//                     value={remarkText[res.id]?.matchesPlayed || ""}
//                     style={{ width: '70px' }}
//                     onChange={(e) => handleRemarkChange(res.id, 'matchesPlayed', parseInt(e.target.value))}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     value={remarkText[res.id]?.remark || ""}
//                     onChange={(e) => handleRemarkChange(res.id, 'remark', e.target.value)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
//         <button className="btn btn-outline-primary" onClick={onSubmit}>Submit</button>
//       </div>

//       <br /><br /><br /><br />
//     </>
//   );
// }
