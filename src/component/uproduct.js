import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Uproduct({ dbpath }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null); // State to store image file
  const navigate = useNavigate();
  const isUserLoggedIn = Cookies.get('userLoggedIn');

  const onAdd = () => {
    if (id.length === 0) {
        alert("ID has been left blank!");
      }else if (name.length === 0) {
        alert("Name has been left blank!");
      } else if (description.length === 0) {
        alert("Description has been left blank!");
      } else if (price.length === 0) {
        alert("Price has been left blank!");
      } else if (!image) {
        alert("Image has been left blank!");
      } else{
    const url = dbpath + 'updateproduct.php';
    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    if (image) {
      formData.append('image', image);
    }

    axios.post(url, formData)
      .then(response => {
        if (response.data.message === 'Update successful') {
          alert('Update successful');
          navigate("/UpdateP");

        } else if (response.data.error === 'ID not found') {
          alert('QR ID not found');
        } else {
          console.log(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        alert('An error occurred while updating the data');
      });
   } };

  return (
    <>
      <div style={{ backgroundColor: '#f1ebff' }}>
        <br /><br /><br /><br /><br /><br />
        <div className="container shadow-lg" style={{ border: '1px solid rgb(67,35,130)', padding: '50px', backgroundColor: 'white' }}>
          <center>
            <h1 className="sp1" style={{ fontWeight: '700', color: 'rgb(67,35,130)' }}>Update the Product</h1>
          </center>
          <br />
          <form>
            <div className="mb-3">
              <label className="form-label" style={{ color: 'RGB(104 81 155)' }}>Updated ID<span style={{ color: 'red' }}>*</span></label>
              <input type="text" className="form-control" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: 'RGB(104 81 155)' }}>Updated Name<span style={{ color: 'red' }}>*</span></label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: 'RGB(104 81 155)' }}>Updated description<span style={{ color: 'red' }}>*</span></label>
              <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: 'RGB(104 81 155)' }}>Updated price<span style={{ color: 'red' }}>*</span></label>
              <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: 'RGB(104 81 155)' }}>Updated image<span style={{ color: 'red' }}>*</span></label>
              <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <br />
            <center>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
  <button type="button" id="btn1" className="btn btn-primary" style={{ backgroundColor: 'rgb(67,35,130)', marginRight: '5px', width:'90px', height:'39px' }} onClick={() => { onAdd() }}>Submit</button>
  <div>
    <Link className="nav-link" to="/Dashboard" ><button type="button" className="btn btn-outline-primary">Dashboard</button></Link>
  </div>
</div>            </center>
          </form>
        </div>
        <br></br><br></br><br></br>
      </div>
    </>
  );
}
