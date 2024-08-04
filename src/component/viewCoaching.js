// import axios from 'axios';
// import "./CSS/Dashboard.css"

// import { useState, useEffect } from 'react';

// import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import Coachdata from './Coachdatas';

// export default function ViewCoaching({ dbpath }) {

//     const [user, setUser] = useState([]);
//     const loadUser = async () => {
//         const result = await axios.get(dbpath + "view.php");
//         setUser(result.data.phpresult);
//         console.log(result.data.phpresult);
//     }
//     const navigate = useNavigate();
//     const isUserLoggedIn = Cookies.get('userLoggedIn');

//     useEffect(() => {
//         if (isUserLoggedIn !== 'true') {
//             navigate('/AdminLogin');
//         } else {
//             loadUser();
//         }

//     }, [isUserLoggedIn]);
//     const onDelete = async (id) => {
//         try {
//             const confirmDelete = window.confirm('Do you want to delete the data?');

//             if (confirmDelete) {
//                 // Perform the deletion logic using axios.delete instead of axios.post
//                 await axios.delete(dbpath + `deletecoaching.php?id=${id}`);

//                 loadUser();
//             }
//         } catch (error) {
//             console.error('Error deleting data:', error);
//         }
//     };

//     return (
//         <>
//             <br></br><br></br>
//             <p className='sp1'>Player (Begineer/Pro)</p>
//             <br></br>
//             <center>
//                 <div className='button-adjust'>
//                     <Link className="nav-link" to="/Dashboard"><button type="button" className="btn btn-outline-primary">Dashboard</button></Link>
//                     <Link className="nav-link" to="/ViewCoaching"><button type="button" className="btn btn-outline-primary">Player</button></Link>
//                     <Link className="nav-link" to="/ViewRecretional"><button type="button" className="btn btn-outline-primary">Recreatioal</button></Link>
//                     <Link className="nav-link" to="/CoachData"><button type="button" className="btn btn-outline-primary">Coach</button></Link>
//                 </div>
//             </center>
//             <br></br><br></br>
//             <div id="tablediv">
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">ID</th>
//                             <th scope="col">VCA ID</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Parents Name</th>
//                             <th scope="col">Address</th>
//                             <th scope="col">Mobile No.</th>
//                             <th scope="col">Residential Ph.No.</th>
//                             <th scope="col">Date of birth</th>
//                             <th scope="col">Age Group</th>
//                             <th scope="col">Role</th>
//                             <th scope="col">Timing</th>
//                             <th scope="col">Joining</th>
//                             <th scope="col">Valid Till</th>
//                             <th scope="col">Level</th>
//                             <th scope="col">Coach</th>
//                             <th scope="col">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {user.map((res) => (
//                             <tr key={res.id}>
//                                 <td>{res.id}</td>
//                                 <td>{res.vca}</td>
//                                 <td>{res.name}</td>
//                                 <td>{res.fname}</td>
//                                 <td>{res.address}</td>
//                                 <td>{res.mobile}</td>
//                                 <td>{res.rphno}</td>
//                                 <td>{res.dob}</td>
//                                 <td>{res.Gage}</td>
//                                 <td>{res.role}</td>

//                                 {/* <td>{res.sport}</td> */}
//                                 <td>{res.timing}</td>
//                                 <td>{res.joiningdate}</td>
//                                 <td>{res.validtill}</td>
//                                 <td>{res.level}</td>
//                                 <td>{res.coach}</td>
//                                 <td>
//                             <button className='btn btn' onClick={() => onDelete(res.id)}>
//                                 <i className="fas fa-trash-alt"></i>
//                             </button>
//                         </td>                            </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }

// import axios from 'axios';
// import "./CSS/Dashboard.css";
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// export default function ViewCoaching({ dbpath }) {
//     const [user, setUser] = useState([]);
//     const [filteredUser, setFilteredUser] = useState([]);
//     const [ageGroup, setAgeGroup] = useState('all');

//     const loadUser = async () => {
//         const result = await axios.get(dbpath + "view.php");
//         console.log(dbpath + "view.php");
//         setUser(result.data.phpresult);
//         setFilteredUser(result.data.phpresult); // Initially, show all users
//         console.log(result.data.phpresult);
//     }

//     const navigate = useNavigate();
//     const isUserLoggedIn = Cookies.get('userLoggedIn');

//     useEffect(() => {
//         if (isUserLoggedIn !== 'true') {
//             navigate('/AdminLogin');
//         } else {
//             loadUser();
//         }
//     }, [isUserLoggedIn]);

//     const onDelete = async (id) => {
//         try {
//             const confirmDelete = window.confirm('Do you want to delete the data?');

//             if (confirmDelete) {
//                 await axios.delete(dbpath + `deletecoaching.php?id=${id}`);
//                 loadUser();
//             }
//         } catch (error) {
//             console.error('Error deleting data:', error);
//         }
//     };

