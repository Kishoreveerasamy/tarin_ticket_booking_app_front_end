import { useNavigate } from "react-router-dom"
import "./Header.css"

export default function Header() {
  const navigate = useNavigate()

  // Check if user logged in
  const token = localStorage.getItem("token")

  // Navigation functions
  const goHome = () => navigate("/")
  const goTrainBooking = () => navigate("/search-trains")
  const goOrderFood = () => navigate("/order-food")
  const goHelp = () => navigate("/help")

  const goLogin = () => navigate("/login")
  const goSignup = () => navigate("/signup")
  const goBookings = () => navigate("/my-bookings")
  const goAccount = () => navigate("/account")

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <header className="mm-header">
      {/* LEFT - LOGO */}
      <div className="mm-left" onClick={goHome} style={{ cursor: "pointer" }}>
        <div className="mm-logo"></div>
        <h2 className="mm-title">Z-fast</h2>
      </div>

      {/* CENTER NAV */}
      <nav className="mm-nav">
        <p onClick={goTrainBooking}>🚊Train Booking</p>
        <p onClick={goOrderFood}>🍽️Order Food</p>
        <p onClick={goHelp}>🤖Help</p>
      </nav>

      {/* RIGHT SECTION */}
      <div className="mm-right">

        {!token ? (
          <>
            <p className="mm-icon" onClick={goLogin}>👤Login</p>
            <p className="mm-icon" onClick={goSignup}>➡️Sign Up</p>
          </>
        ) : (
          <>
            <p className="mm-icon" onClick={goBookings}>📄 Bookings</p>
            <p className="mm-icon" onClick={goAccount}>👤 Account</p>
            <p className="mm-icon" onClick={handleLogout}>Logout</p>
          </>
        )}

      </div>
    </header>
  )
}
