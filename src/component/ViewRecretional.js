import axios from 'axios';
import "./CSS/Dashboard.css"
import  {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Modal, Button, Form } from "react-bootstrap";
export default function ViewRecretional({dbpath}) {

    const [editingUser, setEditingUser] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        vca: "",
        name: "",
        fname: "",
        address: "",
        mobile: "",
        rphno: "",
        dob: "",
        dob: "",
        Gage: "",
        role: "",
        timing: "",
        joiningdate: "",
        validtill: ""
    });

    const [user, setUser] = useState([]);
    const loadUser = async () => {
        const result = await axios.get(dbpath+"viewrecretional.php");
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
            loadUser();
        }

        
    }, [isUserLoggedIn]);   
    const onDelete = async (id) => {
        try {
            const confirmDelete = window.confirm('Do you want to delete the data?');

            if (confirmDelete) {
                // Perform the deletion logic using axios.delete instead of axios.post
                await axios.delete(dbpath + `deleterecreational.php?id=${id}`);

                loadUser();
            }
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }; 

    const onEdit = (user) => {
        setEditingUser(user);
        setFormData(user);
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(name === "mobile" || name === "rphno") {
            if(/^\d{0,10}$/.test(value)) {
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

    const handleEditSubmit = async (e) => {
        e.preventDefault();
    
        const data = new FormData();
        console.log("formData:", formData);
    
        Object.keys(formData).forEach(key => {
            console.log(`${key}: ${formData[key]}`);
            data.append(key, formData[key]);
        });
    
        try {
            const response = await axios.post(`${dbpath}updateRecretional.php`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            console.log("Server Response:", response.data);
    
            if(response.data.status === "success") {
                loadUser();
                setEditingUser(null);
                setShowModal(false);
                navigate('/Dashboard');
            } else {
                alert("Recretional Data Updated Successfully");
                navigate('/Dashboard');
            }
        } catch (error) {
            console.log("Error updating data:", error);
            alert("An error occurred while updating the data. Please try again.");
        }
    };
    

    return (    
    <>
        <br></br><br></br>
        <p className='sp1' >Recretional</p>
        <br></br>
        <div className='button-adjust'>
        <Link className="nav-link" to="/Dashboard"><button type="button" class="btn btn-outline-primary">Dashboard</button></Link>
             <Link className="nav-link" to="/ViewCoaching"><button type="button" class="btn btn-outline-primary">Player</button></Link>
            <Link className="nav-link" to="/ViewRecretional"><button type="button" class="btn btn-outline-primary">Recreatioal</button></Link>
            <Link className="nav-link" to="/CoachData"><button type="button" class="btn btn-outline-primary">Coach</button></Link>
           {/*  <Link className="nav-link" to="/Dashboard"><button type="button" class="btn btn-outline-primary">Dashboard</button></Link>
            <Link className="nav-link" ><button type="button" class="btn btn-outline-primary">Update</button></Link>
            <Link className="nav-link" ><button type="button" class="btn btn-outline-primary">Delete</button></Link> */}
        </div>
        <br></br><br></br>
        <div className='table-responsiv'>
        <table class="table">
            <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">VCA ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Son/Daughter of</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact No.</th>
                  <th scope="col">Residential No.</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Age Group</th>
                  {/* <th scope="col">College </th> */}
                  <th scope="col">Role</th>
                  <th scope="col">Timing</th>
                  <th scope="col">Joining Date</th>
                  <th scope="col">Valid Till</th>
                  {/* <th scope="col">Timestamp </th> */}
                  <th scope="col">Actions </th>

                </tr>
            </thead>
            <tbody>
                {user.map((res)=>
                
                    <tr>
                        <td>{res.id}</td>
                        <td>{res.vca}</td>
                        <td>{res.name}</td>
                        <td>{res.fname}</td>
                        <td>{res.address}</td>
                        <td>{res.mobile}</td>
                        <td>{res.rphno}</td>    
                        <td>{res.dob}</td>
                        <td>{res.Gage}</td>
                        {/* <td>{res.clg}</td>  */}
                        <td>{res.role}</td> 

                        {/* <td>{res.sport}</td>               */}
                        <td>{res.timing}</td> 
                        <td>{res.joiningdate}</td> 
                        <td>{res.validtill}</td> 
                        {/* <td>{res.timestamp}</td>  */}
                        <td>
                            <button className="btn btn" onClick={() =>onEdit(res)}>
                                <i className="fas fa-pencil-alt"></i>
                            </button>

                            <button className='btn btn' onClick={() => onDelete(res.id)}>
                                <i className="fas fa-trash-alt"></i> 
                            </button>
                        </td>  
                    </tr>

                )}
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