//     const calculateAge = (dob) => {
//         const birthDate = new Date(dob);
//         const today = new Date();
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const monthDifference = today.getMonth() - birthDate.getMonth();
//         if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//             age--;
//         }
//         return age;
//     };

//     const handleAgeGroupFilter = (group) => {
//         setAgeGroup(group);
//         if (group === 'all') {
//             setFilteredUser(user);
//         } else {
//             const filtered = user.filter(u => {
//                 const age = calculateAge(u.dob);
//                 if (group === 'Under 19') return age >= 19;
//                 if (group === 'Under 17') return age <= 17;
//                 if (group === 'Under 15') return age <= 15;
//                 return false;
//             });
//             setFilteredUser(filtered);
//         }
//     };

//     const getAgeGroup = (age) => {
//         if (age <= 15) return 'Under 15';
//         if (age <= 17) return 'Under 17';
//         if (age <= 19) return 'Under 19';
//         return 'Under 19';
//     };

//     return (
//         <>
//             <br></br><br></br>
//             <p className='sp1'>Player (Beginner/Pro)</p>
//             <br></br>
//             <center>
//                 <div className='button-adjust'>
//                     <Link className="nav-link" to="/Dashboard"><button type="button" className="btn btn-outline-primary">Dashboard</button></Link>
//                     <Link className="nav-link" to="/ViewCoaching"><button type="button" className="btn btn-outline-primary">Player</button></Link>
//                     <Link className="nav-link" to="/ViewRecretional"><button type="button" className="btn btn-outline-primary">Recreational</button></Link>
//                     <Link className="nav-link" to="/CoachData"><button type="button" className="btn btn-outline-primary">Coach</button></Link>
//                 </div>
//             </center>
//             <br></br><br></br>
//             <div className="filter-buttons" style={{marginLeft:"30px",gap:"10px",display:"flex",}} >
//                 <button style={{background:"white",color:"orange",borderRadius:"5px",border:"1px solid red"}}   onClick={() => handleAgeGroupFilter('all')}>All</button>
//                 <button   style={{background:"white",color:"orange",borderRadius:"5px",border:"1px solid red"}} onClick={() => handleAgeGroupFilter('Under 19')}>Under 19</button>
//                 <button style={{background:"white",color:"orange",borderRadius:"5px",border:"1px solid red"}} onClick={() => handleAgeGroupFilter('Under 17')}>Under 17</button>
//                 {/* <button style={{background:"white",color:"orange",borderRadius:"5px",border:"1px solid red"}}  onClick={() => handleAgeGroupFilter('Under 15')}>Under 15</button> */}
//             </div>
//             <br></br><br></br>
//             <div id="tablediv">
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">ID</th>
//                             <th scope="col">VCA ID</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Parents Name</th>
//                             <th scope="col">Address</th>
//                             <th scope="col">Mobile No.</th>
//                             <th scope="col">Residential Ph.No.</th>
//                             <th scope="col">Date of birth</th>
//                             <th scope="col">Age Group</th>
//                             <th scope="col">Role</th>
//                             <th scope="col">Timing</th>
//                             <th scope="col">Joining</th>
//                             <th scope="col">Valid Till</th>
//                             <th scope="col">Level</th>
//                             <th scope="col">Coach</th>
//                             <th scope="col">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredUser.map((res) => (
//                             <tr key={res.id}>
//                                 <td>{res.id}</td>
//                                 <td>{res.vca}</td>
//                                 <td>{res.name}</td>
//                                 <td>{res.fname}</td>
//                                 <td>{res.address}</td>
//                                 <td>{res.mobile}</td>
//                                 <td>{res.rphno}</td>
//                                 <td>{res.dob}</td>
//                                 <td>{getAgeGroup(calculateAge(res.dob))}</td>
//                                 <td>{res.role}</td>
//                                 <td>{res.timing}</td>
//                                 <td>{res.joiningdate}</td>
//                                 <td>{res.validtill}</td>
//                                 <td>{res.level}</td>
//                                 <td>{res.coach}</td>
//                                 <td>
//                                     <button className='btn btn' onClick={() => onDelete(res.id)}>
//                                         <i className="fas fa-trash-alt"></i>
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// }


















import axios from "axios";
import "./CSS/Dashboard.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Modal, Button, Form } from "react-bootstrap";

