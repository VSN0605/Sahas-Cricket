import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { get, set } from "react-hook-form";

export default function GenerateInvoice({ dbpath }) {
  const [user, setUser] = useState([]);
  const [type, steType] = useState([]);
  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [vca, setvca] = useState([]);

  const [admId, setAdmId] = useState(false);

  const [time, setTime] = useState([]);
  const [for1, setFor1] = useState([]);
  const [ProspectusFee, setProspectusFee] = useState(["0"]);
  const [RegistrationFee, setRegistrationFee] = useState(["0"]);
  const [CoachingFee, setCoachingFee] = useState(["0"]);
  const [RecreatioalFee, setRecreatioalFee] = useState(["0"]);
  const [MaintanenceFee, setMaintanenceFee] = useState(["0"]);
  const [ActiviyFee, setActiviyFee] = useState(["0"]);
  const [UniformFee, setUniformFee] = useState(["0"]);
  const [SportFee, setSportFee] = useState(["0"]);
  const [OtherFee, setOtherFee] = useState(["0"]);

  const [status, setstatus] = useState([""]);
  const [Alreadypaid, setAlreadypaid] = useState(["0"]); //NEw line

  const [validTill, setValidTill] = useState(["0"]);
  const [upValidTill, setUpValidTill] = useState([]);
  const [joiningDate, setJoiningDte] = useState([]);
  const [feeTotal, setFeeTotal] = useState([]);
  const [rid, setRId] = useState([]);
  const [pmode, setPmode] = useState(["Select"]);
  const updatedStatus = feeTotal === 0 ? "Incomplete" : "Paid";

  const loadRid = async () => {
    const result = await axios.get(dbpath + "getidreceipt.php");
    setRId(parseInt(result.data.phpresult[0]["id"]) + parseInt("1"));
    document.getElementById("iid").innerHTML = parseInt(
      result.data.phpresult[0]["id"]
    );
    document.getElementById("iidp").innerHTML = parseInt(
      result.data.phpresult[0]["id"]
    );

    // document.getElementById("vca").innerHTML = result.data.phpresult[0]['vca'];

    console.log(result.data.phpresult);
  };

  const loadRecreational = async () => {
    try {
      const result = await axios.get(dbpath + "getr.php?id=" + id);
      setUser(result.data.phpresult);
      console.log(result.data.phpresult);

      // Set values and update HTML elements
      document.getElementById("name").innerHTML =
        result.data.phpresult[0]["name"];
      setName(result.data.phpresult[0]["name"]);
      document.getElementById("for").innerHTML = type;
      document.getElementById("time").innerHTML =
        result.data.phpresult[0]["timing"];
      setTime(result.data.phpresult[0]["timing"]);
      document.getElementById("timestamp").innerHTML =
        result.data.phpresult[0]["timestamp"];

      // New code here
      // document.getElementById("vca").innerHTML = result.data.phpresult[0]['vca'];
      // setvca(result.data.phpresult[0]['vca']);
      // document.getElementById("id").innerHTML = result.data.phpresult[0]['id'];
      setvca(result.data.phpresult[0]["id"]);
      setAdmId(!admId);

      document.getElementById("jdate").innerHTML =
        result.data.phpresult[0]["joiningdate"];
      setJoiningDte(result.data.phpresult[0]["joiningdate"]);
      setValidTill(result.data.phpresult[0]["validtill"]);

      // For print div
      document.getElementById("namep").innerHTML =
        result.data.phpresult[0]["name"];
      document.getElementById("forp").innerHTML = type;
      document.getElementById("timep").innerHTML =
        result.data.phpresult[0]["timing"];
      document.getElementById("timestamp").innerHTML =
        result.data.phpresult[0]["timestamp"];
      document.getElementById("idp").innerHTML = result.data.phpresult[0]["id"]; // Use a different ID for print div

      document.getElementById("jdatep").innerHTML =
        result.data.phpresult[0]["joiningdate"];
      setJoiningDte(result.data.phpresult[0]["joiningdate"]);
      calcValidTill(
        result.data.phpresult[0]["joiningdate"],
        result.data.phpresult[0]["validtill"]
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Handle specific error code, e.g., data not found
        alert("Data not found. Please check Type and ID.");
      } else {
        // Handle other errors or don't show alert for valid data
        console.error("An error occurred:", error);
      }
    }
  };

  const loadCoching = async () => {
    try {
      const result = await axios.get(dbpath + "getrcoaching.php?id=" + id);
      setUser(result.data.phpresult);
      console.log(result.data.phpresult);

      document.getElementById("name").innerHTML =
        result.data.phpresult[0]["name"];
      setName(result.data.phpresult[0]["name"]);
      document.getElementById("for").innerHTML = type;
      document.getElementById("time").innerHTML =
        result.data.phpresult[0]["timing"];
      setTime(result.data.phpresult[0]["timing"]);
      document.getElementById("timestamp").innerHTML =
        result.data.phpresult[0]["timestamp"];
      document.getElementById("jdate").innerHTML =
        result.data.phpresult[0]["joiningdate"];
      //New Code here
      // document.getElementById("id").innerHTML = result.data.phpresult[0]['id'];
      setvca(result.data.phpresult[0]["id"]);
      setAdmId(!admId);

      setJoiningDte(result.data.phpresult[0]["name"]);
      setValidTill(result.data.phpresult[0]["validtill"]);

      /* for print div */

      document.getElementById("namep").innerHTML =
        result.data.phpresult[0]["name"];
      document.getElementById("forp").innerHTML = type;
      document.getElementById("timep").innerHTML =
        result.data.phpresult[0]["timing"];
      document.getElementById("timestampp").innerHTML =
        result.data.phpresult[0]["timestamp"];
      // document.getElementById("iid").innerHTML = result.data.phpresult[0]['id'];
      // document.getElementById("id").innerHTML = result.data.phpresult[0]['id'];
      document.getElementById("jdatep").innerHTML =
        result.data.phpresult[0]["joiningdate"];

      setJoiningDte(result.data.phpresult[0]["joiningdate"]);
      calcValidTill(
        result.data.phpresult[0]["joiningdate"],
        result.data.phpresult[0]["validtill"]
      );
    } catch (error) {
      alert("Please Enter Correct Type and ID");
      console.error("Error loading coaching data:", error);
    }
  };

  useEffect(() => {
    loadRid();
  }, []);

  useEffect(() => {
    setAdmId(false);
  }, [type]);
  useEffect(() => {
    setAdmId(false);
  }, [id]);

  console.log(admId);

  const calcValidTill = (joiningDate, validTill) => {
    if (validTill.includes("-")) {
      const date = new Date(validTill);

      date.setDate(date.getDate() + 30);

      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;

      setUpValidTill(`${year}-${month}-${day}`);
      document.getElementById("vtill").value = year + "-" + month + "-" + day;
      document.getElementById("vtillp").innerHTML =
        year + "-" + month + "-" + day;
    } else {
      const date = new Date(joiningDate);

      date.setDate(date.getDate() + 30);

      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;

      setUpValidTill(`${year}-${month}-${day}`);
      document.getElementById("vtill").value = year + "-" + month + "-" + day;
      document.getElementById("vtillp").innerHTML =
        year + "-" + month + "-" + day;
    }
  };

  const calcTotal = () => {
    setFeeTotal(
      parseInt(OtherFee) +
        parseInt(SportFee) +
        parseInt(UniformFee) +
        parseInt(ActiviyFee) +
        parseInt(MaintanenceFee) +
        parseInt(RecreatioalFee) +
        parseInt(CoachingFee) +
        parseInt(RegistrationFee) +
        parseInt(ProspectusFee) -
        parseInt(Alreadypaid)
    );

    document.getElementById("feeTotal").innerHTML =
      parseInt(OtherFee) +
      parseInt(SportFee) +
      parseInt(UniformFee) +
      parseInt(ActiviyFee) +
      parseInt(MaintanenceFee) +
      parseInt(RecreatioalFee) +
      parseInt(CoachingFee) +
      parseInt(RegistrationFee) +
      parseInt(ProspectusFee) -
      parseInt(Alreadypaid);

    document.getElementById("feetotalp").innerHTML =
      parseInt(OtherFee) +
      parseInt(SportFee) +
      parseInt(UniformFee) +
      parseInt(ActiviyFee) +
      parseInt(MaintanenceFee) +
      parseInt(RecreatioalFee) +
      parseInt(CoachingFee) +
      parseInt(RegistrationFee) +
      parseInt(ProspectusFee) -
      parseInt(Alreadypaid);

    const newStatus = feeTotal === 0 ? "Incomplete" : "Paid";
    setstatus(newStatus);
  };

  const fetchData = () => {
    if (!type || !id) {
      alert("Type or ID is missing!");
    } else {
      if (type === "Coaching") {
        loadCoching();
      } else if (type === "Recreational") {
        loadRecreational();
      } else {
        alert(
          'Please Enter Correct Type (either "Coaching" or "Recreational")'
        );
        return; // Stop execution if type is neither "Coaching" nor "Recreational"
      }
    }
  };

  function updateDatabase() {
    const url = dbpath + "setReceipt.php";
    let fData = new FormData();
    fData.append("rid", rid);
    fData.append("id", id);
    fData.append("name", name);
    fData.append("time", time);
    fData.append("joiningDate", joiningDate);
    fData.append("amount", feeTotal);
    fData.append("for", type);
    fData.append("validTill", upValidTill);
    fData.append("ProspectusFee", ProspectusFee);
    fData.append("RegistrationFee", RegistrationFee);
    fData.append("CoachingFee", CoachingFee);
    fData.append("RecreatioalFee", RecreatioalFee);
    fData.append("MaintanenceFee", MaintanenceFee);
    fData.append("ActiviyFee", ActiviyFee);
    fData.append("UniformFee", UniformFee);
    fData.append("SportFee", SportFee);
    fData.append("OtherFee", OtherFee);
    fData.append("Alreadypaid", Alreadypaid);
    const updatedStatus = feeTotal === 0 ? "Incomplete" : "Paid";

    axios
      .post(url, fData)
      .then((response) => alert(response.data))
      .catch((error) => {
        console.log(error.toJSON());
      });
  }

  function printDiv() {
    document.getElementById("value1").innerHTML = ProspectusFee;
    document.getElementById("value2").innerHTML = RegistrationFee;
    document.getElementById("value3").innerHTML = CoachingFee;
    document.getElementById("value4").innerHTML = RecreatioalFee;
    document.getElementById("value5").innerHTML = MaintanenceFee;
    document.getElementById("value6").innerHTML = ActiviyFee;
    document.getElementById("value7").innerHTML = UniformFee;
    document.getElementById("value8").innerHTML = SportFee;
    document.getElementById("value9").innerHTML = OtherFee;
    document.getElementById("value10").innerHTML = Alreadypaid;
    document.getElementById("value11").innerHTML = status;

    document.getElementById("vtillp").innerHTML = upValidTill;
    document.getElementById("pmodep").innerHTML = pmode;

    updateDatabase();

    var divContents = document.getElementById("receipt_div1").innerHTML;
    var a = window.open("", "", "height=800, width=800");

    a.document.write("<html>");
    a.document.write("<head>");
    a.document.write("</head>");
    a.document.write("<body>");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    a.print();
  }

  const [showPopup, setShowPopup] = useState(false);

  const handlePaymentMethodChange = (e) => {
    const selectedOption = e.target.value;
    setPmode(selectedOption);
    if (selectedOption === "Online") {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const hidePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <span style={{}}>
          <b>Type</b> :&nbsp;
          <select
            id="cars"
            name="cars"
            value={type}
            onChange={(e) => steType(e.target.value)}
          >
            <option>- Select -</option>
            <option value="Coaching">Player</option>
            <option value="Recreational">Recreatioal</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp; <b>Id</b> :{" "}
          <input
            type="text"
            id="taddress"
            style={{ width: "120px", marginTop: "-20px" }}
            onChange={(e) => setId(e.target.value)}
          />
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <button type="button" class="btn btn-primary" onClick={fetchData}>
          Fetch Data
        </button>{" "}
      </center>
      <br></br>
      <div id="receipt_div">
        <div
          className="receipt_div shadow-lg mb-5 bg-body-tertiary rounded"
          style={{
            border: "solid 1px black",
            width: "800px",
            margin: "0 auto",
          }}
        >
          <div
            className="col-12 "
            style={{ height: "5px", backgroundColor: "black", width: "100%" }}
          ></div>
          <div
            className="col-12"
            style={{
              height: "10px",
              backgroundColor: "rgb(166, 2, 2)",
              width: "100%",
            }}
          ></div>
          <center>
            <br></br>
            <br></br>
            <span
              className=" mt-4"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Receipt - <span id="iid">NA</span>
            </span>
            <h5 className="mt-1">Sahas Cricket Club</h5>
          </center>
          <br></br>
          <br></br>
          <div>
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "10%" }}>
                <span>
                  <b>Name of the student : </b>
                </span>{" "}
                <span id="name">Loading..</span> <br></br>
                <span>
                  <b>Time :</b>
                </span>{" "}
                <span id="time">Loading.. </span> &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span>
                  <b>Admission ID: </b>
                </span>{" "}
                {admId ? id : <span id="id">Loading..</span>}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span>
                  <b>Joining Date :</b>
                </span>{" "}
                <span id="jdate">Loading..</span>
                <br></br>
                <span>
                  <b>For : </b>
                </span>
                <span id="for">Loading..</span> &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span>
                  <b>Valid Till : </b>
                </span>
                <input
                  style={{ width: "110px", marginTop: "5px" }}
                  id="vtill"
                  type="date"
                  onChange={(e) => setUpValidTill(e.target.value)}
                />
                &nbsp;&nbsp;&nbsp;&nbsp; <b>Payment Mode :</b>{" "}
                <select
                  id="cars"
                  name="cars"
                  value={pmode}
                  onChange={handlePaymentMethodChange}
                >
                  <option>- Select -</option>
                  <option value="Online">Online</option>
                  <option value="Cash">Cash</option>
                </select>
                {/* popup */}
                {showPopup && (
                  <div
                    style={{
                      position: "absolute",
                      top: "650px",
                      left: "900px",
                      background: "white",
                      borderRadius: "10px",
                      padding: "20px",
                      boxShadow: "1px 1px 64px 20px rgba(0,0,0,0.17)",
                    }}
                  >
                    <div
                      className="popup"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <p>Scan this for online payment.</p>
                      <img src="images/newQR.jpeg" alt="" style={{ width: '300px', height: 'fit-content' }} /> Set width and height here
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={hidePopup}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <center>
            <div>
              <table style={{ width: "80%", border: "1px solid black" }}>
                <thead style={{ background: "#414143 none repeat scroll 0 0" }}>
                  <tr>
                    <th
                      style={{ color: "#fff", padding: "13px 20px !important" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;Description
                    </th>
                    <th
                      style={{ color: "#fff", padding: "13px 20px !important" }}
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <br></br>
                <tbody>
                  <tr>
                    <td
                      class=""
                      style={{
                        padding: "9px 20px !important",
                        fontSize: "13px",
                        fontWeight: "initial !important",
                      }}
                    >
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Prospectus Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Registration Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Coaching Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Recreatioal Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Maintanence Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Activiy and Evaluation Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Uniform Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Sport Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Other / Fine:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Already Paid Amound:{" "}
                        </strong>
                      </p>
                      {/* <p>
                                                <strong style={{ marginLeft: '20px' }}>Status </strong>
                                            

                                            </p> */}
                    </td>
                    <td
                      style={{
                        padding: "9px 20px !important",
                        fontSize: "13px",
                        fontWeight: "initial !important",
                      }}
                    >
                      <p style={{ marginTop: "13px" }}>
                        <input
                          type="text"
                          id="taddress"
                          style={{ width: "120px", marginTop: "0px" }}
                          onChange={(e) => setProspectusFee(e.target.value)}
                        />
                      </p>
                      <p style={{ marginTop: "-3px" }}>
                        <input
                          type="text"
                          id="taddress"
                          style={{ width: "120px", marginTop: "-20px" }}
                          onChange={(e) => setRegistrationFee(e.target.value)}
                        />
                      </p>
                      <p style={{ marginTop: "-3px" }}>
                        <input
                          type="text"
                          id="taddress"
                          style={{ width: "120px", marginTop: "-20px" }}
                          onChange={(e) => setCoachingFee(e.target.value)}
                        />
                      </p>
                      <p style={{ marginTop: "-3px" }}>
                        <input
                          type="text"
                          id="taddress"
                          style={{ width: "120px", marginTop: "-20px" }}
                          onChange={(e) => setRecreatioalFee(e.target.value)}
                        />
                      </p>
                      <p style={{ marginTop: "-3px" }}>
                        <input
                          type="text"
                          id="taddress"
                          style={{ width: "120px", marginTop: "-20px" }}
                          onChange={(e) => setMaintanenceFee(e.target.value)}
                        />
                      </p>
                      <p style={{ marginTop: "-3px" }}>
                        <input
                          type="text"
                          id="taddress"
                          style={{ width: "120px", marginTop: "-20px" }}
                          onChange={(e) => setActiviyFee(e.target.value)}
                        />
                      </p>
                      <p style={{ marginTop: "-3px" }}>
                        <input
                          type="text"
                          id="taddress"
                          style={{ width: "120px", marginTop: "-20px" }}
                          onChange={(e) => setUniformFee(e.target.value)}
                        />
                      </p>
                      <p style={{ marginTop: "-3px" }}>
                        <input
                          type="text"
                          id="taddress"
                          style={{ width: "120px", marginTop: "-20px" }}
                          onChange={(e) => setSportFee(e.target.value)}
                        />
                      </p>
                      <p style={{ marginTop: "-3px" }}>
                        <input
                          type="text"
                          id="taddress"
                          style={{ width: "120px", marginTop: "-20px" }}
                          onChange={(e) => setOtherFee(e.target.value)}
                        />
                      </p>
                      <p style={{ marginTop: "-3px" }}>
                        <input
                          type="text"
                          id="taddress"
                          style={{ width: "120px", marginTop: "-20px" }}
                          onChange={(e) => setAlreadypaid(e.target.value)}
                        />
                      </p>
                      {/* //New Code */}
                      {/* <p style={{ marginTop: '-3px' }}>
                                            <input type="text" onChange={(e) => { console.log(e.target.value); setstatus(e.target.value); }} />

                                            </p> */}
                      <input
                        type="button"
                        value="Calculate"
                        onClick={calcTotal}
                      />
                    </td>
                  </tr>
                  <tr style={{ height: "75px" }}>
                    <td
                      class=""
                      style={{
                        padding: "9px 20px !important",
                        fontSize: "13px",
                        fontWeight: "initial !important",
                        marginTop: "120px",
                      }}
                    >
                      <hr />
                      <h2
                        style={{
                          fontSize: "20px",
                          fontWeight: "900",
                          margin: "0",
                          textTransform: "uppercase",
                        }}
                      >
                        <strong>&nbsp;&nbsp;&nbsp;Total: </strong>
                      </h2>
                    </td>

                    <td
                      class="text-left"
                      style={{
                        padding: "9px 20px !important",
                        fontSize: "13px",
                        fontWeight: "initial !important",
                      }}
                    >
                      <hr />
                      <h2
                        style={{
                          fontSize: "20px",
                          fontWeight: "900",
                          margin: "0",
                          textTransform: "uppercase",
                        }}
                      >
                        <strong>
                          <i class="fa fa-inr"></i> <span id="feeTotal">0</span>
                          /-
                        </strong>
                      </h2>
                    </td>
                  </tr>

                  {/* //Tryih */}
                </tbody>
              </table>
            </div>
            <div class="row">
              <div
                style={{
                  margin: "10px 0",
                  marginTop: "100px",
                  marginBottom: "30px",
                  overflow: "hidden",
                  display: "flex",
                  marginLeft: "120px",
                }}
              >
                <div>
                  <div class="receipt-right">
                    <p style={{ fontSize: "12px", margin: "0px" }}>
                      <b>Date & Time :</b>{" "}
                      <span id="timestampp">Loading..</span>
                    </p>
                    <h5
                      style={{
                        color: "rgb(140, 140, 140)",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "0 0 7px 0",
                      }}
                    >
                      Thank you for your enrollment!
                    </h5>
                  </div>
                </div>
                <div>
                  <div class="receipt-left">
                    <h1
                      style={{
                        fontSize: "15px",
                        fontWeight: "400 !important",
                        margin: "0 !important",
                        marginLeft: "270px",
                        marginTop: "17px",
                      }}
                    >
                      Signature
                    </h1>
                  </div>
                </div>
              </div>

              <div>
                Comparison of class wise fees structure is not entertained,{" "}
                <br></br> (as fee structure changes on the basis of grade){" "}
              </div>
            </div>
          </center>
          <br></br>
          <br></br>
          <div
            className="col-12"
            style={{ height: "7px", backgroundColor: "black", width: "100%" }}
          ></div>

          <div style={{ borderTop: "2px dashed black", marginTop: "1px" }}>
            <br></br>
            <br></br>
            <div style={{ textAlign: "center" }}>
              *** For office use only ***
            </div>
            <br></br>
            <br></br>
            <div style={{ display: "flex" }}>
              <div className="cl1" style={{ paddingLeft: "50px" }}>
                Admission Fee : Annual/Monthly etc.
                ______________________________<br></br>
                Admission Date : ___________________________ <br></br>
                Admission ID : ___________________________ <br></br>
              </div>{" "}
              <br></br>
              <div
                className="cl2"
                style={{ paddingLeft: "80px", marginTop: "20px" }}
              >
                _________________ <br></br>
                Authorised Signatory
              </div>
            </div>
            <br></br> <br></br> <br></br>
          </div>
        </div>
      </div>
      <center>
        <button type="button" class="btn btn-primary" onClick={printDiv}>
          Print
        </button>{" "}
        &nbsp; &nbsp; &nbsp;
        <Link to="/Dashboard">
          <button type="button" class="btn btn-primary">
            Dashboard
          </button>{" "}
        </Link>
      </center>
      <br></br>
      <br></br>

      <div
        id="receipt_div1"
        style={{ marginLeft: "-10000px", marginTop: "-1250px" }}
      >
        <div
          className="receipt_div shadow-lg mb-5 bg-body-tertiary rounded"
          style={{
            border: "solid 1px black",
            width: "800px",
            margin: "0 auto",
          }}
        >
          <div
            className="col-12 "
            style={{ height: "5px", backgroundColor: "black", width: "100%" }}
          ></div>
          <div
            className="col-12"
            style={{
              height: "10px",
              backgroundColor: "rgb(166, 2, 2)",
              width: "100%",
            }}
          ></div>
          <center>
            <br></br>
            <br></br>
            <span
              className=" mt-4"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Receipt - <span id="iidp">NA</span>
            </span>
            <h3>Sahas Cricket Club</h3>
          </center>
          <br></br>
          <br></br>
          <div>
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "10%" }}>
                <span>
                  <b>Name of the student : </b>
                </span>{" "}
                <span id="namep">Loading..</span> <br></br>
                <span>
                  <b>Time :</b>
                </span>{" "}
                <span id="timep">Loading.. </span> &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span>
                  <b>Admission No : </b>{" "}
                </span>
                {admId ? id : <span id="id">Loading..</span>}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span>
                  <b>Joining Date :</b>
                </span>{" "}
                <span id="jdatep">Loading..</span>
                <br></br>
                <span>
                  <b>For</b>
                </span>{" "}
                : <span id="forp">Loading..</span> &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span>
                  <b>Valid Till</b>
                </span>{" "}
                :{" "}
                <span style={{ width: "110px", marginTop: "5px" }} id="vtillp">
                  Loading..
                </span>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span>
                  <b>Payment Mode</b>
                </span>{" "}
                :{" "}
                <span style={{ width: "110px", marginTop: "5px" }} id="pmodep">
                  Loading..
                </span>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>

          <center>
            <div>
              <table style={{ width: "80%", border: "1px solid black" }}>
                <thead style={{ background: "#414143 none repeat scroll 0 0" }}>
                  <tr>
                    <th
                      style={{ color: "#fff", padding: "13px 20px !important" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;Description
                    </th>
                    <th
                      style={{ color: "#fff", padding: "13px 20px !important" }}
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class=""
                      style={{
                        padding: "9px 20px !important",
                        fontSize: "13px",
                        fontWeight: "initial !important",
                      }}
                    >
                      <p>
                        <br></br>
                        <strong style={{ marginLeft: "20px" }}>
                          Prospectus Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Registration Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Coaching Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Recreatioal Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Maintanence Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Activiy and Evaluation Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Uniform Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Sport Fee:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Other / Fine:{" "}
                        </strong>
                      </p>
                      <p>
                        <strong style={{ marginLeft: "20px" }}>
                          Already paid Amount{" "}
                        </strong>
                      </p>
                      {/* <p>
                                                <strong style={{ marginLeft: '20px' }}>Status </strong>
                                            </p> */}

                      <hr />
                    </td>
                    <td
                      style={{
                        padding: "9px 20px !important",
                        fontSize: "13px",
                        fontWeight: "initial !important",
                      }}
                    >
                      <p>
                        <br></br>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value1">-</span>{" "}
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value2">-</span>{" "}
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value3">-</span>{" "}
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value4">-</span>
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value5">-</span>
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value6">-</span>
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value7">-</span>
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value8">-</span>
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value9">-</span>
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value10">-</span>
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <i class="fa fa-inr"></i> <span id="value11">-</span>
                        </strong>
                      </p>
                      <hr />
                    </td>
                  </tr>
                  <tr style={{ height: "30px" }}>
                    <td
                      class=""
                      style={{
                        padding: "9px 20px !important",
                        fontSize: "13px",
                        fontWeight: "initial !important",
                        marginTop: "120px",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "20px",
                          fontWeight: "900",
                          margin: "0",
                          textTransform: "uppercase",
                        }}
                      >
                        <strong>&nbsp;&nbsp;&nbsp;Total: </strong>
                      </h2>
                    </td>
                    <td
                      class="text-left text-danger"
                      style={{
                        padding: "9px 20px !important",
                        fontSize: "13px",
                        fontWeight: "initial !important",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "20px",
                          fontWeight: "900",
                          margin: "0",
                          textTransform: "uppercase",
                        }}
                      >
                        <strong>
                          <i class="fa fa-inr"></i>{" "}
                          <span id="feetotalp">0</span>/-
                        </strong>
                      </h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div
                style={{
                  margin: "10px 0",
                  marginTop: "100px",
                  marginBottom: "30px",
                  overflow: "hidden",
                  display: "flex",
                  marginLeft: "120px",
                }}
              >
                <div>
                  <div class="receipt-right">
                    <p style={{ fontSize: "12px", margin: "0px" }}>
                      <b>Date & Time :</b> <span id="timestamp">Loading..</span>
                    </p>
                    <h5
                      style={{
                        color: "rgb(140, 140, 140)",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "0 0 7px 0",
                      }}
                    >
                      Thank you for your enrollment!
                    </h5>
                  </div>
                </div>
                <div>
                  <div class="receipt-left">
                    <h1
                      style={{
                        fontSize: "15px",
                        fontWeight: "400 !important",
                        margin: "0 !important",
                        marginLeft: "270px",
                        marginTop: "17px",
                      }}
                    >
                      Signature
                    </h1>
                  </div>
                </div>
              </div>

              <div>
                Comparison of class wise fees structure is not entertained,{" "}
                <br></br> (as fee structure chnages on the badis of grade){" "}
              </div>
            </div>
          </center>
          <br></br>
          <br></br>
          <div
            className="col-12"
            style={{ height: "7px", backgroundColor: "black", width: "100%" }}
          ></div>

          <div style={{ borderTop: "2px dashed black", marginTop: "1px" }}>
            <br></br>
            <br></br>
            <div style={{ textAlign: "center" }}>
              *** For office use only ***
            </div>
            <br></br>
            <br></br>
            <div style={{ display: "flex" }}>
              <div className="cl1" style={{ paddingLeft: "50px" }}>
                Admission Fee : Annual/Monthly etc. ___________________________{" "}
                <br></br>
                Admission Date : ___________________________ <br></br>
                Admission ID : ___________________________ <br></br>
              </div>{" "}
              <br></br>
              <div
                className="cl2"
                style={{ paddingLeft: "80px", marginTop: "20px" }}
              >
                _________________ <br></br>
                Authorised Signatory
              </div>
            </div>
            <br></br> <br></br> <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
