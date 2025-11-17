import { useState } from "react";
import "./TrainBooking.css";

export default function TrainBooking() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  function swap() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  function search() {
    if (from === "" || to === "" || date === "") {
      alert("Please enter all fields");
      return;
    }

    console.log("Searching trains...", { from, to, date });
  }

  return (
    <div className="tb-container">
      <h2 className="tb-title">Search Trains</h2>

      <div className="tb-box">

        <div className="tb-group">
          <label>From</label>
          <input
            type="text"
            placeholder="Source station"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <button className="tb-swap" onClick={swap}>Swap</button>

        <div className="tb-group">
          <label>To</label>
          <input
            type="text"
            placeholder="Destination station"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="tb-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="tb-btn" onClick={search}>Search</button>
      </div>

      <div className="tb-info">
        <p>Fast and secure train booking</p>
        <p>IRCTC partnered service</p>
        <p>Live updates supported</p>
      </div>
    </div>
  );
}
