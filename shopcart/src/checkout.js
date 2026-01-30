import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckOut({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/signin");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="container mt-4">
      <h2>Check Out</h2>
      <p className="text-success fw-bold">Welcome Back {user.name}!</p>
      <p>Time to check out?</p>
    </div>
  );
}
