import { useState } from "react";
import "./Help.css";

export default function Help() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "How can I book a train ticket?", a: "Go to Train Booking → enter details → search → choose a train." },
    { q: "How do I order food?", a: "Go to Order Food → enter PNR or Train Number → select restaurant → place order." },
    { q: "Can I cancel my food order?", a: "Most restaurants allow cancellation before food preparation." },
    { q: "Why is my train status not updating?", a: "IRCTC servers may delay. Try again later." },
    { q: "How can I contact support?", a: "Use chat, email, or call options below." }
  ];

  // BASIC FUNCTION
  function toggleFAQ(i) {
    if (open === i) {
      setOpen(null);
    } else {
      setOpen(i);
    }
  }

  return (
    <div className="help-container">
      <h1 className="help-title">Help & Support</h1>
      <p className="help-subtitle">We are here to assist you</p>

      {/* FAQ SECTION */}
      <div className="faq-section">
        <h2>FAQs</h2>

        {faqs.map((item, i) => (
          <div key={i} className="faq-card" onClick={() => toggleFAQ(i)}>
            <div className="faq-question">
              <span>{item.q}</span>
              <span>{open === i ? "▲" : "▼"}</span>
            </div>

            {open === i ? <p className="faq-answer">{item.a}</p> : null}
          </div>
        ))}
      </div>

      {/* CONTACT SECTION */}
      <div className="contact-section">
        <h2>Contact Us</h2>

        <div className="contact-options">
          <div className="contact-card">
            <span>💬</span>
            <h3>Chat</h3>
            <p>Instant support</p>
            <button>Start Chat</button>
          </div>

          <div className="contact-card">
            <span>📧</span>
            <h3>Email</h3>
            <p>Send your queries</p>
            <button>Send Email</button>
          </div>

          <div className="contact-card">
            <span>📞</span>
            <h3>Call</h3>
            <p>7 AM – 10 PM</p>
            <button>Call Now</button>
          </div>
        </div>
      </div>

      {/* COMPLAINT SECTION */}
      <div className="complaint-section">
        <h2>Submit a Complaint</h2>
        <textarea placeholder="Describe your issue..."></textarea>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}
