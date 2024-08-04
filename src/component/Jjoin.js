import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Join({ dbpath }) {
  const [join, setJoin] = useState([]);
  const navigate = useNavigate();
  const isUserLoggedIn = Cookies.get('userLoggedIn');

  const loadJoins = async () => {
    try {
      const result = await axios.get(`${dbpath}join.php`);
      setJoin(result.data.phpresult);
    } catch (error) {
      console.error("Error loading join data:", error);
    }
  };

  useEffect(() => {
    if (isUserLoggedIn !== 'true') {
      navigate('/AdminLogin');
    } else {
      loadJoins();
    }
  }, [isUserLoggedIn, navigate]);

  const onDelete = async (id) => {
    const shouldDelete = window.confirm('Do you want to delete the data?');

    if (shouldDelete) {
      try {
        await axios.post(`${dbpath}deletejoin.php`, { id });
        // Reload contacts after deletion
        loadJoins();
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const onPrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('</head><body style="font-family: Arial, sans-serif;">');
    printWindow.document.write('<h1 style="text-align: center;">Join Us List</h1>');
    printWindow.document.write('<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;" border="1">');
    printWindow.document.write('<thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Mobile No.</th><th>Age</th><th>Gender</th><th>Date : Time</th><th>Action</th></tr></thead><tbody>');

    join.forEach(joinItem => {
      printWindow.document.write(`<tr style="border: 1px solid #ddd; padding: 8px; text-align: left;">
        <td>${joinItem.id}</td>
        <td>${joinItem.name}</td>
        <td>${joinItem.email}</td>
        <td>${joinItem.mobile}</td>
        <td>${joinItem.age}</td>
        <td>${joinItem.gender}</td>
        <td>${joinItem.timestamp}</td>
        <td><button class='btn btn-outline-primary' onClick={() => onDelete(joinItem.id)}>Delete</button></td>
      </tr>`);
    });

    printWindow.document.write('</tbody></table>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      <br /><br />
      <p className='sp1'>Join Us</p>
      <div className="tab-content" style={{ padding: '20px', display: 'flex', justifyContent: 'space-around' }}>
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="" style={{ display: 'flex' }}>
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
              <th scope="col">Email</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              {/* <th scope="col">Date : Time</th> */}
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {join.map(joinItem => (
              <tr key={joinItem.id}>
                <td>{joinItem.id}</td>
                <td>{joinItem.name}</td>
                <td>{joinItem.email}</td>
                <td>{joinItem.mobile}</td>
                <td>{joinItem.age}</td>
                <td>{joinItem.gender}</td>
                {/* <td>{joinItem.timestamp}</td> */}
                <td><button className='btn btn-outline-primary' onClick={() => onDelete(joinItem.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br /><br /><br /><br />
    </>
  );
}
