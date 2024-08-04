import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Updategallery({ dbpath }) {
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const onAdd = () => {
    if (!id || !type || !image) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append('id', id);
    formData.append('type', type);
    formData.append('image', image);
    console.log('FormData:', formData); // Debugging: Log FormData to inspect its contents

    axios.post(`${dbpath}updategallery.php`, formData)
      .then(response => {
        if (response.data.message === 'Update successful') {
          alert('Update successful');
          // Redirect to another page if needed
          navigate("/Ugallery");
        } else if (response.data.error === 'ID not found') {
          alert('ID not found');
        } else {
          console.log(response.data);
          alert('Error updating the data');
        }
      })
      .catch(error => {
        console.error('Error updating gallery:', error);
        alert('An error occurred while updating the data');
      });
  };

  return (
    <>
      <div style={{ backgroundColor: '#f1ebff' }}>
        <br /><br /><br /><br /><br /><br />
        <div className="container shadow-lg" style={{ border: '1px solid rgb(67,35,130)', padding: '50px', backgroundColor: 'white' }}>
          <center>
            <h1 className="sp1" style={{ fontWeight: '700', color: 'rgb(67,35,130)' }}>Update the Gallery Image/Video</h1>
          </center>
          <br />
          <form>
            <div className="mb-3">
              <label className="form-label">Updated ID<span style={{ color: 'red' }}>*</span></label>
              <input type="text" className="form-control" value={id} onChange={(e) => setId(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Type<span style={{ color: 'red' }}>*</span></label>
              <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="" hidden>Choose...</option>
                <option value="Photos">Photos</option>
                {/* <option value="NewsPaper">NewsPaper Photos</option> */}
                <option value="Videos">Videos</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Updated image / Video<span style={{ color: 'red' }}>*</span></label>
              <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <br />
            <center>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button type="button" className="btn btn-primary" style={{ backgroundColor: 'rgb(67,35,130)', marginRight: '5px', width: '90px', height: '39px' }} onClick={onAdd}>Submit</button>
                <div>
                  <Link className="nav-link" to="/Dashboard"><button type="button" className="btn btn-outline-primary">Dashboard</button></Link>
                </div>
              </div>
            </center>
          </form>
        </div>
        <br /><br /><br />
      </div>
    </>
  );
}
