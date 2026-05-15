import { useState } from "react";
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "https://localhost:44305/login",
        {
          email: email,
          password: password
        }
      );

      console.log(response.data);

      alert(response.data.message);

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }
  };

  return (
    <div className="login-wrapper">

      <div className="login-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>

          <span className="forgot-password">
            Forgot Password?
          </span>
        </div>

        <button onClick={handleLogin}>
          Login
        </button>

        <div className="divider">or</div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="signup-text">
          Don’t have an account? <span>Sign Up</span>
        </p>
      </div>

    </div>
  );
}