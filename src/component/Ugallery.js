import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./CSS/ur.css";
export default function Ugallery({ dbpath, cart, setBtnstatus }) {
  const [product, setproduct] = useState([]);
  const [qrid, setQrid] = useState("");
  const navigate = useNavigate();

  const loadproduct = async () => {
    try {
      // const result = await axios.get(`${dbpath}viewproduct.php`);
      const result = await axios.get(dbpath + "viewgallery.php");

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
    const shouldDelete = window.confirm("Do you want to delete the data?");

    if (shouldDelete) {
      try {
        await axios.post(`${dbpath}deletegallery.php`, { id });
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
          <h1>Gallery</h1>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "70px",
            }}
          >
            <Link to="/agallery" style={{ textDecoration: "none" }}>
              <button type="button" className="btn-primary btn">
                Add New Picture / Video{" "}
                <span
                  role="img"
                  aria-label="product"
                  style={{ color: "green", display: "inline-block" }}
                >
                  🖼️
                </span>
              </button>
            </Link>
            <div className="ar" style={{ marginLeft: "50px" }}>
              <Link to="/updategallery" style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary">
                  Update Picture / Video 📷
                </button>
              </Link>
            </div>
            <div className="ar" style={{ marginLeft: "50px" }}>
              <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary">
                  Dashboard
                </button>
              </Link>
            </div>
            <br />
            <br />
            <br />
          </div>

          <div className="scrollable-table">
            <table
              className="table"
              style={{ width: "90%", backgroundColor: "white" }}
            >
              <thead>
                <tr className="c1">
                  <th scope="col">ID</th>
                  <th scope="col">Type</th>

                  <th scope="col">Image / Video</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>

              <tbody style={{ overflowY: "scroll", height: "400px" }}>
                {product.map((res) => (
                  <tr key={res.id}>
                    <td>{res.id}</td>
                    <td>{res.Type}</td>

                    <td>
                      <a
                        href={
                          "http://localhost/test/ugallery/" +
                          res.Image
                        }
                      >
                        <u>view</u>
                      </a>
                    </td>

                    <td>
                      <button type="button" className="btn btn-primary">
                        <span
                          className="bi bi-trash"
                          aria-hidden="true"
                          onClick={() => onDelete(res.id)}
                        ></span>
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
