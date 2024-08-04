import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './CSS/Dashboard.css';

export default function Recreational({ dbpath }) {
  const [user, setUser] = useState([]);
  const [remarkText, setRemarkText] = useState(() => {
    const storedData = localStorage.getItem('remarkText');
    return storedData ? JSON.parse(storedData) : {};
  });
  const [attendanceOption, setAttendanceOption] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const loadUser = async () => {
    try {
      const result = await axios.get(dbpath + "viewrecretional.php");
      setUser(result.data.phpresult);
      console.log(result.data.phpresult);
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
  }, [isUserLoggedIn]);

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

  const onSubmit = () => {
    if (validateForm()) {
      alert("Attendance Submitted");
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <>
      <br /><br />
      <p className='sp1'>Recreational Attendance</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
        <Link className="nav-link" to="/Coaching" ><button type="button" className="btn btn-outline-primary">Coaching</button></Link>
        <Link className="nav-link" to="/Coach" ><button type="button" className="btn btn-outline-primary">Coach</button></Link>
        <Link className="nav-link" to="/dashboard" ><button type="button" className="btn btn-outline-primary">Dashboard</button></Link>
      </div>
      <br /><br />

      <div id="tablediv">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID&nbsp;</th>
              <th scope="col">Name</th>
              <th scope="col">Timing</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Present / Absent</th>
              <th scope="col">Matches Played</th>
              <th scope="col">Remark</th>
            </tr>
          </thead>
          <tbody>
            {user.map(res => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.timing}</td>
                <td>{res.mobile}</td>
                <td>
                  <label style={{ color: attendanceOption[res.id] === "Present" ? "blue" : "black" }}>
                    <input type="radio" name={`attendance-${res.id}`} value="Present" onChange={() => setAttendanceOption({ ...attendanceOption, [res.id]: 'Present' })} />
                    Present
                  </label>
                  &nbsp;&nbsp;&nbsp;
                  <label style={{ color: attendanceOption[res.id] === "Absent" ? "red" : "black" }}>
                    <input type="radio" name={`attendance-${res.id}`} value="Absent" onChange={() => setAttendanceOption({ ...attendanceOption, [res.id]: 'Absent' })} />
                    Absent
                  </label>
                  {formErrors[res.id] && <div className="error" style={{ color: 'red' }}>{formErrors[res.id]}</div>}
                </td>
                <td>
                  <input
                    type="number"
                    min={0}
                    value={remarkText[res.id]?.matchesPlayed || ""}
                    style={{ width: '70px' }}
                    onChange={(e) => handleRemarkChange(res.id, 'matchesPlayed', parseInt(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={remarkText[res.id]?.remark || ""}
                    onChange={(e) => handleRemarkChange(res.id, 'remark', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
        <button className="btn btn-outline-primary" onClick={onSubmit}>Submit</button>
      </div>

      <br /><br /><br /><br />
    </>
  );
}
