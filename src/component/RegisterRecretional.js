import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "./CSS/Register.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RegisterRecretional({ dbpath }) {
  const containerStyle = {
    width: "60%",
    marginLeft: "20%",
    backgroundColor: "white",
  };

  const navigate = useNavigate();
  const [rid, setRid] = useState([]);
  const [id, setid] = useState([]);
  function handleClick() {
    navigate("/Dashboard");
  }

  const loadRid = async () => {
    const result = await axios.get(dbpath + "getidreceipt.php");
    setRid(result.data.phpresult[0]["id"]);
    console.log(result.data.phpresult);
  };

  const [user, setUser] = useState([]);
  const loadUser = async () => {
    const result = await axios.get(dbpath + "getidr.php");
    setUser(result.data.phpresult);
    setid(result.data.phpresult[0]["id"]);
    console.log(result.data.phpresult);

    loadRid();
  };

  /*  const setReceipt = () => {
    const url = dbpath+'setReceipt.php';
    let fData = new FormData(); 
    fData.append('rid', rid);
    fData.append('id', id);
    fData.append('name', name);
    fData.append('time', time );
    fData.append('joiningDate', joiningDate);
    fData.append('amount', 1100);
    fData.append('for', 'Recretional');
    axios
      .post(url, fData)
      .then((response) => alert(response.data))
      .catch((error) => {
        console.log(error.toJSON());
      });   
  }
 */
  const isUserLoggedIn = Cookies.get("userLoggedIn");

  useEffect(() => {
    if (isUserLoggedIn !== "true") {
      navigate("/AdminLogin");
    } else {
      loadUser();
    }
  }, [isUserLoggedIn]);

  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [mobile, setMno] = useState("");
  const [address, setAddress] = useState("");
  const [rphno, setRphno] = useState("");
  const [dob, setDOB] = useState("");
  // New code below
  const [Gage, setGage] = useState("");
  const [vca, setvca] = useState("");
  const [validtill, setValidTill] = useState("");
  const [role, setrole] = useState("");

  //new code AR
  const [clg, setClg] = useState("");
  const [sport, setSport] = useState("");
  const [time, setTime] = useState("");
  const [joiningDate, setJoiningdate] = useState("");
  const [feestatus, setfeestatus] = useState("");

  const handleDateChange = (date) => {
    setJoiningdate(date);
  };

  const handleDateOfBirthChange = (date) => {
    setDOB(date);
  };

  const handleValidTillChange = (date) => {
    setValidTill(date);
  };

  const onRegister = () => {
    // alert("Register 😍\nName: "+name+"\nEmail: "+email+"\nMobile No: "+mno);

    if (joiningDate.length === 0) {
      alert("Joining Date has left Blank!");
    } else if (name.length === 0) {
      alert("Name has left Blank!");
    } else if (fname.length === 0) {
      alert("Son/Daughter's name has been left blank!");
    } else if (address.length === 0) {
      alert("Address has been left blank!");
    } else if (mobile.length === 0) {
      alert("Mobile number has been left blank!");
    } else if (dob.length === 0) {
      alert("Date of birth has been left blank!");
      // New code
    } else if (Gage.length === 0) {
      alert("Age Group  has been left blank!");
      // New code
    } else if (vca.length === 0) {
      alert("VCA ID  has been left blank!");
      // New code
    } else if (role.length === 0) {
      alert("Role has been left blank!");
    } else if (time.length === 0) {
      alert("Timing has been left blank!");
    } else {
      const url = dbpath + "rregister.php";
      let fData = new FormData();
      fData.append("vca", vca); //New Line Code
      fData.append("name", name);
      fData.append("fname", fname);
      fData.append("mobile", mobile);
      fData.append("address", address);
      fData.append("rphno", rphno);
      fData.append("dob", dob);
      fData.append("Gage", Gage); //New Line Code
      fData.append("validtill", validtill); // Updated state variable name

      fData.append("clg", clg);
      fData.append("sport", sport);
      fData.append("role", role);

      fData.append("timing", time);
      fData.append("joiningDate", joiningDate);
      fData.append("feestatus", feestatus);

      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => {
          console.log(error.toJSON());
        });
      /* setReceipt();  */
      handleClick();
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#222429" }}>
        <br />
        <br />
        <br />
        <br />
        <div
          className="container shadow-lg p-5 bg-body-tertiary rounded"
          style={containerStyle}
        >
          <center>
            <h3 className="sp1">Register (Recretional)</h3>
          </center>
          <br />
          <br />
          <form>
            <div className="mb-3">
              <label className="form-label">
                Date of Joining<span style={{ color: "red" }}>*</span>
              </label>
              {/* <input
                type="date"
                className="form-control"
                id="tdoj"
                onChange={(e) => setJoiningdate(e.target.value)}
              /> */}

              <DatePicker
                selected={joiningDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                id="joiningdate"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Registration Number<span style={{ color: "red" }}>*</span>
              </label>
              {user.map((res) => (
                <input
                  key={res.id}
                  type="number"
                  className="form-control"
                  id="trno"
                  value={res.id}
                  disabled
                />
              ))}
            </div>
            <div className="mb-3">
              <label className="form-label">
                VCA ID<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="vid"
                onChange={(e) => setvca(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Applicant's Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="tname"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Son/Daughter of<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="tfname"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Local Address<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="taddress"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Residential Phone No.</label>
              <input
                type="tel"
                className="form-control"
                pattern="\d{10}"
                id="tphno"
                onChange={(e) => setRphno(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Mobile Number<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                pattern="\d{10}"
                id="tmno"
                onChange={(e) => setMno(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Date of Birth<span style={{ color: "red" }}>*</span>
              </label>
              {/* <input
                type="date"
                className="form-control"
                id="tdob"
                onChange={(e) => setDOB(e.target.value)}
              /> */}
              <DatePicker
                selected={dob}
                onChange={handleDateOfBirthChange}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                id="tdob"
              />
            </div>
            {/* NEw Code of Age Group  */}
            <div className="mb-3">
              <label className="form-label">
                Age Group<span style={{ color: "red" }}>*</span>
              </label>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect01"
                  value={Gage}
                  onChange={(e) => setGage(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="Under 19">Under 19</option>
                  <option value="Under 17">Under 17</option>
                  <option value="Under 15">Under 15</option>
                  <option value="Under 13">Under 13</option>
                </select>
              </div>
            </div>
            {/* New Code above */}
            {/* New Code above */}
            <div className="mb-3">
              <label className="form-label">
                Valid Till<span style={{ color: "red" }}>*</span>
              </label>
              {/* <input
                type="date"
                className="form-control"
                id="tvt"
                onChange={(e) => setValidTill(e.target.value)}
              /> */}

              <DatePicker
                selected={validtill}
                onChange={handleValidTillChange}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                id="tvt"
              />
            </div>
            {/* <div className="mb-3">
            <label className="form-label">School/College (if any)</label>
            <input type="text" className="form-control" id="tclg" onChange={(e) => setClg(e.target.value)} />
          </div> */}
            {/* <div className="mb-3">
            <label className="form-label">Sport/Game Opted<span style={{color:'red'}}>*</span></label>
            <div className="input-group mb-3">
              <select className="form-select" id="inputGroupSelect01" value={sport} onChange={(e) => setSport(e.target.value)}>
                <option value="">Choose...</option>
                <option value="Cricket">Cricket</option>
              
              </select>
            </div>
          </div> */}

            <div className="mb-3">
              <label className="form-label">
                Timing Opted<span style={{ color: "red" }}>*</span>
              </label>
              <div className="timeflex">
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="" hidden>
                      Choose...
                    </option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    {/* <option value="">Choose...</option>
                  <option value="5 to 6 am">5 to 6 am</option>
                  <option value="6 to 7 am">6 to 7 am</option>
                  <option value="7 to 8 am">7 to 8 am</option>
                  <option value="8 to 9 am">8 to 9 am</option>
                  <option value="9 to 10 am">9 to 10 am</option>
                  <option value="10 to 11 am">10 to 11 am</option>
                  <option value="11 to 12 am">11 to 12 am</option>
                  <option value="12 to 1 pm">12 to 1 pm</option>
                  <option value="1 to 2 pm">1 to 2 pm</option>
                  <option value="2 to 3 pm">2 to 3 pm</option>
                  <option value="3 to 4 pm">3 to 4 pm</option>
                  <option value="4 to 5 pm">4 to 5 pm</option>
                  <option value="5 to 6 pm">5 to 6 pm</option>
                  <option value="6 to 7 pm">6 to 7 pm</option>
                  <option value="7 to 8 pm">7 to 8 pm</option>
                  <option value="8 to 9 pm">8 to 9 pm</option> */}
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Role<span style={{ color: "red" }}>*</span>
              </label>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect01"
                  value={role}
                  onChange={(e) => setrole(e.target.value)}
                >
                  <option value="" hidden>
                    Choose...
                  </option>
                  <option value="All Rounder">All Rounder</option>
                  <option value="Batsman">Batsman</option>
                  <option value="Bowler ">Bowler</option>
                  <option value="Bowler ">wk-Bat</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Payment Status<span style={{ color: "red" }}>*</span>
              </label>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect01"
                  value={feestatus}
                  onChange={(e) => setfeestatus(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="Paid">Completed</option>
                  <option value="UnPaid">Incomplete</option>
                  <option value="1st installment">1st Installment</option>
                  <option value="2nd installment">2nd Installment</option>
                  <option value="3rd installment">3rd Installment</option>
                </select>
              </div>
            </div>

            <br />
            <center>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onRegister}
              >
                Submit
              </button>
              &nbsp;&nbsp;&nbsp;
              <Link to="/dashboard">
                <button type="button" className="btn btn-primary">
                  Dashboard
                </button>
              </Link>
            </center>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
