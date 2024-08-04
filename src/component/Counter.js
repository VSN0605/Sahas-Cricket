import axios from "axios";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Counter = () => {
  const [dbpath, setdbpath] = useState("http://localhost/test/");
  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count5: 0,
    count6: 0,
  });
  const loadUser = async () => {
    try {
      const result = await axios.get(dbpath + "getcounts.php");
      console.log("dashboard", result);

      if (result.data && result.data.phpresult) {
        const newCounts = {
          count1:
            parseInt(result.data.phpresult[0]["count(id)"]) +
            parseInt(result.data.phpresult[2]["count(id)"]),
          count2: parseInt(result.data.phpresult[0]["count(id)"]),
          count3: parseInt(result.data.phpresult[3]["count(id)"]),
          count4: parseInt(result.data.phpresult[4]["count(id)"]),
          count5: parseInt(result.data.phpresult[2]["count(id)"]),
          count6: parseInt(result.data.phpresult[1]["count(id)"]),
        };

        setCounts(newCounts);
      } else {
        console.error("Unexpected response format:", result.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="c-container">
      <h1 className="text-center mt-5">OUR STATS</h1>

      <div
        className="tab-content"
        style={{ padding: "20px", overflow: "hidden" }}
      >
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="row justify-content-between g-5">
            {/* <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="bg-dark rounded text-center py-4 px-3">
              <h5 className="text-white mb-0" style={{ fontSize: '30px' }}>
                <CountUp end={counts.count1} duration={10} />
              </h5>
              <h4 className="text-uppercase display-7 text-primary">Total</h4>
            </div>
          </div> */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-4 px-3">
                <h5 className="text-white mb-0" style={{ fontSize: "30px" }}>
                  <CountUp end={counts.count2} duration={10} />
                </h5>
                <h4 className="text-uppercase display-7 text-primary">
                  Player
                </h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-4 px-3">
                <h5 className="text-white mb-0" style={{ fontSize: "30px" }}>
                  <CountUp end={counts.count3} duration={10} />
                </h5>
                <h4 className="text-uppercase display-7 text-primary">
                  Beginner
                </h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-4 px-3">
                <h5 className="text-white mb-0" style={{ fontSize: "30px" }}>
                  <CountUp end={counts.count4} duration={10} />
                </h5>
                <h4 className="text-uppercase display-7 text-primary">
                  Professional
                </h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-4 px-3">
                <h5 className="text-white mb-0" style={{ fontSize: "30px" }}>
                  <CountUp end={counts.count5} duration={10} />
                </h5>
                <h4 className="text-uppercase display-7 text-primary">
                  Recreational
                </h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-4 px-3">
                <h5 className="text-white mb-0" style={{ fontSize: "30px" }}>
                  <CountUp end={counts.count6} duration={10} />
                </h5>
                <h4 className="text-uppercase display-7 text-primary">Coach</h4>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Counter;
