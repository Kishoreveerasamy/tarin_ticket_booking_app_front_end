import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <section className="hero">
        <div className="hero-text">
          <h1>Book Train Tickets Easily</h1>
          <p>Your travel partner for train tickets and food delivery.</p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/search-trains")}>🚆 Book Train</button>
            <button onClick={() => navigate("/order-food")}>🍽️ Order Food</button>
          </div>
        </div>

        
      
      </section>

      <section className="features">
        <div className="feature" onClick={() => navigate("/search-trains")}>
          <span>🚆</span>
          <h3>Train Booking</h3>
          <p>Search and book tickets.</p>
        </div>

        <div className="feature" onClick={() => navigate("/order-food")}>
          <span>🍱</span>
          <h3>Order Food</h3>
          <p>Hot meals delivered onboard.</p>
        </div>

        <div className="feature" onClick={() => navigate("/help")}>
          <span>❓</span>
          <h3>Help</h3>
          <p>24/7 customer support.</p>
        </div>
      </section>

      <section className="announcements">
        <h2>Announcements</h2>
        <ul>
          <li>IRCTC Partner – Your bookings are safe.</li>
          <li>Food delivery at 250+ stations.</li>
          <li>PNR and live train status available.</li>
        </ul>
      </section>

    </div>
  );
}
