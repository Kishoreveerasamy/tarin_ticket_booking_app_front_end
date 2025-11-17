import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Signup.css"

export default function Signup() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")


  const [pass, setPass] = useState("")
  const [confirm, setConfirm] = useState("")
  const [show, setShow] = useState(false)


  function signup() {
    if (name === "" || email === "" || pass === "" || confirm === "") {
      alert("Please fill all fields")
      return
    }

    if (pass !== confirm) {
      alert("Passwords do not match")
      return
    }

    // temporary token save
    localStorage.setItem("token", "sample_user_token")


    navigate("/")
  }

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join us today</p>





        <div className="signup-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="signup-group">
          <label>Email / Mobile</label>
          <input
            type="text"
            placeholder="Enter email or mobile"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>





        <div className="signup-group">
          <label>Password</label>

          <div className="signup-pass-box">
            <input
              type={show ? "text" : "password"}
              placeholder="Create password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <span className="signup-toggle" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </span>
          </div>
        </div>





        <div className="signup-group">
          <label>Confirm Password</label>
          <input
            type={show ? "text" : "password"}
            placeholder="Re-enter password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <button className="signup-btn" onClick={signup}>
          Create Account</button>

        <p className="signup-bottom-text">
          Already have an account?{" "}
          <span className="signup-login-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>


      </div>
    </div>
  )
}
