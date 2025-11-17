import { useState } from "react"
import "./TrainBooking.css"

export default function TrainBooking() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")


  const [date, setDate] = useState("")
  const [trains, setTrains] = useState([])

  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 12) + 1
    const minutes = ["00", "15", "30", "45"][Math.floor(Math.random() * 4)]


    const ampm = Math.random() > 0.5 ? "AM" : "PM"
    return `${hours}:${minutes} ${ampm}`
  }

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Enter From, To, and Date")
      return
    }

    const generatedTrains = Array.from({ length: 5 }, () => ({
      id: Date.now() + Math.random(),

      number: Math.floor(10000 + Math.random() * 90000), 
      name: `${from} - ${to} Express`,
      from: from,
      to: to,

      date: date,
      time: generateRandomTime(),
      price: Math.floor(150 + Math.random() * 900),
    }))

    setTrains(generatedTrains)
  }

  return (
    <div className="train-booking">
      <h1>🚆 Train Ticket Booking</h1>

      <div className="search-container">

        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="train-list">
        {trains.length === 0 ? (
          <p className="no-results">Enter locations to view trains.</p>
        ) : (
          trains.map((train) => (
            <div className="train-card" key={train.id}>
              <h3>{train.number} - {train.name}</h3>
              <p><strong>Route:</strong> {train.from} → {train.to}</p>
              <p><strong>Date:</strong> {train.date}</p>

              
              <p><strong>Time:</strong> {train.time}</p>
              <p><strong>Price:</strong> ₹{train.price}</p>

              <button className="book-btn">Book Now</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
