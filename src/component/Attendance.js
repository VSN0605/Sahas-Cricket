// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// import './CSS/Dashboard.css'; // Import CSS file

// export default function Search({ dbpath }) {
//   const [user, setUser] = useState([]);
//   const [type1, setType1] = useState('');
//   const [type2, setType2] = useState('');
//   const [filter1, setFilter1] = useState('');
//   const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
//   const [remarkText, setRemarkText] = useState(() => {
//     // Load remark data from localStorage or initialize as an empty object
//     const storedData = localStorage.getItem('remarkText');
//     return storedData ? JSON.parse(storedData) : {};
//   });
//   const [attendanceOption, setAttendanceOption] = useState('');

//   const loadUser = async (query) => {
//     try {
//       const result = await axios.get(`${dbpath}dynamicQuery.php?query=${query}`);
//       setUser(result.data.phpresult);
//     } catch (error) {
//       console.error("Error loading user data", error);
//     }
//   };

//   const navigate = useNavigate();
//   const isUserLoggedIn = Cookies.get('userLoggedIn');

//   useEffect(() => {
//     if (isUserLoggedIn !== 'true') {
//       navigate('/AdminLogin');
//     }
//   }, [isUserLoggedIn, navigate]);

//   useEffect(() => {
//     // Save remark data to localStorage whenever it changes
//     localStorage.setItem('remarkText', JSON.stringify(remarkText));
//   }, [remarkText]);

//   useEffect(() => {
//     // Set the text box to "Remark" when the component mounts
//     setRemarkText((prevRemarkText) => {
//       const newRemarkText = { ...prevRemarkText };
//       user.forEach((res) => {
//         if (!newRemarkText[res.id]) {
//           newRemarkText[res.id] = 'Remark';
//         }
//       });
//       return newRemarkText;
//     });
//   }, [user]);

//   const nextWeekDateFunc = (validTill) => {
//     const date = new Date(validTill);
//     date.setDate(date.getDate() + 7);
//     const year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();
//     month = month < 10 ? `0${month}` : month;
//     day = day < 10 ? `0${day}` : day;
//     return `${year}-${month}-${day}`;
//   };

//   const onSearch = () => {
//     const todayDate = new Date().toISOString().slice(0, 10);
//     const nextWeekDate = nextWeekDateFunc(todayDate);
//     let query = '';

//     if (selectedAgeGroup === "Under-19") {
//       query += `AND ageGroup = "${selectedAgeGroup}"`;
//     }

//     const nextProcess = (query) => {
//       loadUser(query);
//     };

//     if (type1 === '1') {
//       if (type2 === '1') {
//         query = `select * from tregister where id ="${filter1}" AND id != 0;`;
//         nextProcess(query);
//       } else if (type2 === '2') {
//         query = `select * from rregister where id ="${filter1}" AND id != 0;`;
//         nextProcess(query);
//       } else if (type2 === '3') {
//         // Do something
//       } else {
//         alert("Please select the proper action");
//       }
//     } else if (type1 === '2') {
//       if (type2 === '1' || type2 === '2') {
//         query = `select * from tregister where name LIKE "%${filter1}%" AND id != 0;`;
//         nextProcess(query);
//       } else if (type2 === '3') {
//         // Do something
//       } else {
//         alert("Please select the proper action");
//       }
//     } else if (type1 === '3') {
//       if (type2 === '1' || type2 === '2') {
//         query = `select * from tregister where mobile LIKE "${filter1}" AND id != 0;`;
//         nextProcess(query);
//       } else if (type1 === '3') {
//         // Do something
//       } else {
//         alert("Please select the proper action");
//       }
//     } else {
//       alert("Please select the proper action");
//     }
//   };

//   const handleRemarkChange = (rowId, value) => {
//     setRemarkText((prevRemarkText) => ({
//       ...prevRemarkText,
//       [rowId]: value
//     }));
//   };

//   return (
//     <>
//       <br /><br />
//       <p className='sp1'>Attendance</p>
//       <br /><br />
//       <form style={{ display: 'flex' }}>
//         <div className="mb-3" style={{ marginLeft: '27%', display: 'flex' }}>
//           <div className="input-group mb-3">
//             <select className="form-select" id="inputGroupSelect01" value={type1} onChange={(e) => setType1(e.target.value)}>
//               <option value="">Search by...</option>
//               <option value="1">ID</option>
//               <option value="2">Name</option>
//               <option value="3">Number</option>
//               <option value="4">Age Group</option>
//             </select>
//           </div>
//           &nbsp;&nbsp;&nbsp;
//           {type1 === '4' && (
//             <div className="input-group mb-3">
//               <select className="form-select" id="inputGroupSelect01" value={selectedAgeGroup} onChange={(e) => setSelectedAgeGroup(e.target.value)}>
//                 <option value="">Select Age Group...</option>
//                 <option value="Under-19">Under-19</option>
//                 <option value="Under-17">Under-17</option>
//                 <option value="Under-15">Under-15</option>
//                 <option value="Under-13">Under-13</option>
//               </select>
//             </div>
//           )}
//           &nbsp;&nbsp;&nbsp;
//           <div className="input-group mb-3">
//             <select className="form-select" id="inputGroupSelect01" value={type2} onChange={(e) => setType2(e.target.value)}>
//               <option value="">from...</option>
//               <option value="1">Coaching</option>
//               <option value="2">Recreational</option>
//             </select>
//           </div>
//           &nbsp;&nbsp;&nbsp;
//           {type1 !== "4" && <input type="text" className="form-control" placeholder='Type Here..' style={{ height: '38px' }} id="taddress" onChange={(e) => setFilter1(e.target.value)} />}
//         </div>
//         <br /><br />
//         <center>
//           &nbsp;&nbsp;&nbsp;
//           <button type="button" className="btn btn-primary" onClick={onSearch}>
//             Search
//           </button>
//           &nbsp;&nbsp;&nbsp;
//           <Link to="/dashboard">
//             <button type="button" className="btn btn-primary">
//               Dashboard
//             </button>
//           </Link>
//         </center>
//       </form>
//       <br /><br />
//       <div id="tablediv">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">ID&nbsp;</th>
//               <th scope="col">VCA ID</th>
//               <th scope="col">Name</th>
//               <th scope="col">Timing</th>
//               <th scope="col">Coach</th>
//               <th scope="col">Present / Absent</th>
//               <th scope="col">Remark</th>
//             </tr>
//           </thead>
//           <tbody>
//             {user.map((res) => (
//               <tr key={res.id}>
//                 <td>{res.id}</td>
//                 <td>{res.vca}</td>
//                 <td>{res.name}</td>
//                 <td>{res.timing}</td>
//                 <td>{res.coach}</td>
//                 <td>
//                   <label>
//                     <input type="radio" name={`attendance-${res.id}`} value="Present" onChange={() => setAttendanceOption("Present")} />
//                     Present
//                   </label>
//                   &nbsp;&nbsp;&nbsp; {/* Add small space */}
//                   <label>
//                     <input type="radio" name={`attendance-${res.id}`} value="Absent" onChange={() => setAttendanceOption("Absent")} />
//                     Absent
//                   </label>
//                 </td>
//                 <td><input type="text" value={remarkText[res.id] || ""} onChange={(e) => handleRemarkChange(res.id, e.target.value)} /></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <br /><br /><br /><br />
//     </>
//   );
// }
