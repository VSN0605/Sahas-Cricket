// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// export default function Contact({ dbpath }) {
//   const [contacts, setContacts] = useState([]);
//   const navigate = useNavigate();
//   const isUserLoggedIn = Cookies.get('userLoggedIn');

//   const loadContacts = async () => {
//     try {
//       const result = await axios.get(dbpath + "contact_us.php");
//       setContacts(result.data.phpresult);
//     } catch (error) {
//       console.error("Error loading contact data:", error);
//     }
//   };

//   useEffect(() => {
//     if (isUserLoggedIn !== 'true') {
//       navigate('/AdminLogin');
//     } else {
//       loadContacts();
//     }
//   }, [isUserLoggedIn, navigate]);

//   const onPrint = () => {
//     const printWindow = window.open('', '_blank');
//     printWindow.document.write('<html><head><title>Print</title>');
//     printWindow.document.write('</head><body style="font-family: Arial, sans-serif;">');
//     printWindow.document.write('<h1 style="text-align: center;">Contact List</h1>');
//     printWindow.document.write('<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;" border="1">');
//     printWindow.document.write('<thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Message</th><th>Date : Time</th></tr></thead><tbody>');

//     contacts.forEach(contact => {
//       printWindow.document.write(`<tr style="border: 1px solid #ddd; padding: 8px; text-align: left;">
//         <td>${contact.id}</td>
//         <td>${contact.name}</td>
//         <td>${contact.email}</td>
//         <td>${contact.msg}</td>
//         <td>${contact.timestamp}</td>
//       </tr>`);
//     });

//     printWindow.document.write('</tbody></table>');
//     printWindow.document.write('</body></html>');
//     printWindow.document.close();
//     printWindow.print();
//   };

//   return (
//     <>
//       <br /><br />
//       <p className='sp1'>Contact Us</p>
//       <div className="tab-content" style={{ padding: '20px', display: 'flex', justifyContent: 'space-around' }}>
//         <div id="tab-1" className="tab-pane fade show p-0 active">
//           <div className="" style={{ display: 'flex' }}>
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
//               <th scope="col">ID</th>
//               <th scope="col">Name</th>
//               <th scope="col">Email</th>
//               <th scope="col">Message</th>
//               <th scope="col">Date : Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.map(contact => (
//               <tr key={contact.id}>
//                 <td>{contact.id}</td>
//                 <td>{contact.name}</td>
//                 <td>{contact.email}</td>
//                 <td>{contact.msg}</td>
//                 <td>{contact.timestamp}</td>
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

export default function Contact({ dbpath }) {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();
  const isUserLoggedIn = Cookies.get('userLoggedIn');

  const loadContacts = async () => {
    try {
      const result = await axios.get(dbpath + "contact_us.php");
      setContacts(result.data.phpresult);
    } catch (error) {
      console.error("Error loading contact data:", error);
    }
  };

  useEffect(() => {
    if (isUserLoggedIn !== 'true') {
      navigate('/AdminLogin');
    } else {
      loadContacts();
    }
  }, [isUserLoggedIn, navigate]);

  const onDelete = async (id) => {
    try {
      alert('Do you Want to delet the data')

      await axios.post(dbpath + "Dcontact.php", { id });

      // Reload contacts after deletion
      loadContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const onPrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('</head><body style="font-family: Arial, sans-serif;">');
    printWindow.document.write('<h1 style="text-align: center;">Contact List</h1>');
    printWindow.document.write('<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;" border="1">');
    printWindow.document.write('<thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Message</th><th>Date : Time</th><th>Action</th></tr></thead><tbody>');

    contacts.forEach(contact => {
      printWindow.document.write(`<tr style="border: 1px solid #ddd; padding: 8px; text-align: left;">
        <td>${contact.id}</td>
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.msg}</td>
        <td>${contact.timestamp}</td>
        <td><button onClick={() => onDelete(contact.id)}>Delete</button></td>
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
      <p className='sp1'>Contact Us</p>
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
              <th scope="col">Message</th>
              <th scope="col">Date : Time</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.msg}</td>
                <td>{contact.timestamp}</td>
                <td><button className='btn btn-outline-primary' onClick={() => onDelete(contact.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br /><br /><br /><br />
    </>
  );
}

