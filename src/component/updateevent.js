import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Updateevent({ dbpath }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const onAdd = () => {
    if (!id || !image) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('Description', description);
    formData.append('date', date);
    formData.append('location', location);
    formData.append('image', image);

    axios.post(`${dbpath}updateevent.php`, formData)
      .then(response => {
        if (response.data.message === 'Update successful') {
          alert('Update successful');
          // Redirect to another page if needed
          navigate("/aevent");
        } else if (response.data.error === 'ID not found') {
          alert('ID not found');
        } else {
          console.log(response.data);
          alert('Error updating the data');
        }
      })
      .catch(error => {
        console.error('Error updating event:', error);
        alert('An error occurred while updating the data');
      });
  };

  return (
    <>
      <div style={{ backgroundColor: '#f1ebff' }}>
        <br /><br /><br /><br /><br /><br />
        <div className="container shadow-lg" style={{ border: '1px solid rgb(67,35,130)', padding: '50px', backgroundColor: 'white' }}>
          <center>
            <h1 className="sp1" style={{ fontWeight: '700', color: 'rgb(67,35,130)' }}>Update Event</h1>
          </center>
          <br />
          <form>
            <div className="mb-3">
              <label className="form-label">Updated ID<span style={{ color: 'red' }}>*</span></label>
              <input type="text" className="form-control" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: 'RGB(104 81 155)' }}>Event Name</label>
              <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: 'RGB(104 81 155)' }}>Updated Description<span style={{ color: 'red' }}>*</span></label>
              <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: 'RGB(104 81 155)' }}>Event Date</label>
              <input type="date" className="form-control" onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: 'RGB(104 81 155)' }}>Event Location</label>
              <input type="text" className="form-control" onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Updated Image / Video<span style={{ color: 'red' }}>*</span></label>
              <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button type="button" id="btn1" className="btn btn-primary" style={{ backgroundColor: 'rgb(67,35,130)', marginRight: '5px', width: '90px', height: '39px' }} onClick={() => { onAdd() }}>Submit</button>
              <div>
                <Link className="nav-link" to="/Dashboard" ><button type="button" className="btn btn-outline-primary">Dashboard</button></Link>
              </div>
            </div>
          </form>
        </div>
        <br /><br /><br />
      </div>
    </>
  );
}
