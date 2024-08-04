import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Addp({ qrid }) {
  const [dbpath,setdbpath] = useState("http://localhost/test/")
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState("");
  let files;
  const onFileChange = (e) => {
    setImgstatus("1");
    files = document.getElementById("fileup").files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      setSelectedImage(event.target.result);
      console.log(files[0]);
    };
  };

  const [id1, setid1] = useState([]);
  const [Fid, setFid] = useState([]);

  const loadFid = async () => {
    const result = await axios.get(dbpath + "getpid.php");
    setFid(result.data.phpresult);
    console.log(result.data.phpresult);
    setId(result.data.phpresult[0]["id"]);
  };

  const isUserLoggedIn = Cookies.get("userLoggedIn");

  useEffect(() => {
    if (isUserLoggedIn !== "true") {
    } else {
      loadFid();
      console.log(qrid);
    }
  }, [isUserLoggedIn]);

  const [id, setId] = useState("");
  const [name, setName] = useState("-");
  const [desc, setDesc] = useState("-");
  const [price, setPrice] = useState("");
  const [hsncode, setHsncode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgstatus, setImgstatus] = useState("0");

  function handleClick() {}

  const onAdd = () => {
    if (price.length === 0) {
      alert("Price has been left blank!");
    } else if (name.length === 0) {
      alert("Name has been left blank!");
    } else {
      files = document.getElementById("fileup").files;
      console.log("files\n");
      console.log(files[0]["name"]);
      console.log("files\n");

      setid1(document.getElementById("id").value);
      console.log("ew" + hsncode);
      const url = dbpath + "add.php";
      let fData = new FormData();
      fData.append("id", id);
      fData.append("name", name);
      fData.append("Description", desc);
      fData.append("price", price);
      fData.append("image", files[0]);
      axios
        .post(url, fData)
        .then((response) => {})
        .catch((error) => {
          console.log(error.toJSON());
        });
      alert("Submitted");
      navigate("/UpdateP");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#f1ebff" }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          className="container shadow-lg"
          style={{
            border: "1px solid rgb(67,35,130)",
            padding: "50px",
            backgroundColor: "white",
          }}
        >
          <center>
            <h1
              className="sp1"
              style={{ fontWeight: "700", color: "rgb(67,35,130)" }}
            >
              Add Product
            </h1>
          </center>
          <br />

          <form>
            <div className="mb-3">
              <label
                className="form-label"
                style={{ color: "RGB(104 81 155)" }}
              >
                Product ID
              </label>
              {Fid.map((res) => (
                <input
                  type="number"
                  className="form-control"
                  id="id"
                  value={res.id}
                  disabled
                />
              ))}
            </div>
            <div className="mb-3">
              <label
                className="form-label"
                style={{ color: "RGB(104 81 155)" }}
              >
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                className="form-label"
                style={{ color: "RGB(104 81 155)" }}
              >
                Product Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                className="form-label me-3"
                style={{ color: "RGB(104 81 155)" }}
              >
                Upload Image
                <span style={{ color: "red", marginRight: "20px" }}>*</span>
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                onChange={onFileChange}
              />
            </div>

            <div className="mb-3">
              <label
                className="form-label"
                style={{ color: "RGB(104 81 155)" }}
              >
                Product Price<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                id="btn1"
                className="btn btn-primary"
                style={{
                  backgroundColor: "rgb(67,35,130)",
                  marginRight: "5px",
                  width: "90px",
                  height: "39px",
                }}
                onClick={() => {
                  onAdd();
                }}
              >
                Submit
              </button>
              <div>
                <Link className="nav-link" to="/Dashboard">
                  <button type="button" className="btn btn-outline-primary">
                    Dashboard
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