export default function ViewCoaching({ dbpath }) {
  const [user, setUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [ageGroup, setAgeGroup] = useState("all");
  const [editingUser, setEditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState("");

  const [coach, setCoach] = useState([]);

  const [formData, setFormData] = useState({
    id: "",
    vca: "",
    name: "",
    fname: "",
    address: "",
    mobile: "",
    rphno: "",
    dob: "",
    role: "",
    timing: "",
    joiningdate: "",
    validtill: "",
    level: "",
    coach: "",
    feestatus: "",
    Gage:''
  });

  const loadUser = async () => {
    try {
      const result = await axios.get(dbpath + "view.php");
      setUser(result.data.phpresult);
      setFilteredUser(result.data.phpresult); // Initially, show all users
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  const loadCoach = async () => {
    const result = await axios.get(dbpath + "viewcoach.php");
    setCoach(result.data.phpresult);
    console.log(result.data.phpresult);
  };

  const navigate = useNavigate();
  const isUserLoggedIn = Cookies.get("userLoggedIn");

  useEffect(() => {
    if (isUserLoggedIn !== "true") {
      navigate("/AdminLogin");
    } else {
      loadUser();
      loadCoach();
    }
  }, [isUserLoggedIn, navigate]);

  const onDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Do you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(dbpath + `deletecoaching.php?id=${id}`);
        loadUser();
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const onEdit = (user) => {
    setEditingUser(user);
    setFormData(user);
    setShowModal(true); // Show the modal
  };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     console.log("formData:", formData);

//     // Check if formData is correctly populated
//     for (const key in formData) {
//         console.log(`${key}: ${formData[key]}`);
//         data.append(key, formData[key]);
//     }

//     try {
//         const response = await axios.post(dbpath + "updateplayer.php", data, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//         });

//         console.log("Server Response:", response.data);

//         // Check if response has a status field
//         if (response.data.status === "success") {
//             loadUser();
//             setEditingUser(null);
//             setShowModal(false);
//             // alert(response.data.message);
            
//             alert("Error in Updating Player Data");
//           } else {
//             // alert(response.data.message);
//             alert("Player Data Updated Successfully");
//           }
//           navigate('/Dashboard')
//     } catch (error) {
//         console.error("Error updating data:", error);
//         alert("An error occurred while updating the data. Please try again.");
//     }
// };



const handleEditSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  console.log("formData:", formData);

  // Populate FormData with formData values
  Object.keys(formData).forEach(key => {
      console.log(`${key}: ${formData[key]}`);
      data.append(key, formData[key]);
  });

  try {
      const response = await axios.post(`${dbpath}updateplayer.php`, data, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      });

      console.log("Server Response:", response.data);

      if (response.data.status === "success") {
          // alert("Player Data Updated Successfully");
          // Reload user data and close the modal
          loadUser();
          setEditingUser(null);
          setShowModal(false);
          navigate('/Dashboard');
        } else {
          alert("Player Data Updated Successfully");
          navigate('/Dashboard');
          // alert(response.data.message || "Error in Updating Player Data");
      }
  } catch (error) {
      console.error("Error updating data:", error);
      alert("An error occurred while updating the data. Please try again.");
  }
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validation for 10-digit numbers
    if (name === "mobile" || name === "rphno") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const ageGroupConditions = {
    "all": () => true,
    "Under 19": (age) => age >= 19,
    "Under 17": (age) => age > 15 && age < 17,
    "Under 15": (age) => age <= 15
  };
  
  const handleAgeGroupFilter = (group) => {
    setAgeGroup(group);
    const filterCondition = ageGroupConditions[group] || ageGroupConditions["all"];
    setFilteredUser(user.filter(u => filterCondition(calculateAge(u.dob))));
  };
  
  const getAgeGroup = (age) => {
    if (age <= 15) return "Under 15";
    if (age>15 && age < 17) return "Under 17";
    if (age <= 19) return "Under 19";
    return "Under 19";
  };
  

  return (
    <>
      <br />
      <br />
      <p className="sp1">Player (Beginner/Pro)</p>
      <br />
      <center>
        <div className="button-adjust">
          <Link className="nav-link" to="/Dashboard">
            <button type="button" className="btn btn-outline-primary">
              Dashboard
            </button>
          </Link>
          <Link className="nav-link" to="/ViewCoaching">
            <button type="button" className="btn btn-outline-primary">
              Player
            </button>
          </Link>
          <Link className="nav-link" to="/ViewRecretional">
            <button type="button" className="btn btn-outline-primary">
              Recreational
            </button>
          </Link>
          <Link className="nav-link" to="/CoachData">
            <button type="button" className="btn btn-outline-primary">
              Coach
            </button>
          </Link>
        </div>
      </center>
      <br />
      <br />
      <div
        className="filter-buttons"
        style={{ marginLeft: "30px", gap: "10px", display: "flex" }}
      >
        <button
          style={{
            background: "white",
            color: "orange",
            borderRadius: "5px",
            border: "1px solid red",
          }}
          onClick={() => handleAgeGroupFilter("all")}
        >
          All
        </button>
        <button
          style={{
            background: "white",
            color: "orange",
            borderRadius: "5px",
            border: "1px solid red",
          }}
          onClick={() => handleAgeGroupFilter("Under 19")}
        >
          Under 19
        </button>
        {/* <button
          style={{
            background: "white",
            color: "orange",
            borderRadius: "5px",
            border: "1px solid red",
          }}
          onClick={() => handleAgeGroupFilter("Under 17")}
        >
          Under 17
        </button> */}
        <button
          style={{
            background: "white",
            color: "orange",
            borderRadius: "5px",
            border: "1px solid red",
          }}
          onClick={() => handleAgeGroupFilter("Under 15")}
        >
          Under 15
        </button>
      </div>
      <br />
      <br />
      <div id="tablediv">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">VCA ID</th>
              <th scope="col">Name</th>
              <th scope="col">Parent's Name</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Residential Ph.No.</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Age Group</th>
              <th scope="col">Role</th>
              <th scope="col">Timing</th>
              <th scope="col">Joining Date</th>
              <th scope="col">Valid Till</th>
              <th scope="col">Level</th>
              <th scope="col">Coach</th>
              <th scope="col">Fee Status</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredUser.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.vca}</td>
                <td>{data.name}</td>
                <td>{data.fname}</td>
                <td>{data.address}</td>
                <td>{data.mobile}</td>
                <td>{data.rphno}</td>
                <td>{data.dob}</td>
                <td>{getAgeGroup(calculateAge(data.dob))}</td>
                <td>{data.role}</td>
                <td>{data.timing}</td>
                <td>{data.joiningdate}</td>
                <td>{data.validtill}</td>
                <td>{data.level}</td>
                <td>{data.coach}</td>
                <td>{data.feestatus}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => onEdit(data)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingUser && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEditSubmit}>
              <Form.Group controlId="id">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="vca">
                <Form.Label>VCA</Form.Label>
                <Form.Control
                  type="text"
                  name="vca"
                  value={formData.vca}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="fname">
                <Form.Label>Parent's Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="mobile">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="rphno">
                <Form.Label>Residential Ph. No.</Form.Label>
                <Form.Control
                  type="text"
                  name="rphno"
                  value={formData.rphno}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* <Form.Group controlId="Gage">
                <Form.Label>
                  Age Group<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="Gage"
                  value={formData.Gage}
                  onChange={(e) =>
                    setFormData({ ...formData, Gage: e.target.value })
                  }
                >
                  <option value="" hidden>
                    Choose...
                  </option>
                  <option value="Under 19">Under 19</option>
                  <option value="Under 17">Under 17</option>
                  <option value="Under 15">Under 15</option>
                  <option value="Under 13">Under 13</option>
                </Form.Control>
              </Form.Group> */}

              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as="select"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="" hidden>
                    Choose...
                  </option>
                  <option value="All Rounder">All Rounder</option>
                  <option value="Batsman">Batsman</option>
                  <option value="Bowler">Bowler</option>
                  <option value="Bat-wk">wk-Bat</option>
                </Form.Control>
              </Form.Group>

              {/* <Form.Group controlId="timing">
                <Form.Label>Timing</Form.Label>
                <Form.Control
                  type="text"
                  name="timing"
                  value={formData.timing}
                  onChange={handleInputChange}
                />
              </Form.Group> */}

              <Form.Group controlId="joiningdate">
                <Form.Label>Joining Date</Form.Label>
                <Form.Control
                  type="date"
                  name="joiningdate"
                  value={formData.joiningdate}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="validtill">
                <Form.Label>Valid Till</Form.Label>
                <Form.Control
                  type="date"
                  name="validtill"
                  value={formData.validtill}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="timing">
                <Form.Label>
                  Timing Opted<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="timing"
                  value={formData.timing}
                  onChange={handleInputChange}
                >
                  <option value="" hidden>
                    Choose...
                  </option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="level">
                <Form.Label>Experience Level</Form.Label>
                <Form.Control
                  as="select"
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                >
                  <option value="" hidden>
                    Choose...
                  </option>
                  <option value="Beginner">Beginner</option>
                  <option value="Professional">Professional</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="coach">
                <Form.Label>Coach</Form.Label>
                <Form.Control
                  as="select"
                  name="coach"
                  value={formData.coach}
                  onChange={handleInputChange}
                >
                  {coach.map((coachData) => (
                    <option key={coachData.id} value={coachData.name}>
                      {coachData.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="feestatus">
                <Form.Label>Payment Status</Form.Label>
                <Form.Control
                  as="select"
                  name="feestatus"
                  value={formData.feestatus}
                  onChange={handleInputChange}
                >
                  <option value="">Choose...</option>
                  <option value="Paid">Completed</option>
                  <option value="UnPaid">Incomplete</option>
                  <option value="1st installment">1st Installment</option>
                  <option value="2nd installment">2nd Installment</option>
                  <option value="3rd installment">3rd Installment</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" style={{marginTop:"20px"}}>
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}
