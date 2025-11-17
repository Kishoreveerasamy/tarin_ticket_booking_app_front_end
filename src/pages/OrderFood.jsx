import { useState } from "react"
import "./OrderFood.css"

export default function OrderFood() {
  const [pnr, setPnr] = useState("")
  const [train, setTrain] = useState("")
  const [date, setDate] = useState("")
  const [station, setStation] = useState("")

  function search() {
    if (!pnr && (!train || !date || !station)) {
      alert("Enter PNR OR Train + Date + Station")
      return
    }

    console.log("Searching...", { pnr, train, date, station })
  }

  return (
    <div className="food-container">
      

      <h2 className="food-title">Order Food in Train</h2>
      <p className="food-subtitle">Get fresh food delivered to your seat</p>

      <div className="food-box">

        {/* PNR SEARCH */}


        <div className="food-part">
          <h3>Search by PNR</h3>
          <input 
            type="text" 

            placeholder="Enter PNR"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
          />
        </div>

        <div className="food-or">OR</div>

        {/* TRAIN SEARCH */}
        <div className="food-part">
          <h3>Search by Train</h3>

          <input 
            type="text" 
            placeholder="Train Number"


            value={train}
            onChange={(e) => setTrain(e.target.value)}
          />

          <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Boarding Station"
            value={station}

            onChange={(e) => setStation(e.target.value)}
          />
        </div>

        <button className="food-btn" onClick={search}>Find Food</button>
      </div>

      <h3 className="food-small-title">Popular Categories</h3>

      <div className="food-categories">
        <div className="cat">Pizza</div>


        <div className="cat">Meals</div>
        <div className="cat">Chinese</div>
        <div className="cat">Burgers</div>
        
        <div className="cat">Drinks</div>
        <div className="cat">Snacks</div>
      </div>

      <h3 className="food-small-title">Restaurants</h3>
      <p className="food-note">Search to see restaurants for your train.</p>

    </div>
  )
}
