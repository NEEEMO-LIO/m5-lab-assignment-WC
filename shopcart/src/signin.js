import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function SignIn({ user, setUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: name || "Guest", email });
    navigate("/checkout");
  };

  const responseFacebook = (response) => {
    setUser({
      name: response.name || "Facebook User",
      email: response.email || "",
    });
    navigate("/checkout");
  };

  return (
    <div className="container mt-4">
      <h2>Sign In</h2>
      <p>Please login using one of the following:</p>

      <form onSubmit={handleLogin} style={{ maxWidth: 280 }}>
        <div className="mb-2">
          <label className="form-label">Name:</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Email:</label>
          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </div>

        <button className="btn btn-success" type="submit">
          Login
        </button>
      </form>

      <div className="mt-4">
        <FacebookLogin
          appId="YOUR_FACEBOOK_APP_ID"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          render={(renderProps) => (
            <button
              className="btn btn-primary"
              onClick={renderProps.onClick}
              style={{ background: "#3b5998", borderColor: "#3b5998" }}
            >
              LOGIN WITH FACEBOOK
            </button>
          )}
        />
      </div>
    </div>
  );
}