
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// export default function Rcoach({ dbpath }) {
//   const [formErrors, setFormErrors] = useState({});
//   const [user, setUser] = useState([]);
//   const [remarkText, setRemarkText] = useState(() => {
//     const storedData = localStorage.getItem('remarkText');
//     return storedData ? JSON.parse(storedData) : {};
//   });
//   const [attendanceOption, setAttendanceOption] = useState({});

//   const loadUser = async () => {
//     try {
        // const result = await axios.get(dbpath + "viewcoach.php");
//         setUser(result.data.phpresult);
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
//   }, [isUserLoggedIn, navigate]);

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
//     alert('Printed the Attendance with Remark');
//   };
  
//   return (
//     <>
//       <br /><br />
//       <p className='sp1'>Coach Remark</p>
//       <div className="tab-content" style={{ padding: '20px', display: 'flex', justifyContent: 'space-around', }}>
//         <div id="tab-1" className="tab-pane fade show p-0 active">
//           <div className="" style={{ display: 'flex' }}>
//           <Link className="nav-link" to="/RCoaching"><button type="button" className="btn btn-outline-primary">Coaching</button></Link>
//         <Link className="nav-link" to="/RRecreational"><button type="button" className="btn btn-outline-primary">Recreational</button></Link>
//         <Link className="nav-link" to="/dashboard"><button type="button" className="btn btn-outline-primary">Dashboard</button></Link>
//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px', gap: '20px' }}>
//           <button className="btn btn-primary" onClick={onSubmit}style={{ height: '40px' }}>Print</button>
//         </div>
//       </div>
//       </div>
//             </div>

//       <br /><br />
//       <div id="tablediv">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">ID&nbsp;</th>
//               <th scope="col">Name</th>
//               <th scope="col">Present / Absent</th>

//               <th scope="col">Remark</th>
//             </tr>
//           </thead>
//           <tbody>
//             {user.map(res => (
//               <tr key={res.id}>
//                 <td>{res.id}</td>
//                 <td>{res.name}</td>
//                 <td>{res.attendanceOption}</td>
//                 <td>{res.remark}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
//           <button className="btn btn-outline-primary" onClick={onSubmit}>Submit</button>
//         </div> */}
//       </div>
//       <br /><br /><br /><br />
//     </>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// export default function Coaching({ dbpath }) {
//   const [formErrors, setFormErrors] = useState({});
//   const [user, setUser] = useState([]);
//   const [remarkText, setRemarkText] = useState(() => {
//     const storedData = localStorage.getItem('remarkText');
//     return storedData ? JSON.parse(storedData) : {};
//   });
//   const [attendanceOption, setAttendanceOption] = useState({});

//   const loadUser = async () => {
//     try {
//       const result = await axios.get(`${dbpath}view.php`);
//       setUser(result.data.phpresult);
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
//   }, [isUserLoggedIn, navigate]);

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

//   const onPrint = () => {
//     window.print(); // This triggers the browser's print functionality
//   };

//   return (
//     <>
//       <br /><br />
//       <p className='sp1'>Coaching Remark</p>
//       <div className="tab-content" style={{ padding: '20px', display: 'flex', justifyContent: 'space-around' }}>
//         <div id="tab-1" className="tab-pane fade show p-0 active">
//           <div className="" style={{ display: 'flex' }}>
//             <Link className="nav-link" to="/RRecreational"><button type="button" className="btn btn-outline-primary">Recreational</button></Link>
//             <Link className="nav-link" to="/RCoach"><button type="button" className="btn btn-outline-primary">Coach</button></Link>
//             <Link className="nav-link" to="/dashboard"><button type="button" className="btn btn-outline-primary">Dashboard</button></Link>
//             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px', gap: '20px' }}>
//               <button className="btn btn-primary" onClick={onPrint} style={{ height: '40px' }}>Print</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <br /><br />
//       <div id="tablediv">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">ID&nbsp;</th>
//               <th scope="col">Name</th>
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
//                 <td>{res.attendanceOption}</td>
//                 <td>{res.matchesPlayed}</td>
//                 <td>{res.remark}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Hidden structure for printing */}
//       <div id="print-content" style={{ display: 'none' }}>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Present / Absent</th>
//               <th>Matches Played</th>
//               <th>Remark</th>
//             </tr>
//           </thead>
//           <tbody>
//             {user.map(res => (
//               <tr key={res.id}>
//                 <td>{res.id}</td>
//                 <td>{res.name}</td>
//                 <td>{res.attendanceOption}</td>
//                 <td>{res.matchesPlayed}</td>
//                 <td>{res.remark}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <br /><br /><br /><br />
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function RCoach({ dbpath }) {
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState([]);
  const [remarkText, setRemarkText] = useState(() => {
    const storedData = localStorage.getItem('remarkText');
    return storedData ? JSON.parse(storedData) : {};
  });
  const [attendanceOption, setAttendanceOption] = useState({});

  const loadUser = async () => {
    try {
      const result = await axios.get(dbpath + "rcoach.php");
      setUser(result.data.phpresult);
    } catch (error) {
      console.error("Error loading user data:", error);
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
    setRemarkText(prevRemarkText => ({
      ...prevRemarkText,
      [rowId]: {
        ...prevRemarkText[rowId],
        [field]: value
      }
    }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    user.forEach(res => {
      if (!attendanceOption[res.id]) {
        errors[res.id] = 'Please fill in the detail';
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const onPrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('</head><body style="font-family: Arial, sans-serif;">');
    printWindow.document.write('<h1 style="text-align: center;">Coach Remark</h1>');
    printWindow.document.write('<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;" border="1">');
    printWindow.document.write('<thead><tr><th>ID</th><th>Name</th><th>Present / Absent</th><th>Remark</th><th>Date : Time</th></tr></thead><tbody>');

    user.forEach(res => {
      printWindow.document.write(`<tr style="border: 1px solid #ddd; padding: 8px; text-align: left;"><td>${res.id}</td><td>${res.name}</td><<td>${res.attendanceOption}</td><td>${res.remark}</td><td>${res.timestamp}</td></tr>`);
    });

    printWindow.document.write('</tbody></table>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      <br /><br />
      <p className='sp1'>Coach Remark</p>
      <div className="tab-content" style={{ padding: '20px', display: 'flex', justifyContent: 'space-around' }}>
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="" style={{ display: 'flex' }}>
            <Link className="nav-link" to="/Rcoaching"><button type="button" className="btn btn-outline-primary">Coaching</button></Link>
            <Link className="nav-link" to="/RRecreational"><button type="button" className="btn btn-outline-primary">Recreational</button></Link>
            <Link className="nav-link" to="/dashboard"><button type="button" className="btn btn-outline-primary">Dashboard</button></Link>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px', gap: '20px' }}>
              <button className="btn btn-primary" onClick={onPrint} style={{ height: '40px' }}>Print</button>
            </div>
          </div>
        </div>
      </div>

      <br /><br />
      <div id="tablediv">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Present / Absent</th>
              <th scope="col">Remark</th>
              <th scope="col">Date : Time</th>

            </tr>
          </thead>
          <tbody>
            {user.map(res => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.attendanceOption}</td>
                <td>{res.remark}</td>
                <td>{res.timestamp}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br /><br /><br /><br />
    </>
  );
}

