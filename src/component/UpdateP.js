import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import './CSS/pr.css'
export default function UpdateP({ dbpath, cart, setBtnstatus }) {
  const [product, setproduct] = useState([]);
  const [qrid, setQrid] = useState("");
  const navigate = useNavigate();

  const loadproduct = async () => {
    try {
      // const result = await axios.get(`${dbpath}viewproduct.php`);
      const result = await axios.get(dbpath + "viewproduct.php");

      setproduct(result.data.phpresult || []); // Ensure that result.data.phpresult is an array
      console.log(result.data.phpresult);
    } catch (error) {
      console.error("Error loading product:", error);
    }
  };

  const isUserLoggedIn = Cookies.get("userLoggedIn");

  useEffect(() => {
    if (isUserLoggedIn !== "true") {
      navigate("/AdminLogin");
    } else {
      loadproduct();
    }
  }, [isUserLoggedIn]);

  const onDelete = async (id) => {
    const shouldDelete = window.confirm('Do you want to delete the data?');

    if (shouldDelete) {
      try {
        await axios.post(`${dbpath}deleteproduct.php`, { id });
        // Reload contacts after deletion
        loadproduct();
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };
  


 
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div>
        <br />
        <br />
        <center>
          <h1>All Products</h1>
          <br />
          <div style={{ display: 'flex', justifyContent: 'flex-start' , marginLeft:'70px' }}>
  <Link to="/addp" style={{ textDecoration: 'none' }}>
    <button type="button" className="btn-primary btn">
      Add New Product{' '}
      <span
        role="img"
        aria-label="product"
        style={{ color: 'green', display: 'inline-block' }}
      >
        🛍️
      </span>
    </button>
  </Link>
  <div className="ar" style={{marginLeft:'50px'}}>
  <Link to="/uproduct" style={{ textDecoration: "none" }}>
    <button type="button" className="btn btn-primary">
       Update Product 🔄
    </button>
  </Link>
  </div>
  <div className="ar" style={{marginLeft:'50px'}}>
  <Link to="/Dashboard" style={{ textDecoration: "none" }}>
    <button type="button" className="btn btn-primary">
    Dashboard 
    </button>
  </Link>
  </div>
  <br />
  <br /><br />
</div>

          <div className="scrollable-table" >
            <table
              className="table"
              style={{ width: "90%", backgroundColor: "white" }} 
            >
              <thead>
                <tr className="c1">
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>

                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              
              <tbody style={{ overflowY: "scroll", height: "400px" }}>
                {product.map((res) => (
                  <tr key={res.id}>
                    <td>{res.id}</td>
                    <td>{res.name}</td>
                    <td>{res.Description}</td>

                    <td>{res.price}</td>

                    <td>
                    <a
                          href={
                            "http://localhost/test/uploads/" + res.Image
                          }
                        >
                        <u>view</u>
                      </a>
                    </td>
           


                    <td>
  <button type="button" className="btn btn-primary">
    <span className="bi bi-trash" aria-hidden="true" onClick={() => onDelete(res.id)}></span>
  </button>
</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
