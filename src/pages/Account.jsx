import "./Account.css";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const user = {
    name: "Kishore",
    email: "kishore@example.com",
    mobile: "+91 9876543210",
    joined: "2024-12-01",
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="acc-container">
      <h1 className="acc-title">My Account</h1>

      <div className="acc-card">
        <div className="acc-avatar">👤</div>

        <div className="acc-info">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
          <p>Joined: {user.joined}</p>

          <button className="acc-edit-btn">Edit Profile</button>
        </div>
      </div>

      <div className="acc-stats">
        <div className="stat-box">
          <h3>12</h3>
          <p>Train Bookings</p>
        </div>

        <div className="stat-box">
          <h3>8</h3>
          <p>Food Orders</p>
        </div>

        <div className="stat-box">
          <h3>5</h3>
          <p>Upcoming Trips</p>
        </div>
      </div>

      <div className="acc-actions">
        <button className="acc-btn" onClick={() => navigate("/my-bookings")}>
          View Bookings
        </button>

        <button className="acc-btn red" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
