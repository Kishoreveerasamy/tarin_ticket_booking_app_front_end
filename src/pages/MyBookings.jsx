import "./MyBookings.css"

export default function MyBookings() {
  // Simple dummy data
  const bookings = [
    {
      id: "BK10231",
      train: "Chennai Express",
      trainNo: "12623",
      from: "Chennai",
      to: "Delhi",


      date: "2025-01-25",
      time: "06:15 AM",

      seats: 2,
      status: "Confirmed",
    },




    {
      id: "BK10232",
      train: "Coimbatore Intercity",


      trainNo: "22666",
      from: "Coimbatore",
      to: "Chennai",
      date: "2025-02-03",
      time: "03:45 PM",
      seats: 1,
      status: "Pending",
    },
  ]








  return (
    <div className="mb-container">
      <h2 className="mb-title">My Bookings</h2>

      {bookings.map((item) => (
        <div className="mb-card" key={item.id}>
          
          {/* LEFT */}
          <div className="mb-left">
            <h3>{item.train} ({item.trainNo})</h3>


            <p>{item.from} → {item.to}</p>
            <p>Date: {item.date}</p>
            <p>Time: {item.time}</p>
            <p>Seats: {item.seats}</p>
          </div>



          {/* RIGHT */}
          <div className="mb-right">
            <div className={`mb-status ${item.status.toLowerCase()}`}>
              {item.status}
            </div>
            

            <button className="mb-btn">View Ticket</button>
          </div>

        </div>
      ))}
    </div>
  )
}
