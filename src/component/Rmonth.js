import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CSS/m.css';

export default function Rmonth({ dbpath }) {
  const [user, setUser] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const isUserLoggedIn = Cookies.get("userLoggedIn");

  useEffect(() => {
    if (isUserLoggedIn !== "true") {
      navigate("/AdminLogin");
    }
  }, [isUserLoggedIn, navigate]);

  const loadData = async (query) => {
    try {
      setLoading(true);
      const result = await axios.get(dbpath + "Dynamicquery.php?query=" + query);
      const userData = result.data.phpresult || [];
      setUser(userData);
    } catch (error) {
      console.error("Error loading user data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    let query = `select * from remark where timestamp >= '${startDate.toISOString().split('T')[0]}' AND timestamp <= '${endDate.toISOString().split('T')[0]}'`;

    if (searchQuery) {
      query += ` AND (id = '${searchQuery}' OR name = '${searchQuery}')`;
    }

    await loadData(query);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('</head><body style="font-family: Arial, sans-serif;">');
    printWindow.document.write('<h1 style="text-align: center;">Remark of the Student</h1>');
    printWindow.document.write('<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;" border="1">');
    printWindow.document.write('<thead><tr><th>ID</th><th>Name</th><th>Status</th><th>Match Played</th><th>Wicket</th><th>Run Score</th><th>Type</th><th>Remark</th><th>Date : Time</th></tr></thead><tbody>');

    user.forEach(res => {
      printWindow.document.write(`<tr style="border: 1px solid #ddd; padding: 8px; text-align: left;"><td>${res.id}</td><td>${res.name}</td><td>${res.attendanceOption}</td><td>${res.matchesPlayed}</td><td>${res.Wicket}</td><td>${res.runscore}</td><td>${res.type2}</td><td>${res.remark}</td><td>${res.timestamp}</td></tr>`);
    });

    printWindow.document.write('</tbody></table>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  

  return (
    <>
     
      <p className="sp1">Monthly Remark</p>
      <br />
      <form style={{ display: "flex" }}>
      <div className="mb-3 date-picker-container">
  <DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    dateFormat="MM/dd/yyyy"
    placeholderText="Start Date"
    className="date-picker"
  /> 
  <DatePicker
    selected={endDate}
    onChange={(date) => setEndDate(date)}
    dateFormat="MM/dd/yyyy"
    placeholderText="End Date"
    className="date-picker"
  />
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search by Name or ID"
    className="search-input"
  />
</div>

        <br />
        <br />
        <center>
          &nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>{" "}
          &nbsp;&nbsp;&nbsp;
          <Link to="/dashboard">
            <button type="button" className="btn btn-primary">
              Dashboard
            </button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-primary" onClick={handlePrint}>
            Print
          </button>
        </center>
      </form>
      <br />
      <br />
      <div id="tablediv">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Matches Played</th>
              <th>Wicket</th>
              <th>Run Score</th>
              <th>Type</th>
              <th>Remark</th>
              <th>Date : Time</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9">Loading...</td>
              </tr>
            ) : user.length > 0 ? (
              user.map((res) => (
                <tr key={res.id}>
                  <td>{res.id}</td>
                  <td>{res.name}</td>
                  <td>{res.attendanceOption}</td>
                  <td>{res.matchesPlayed}</td>
                  <td>{res.Wicket}</td>
                  <td>{res.runscore}</td>
                  <td>{res.type2}</td>
                  <td>{res.remark}</td>
                  <td>{res.timestamp}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
