import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export default function Login() {
  const navigate = useNavigate()



  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [show, setShow] = useState(false)

  function login() {
    if (email === "" || password === "") {
      alert("Please enter email and password")
      return
    }

    // store temporary token
    localStorage.setItem("token", "sample_token_123")


    navigate("/")
  }

  return (
    <div className="login-container">
      <div className="login-card">


        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue</p>

        <div className="login-group">
          <label>Email / Mobile</label>
          <input
            type="text"
            
            placeholder="Enter email or mobile"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-group">
          <label>Password</label>

          <div className="password-box">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="toggle-pass"
              onClick={() => setShow(!show)}
            >
              {show ? "Hide" : "Show"}
            </span>
          </div>
        </div>

        <button className="login-btn" onClick={login}>
          Login
        </button>

        <p className="login-bottom-text">
          Don't have an account?{" "}
          <span className="login-link" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  )
}
