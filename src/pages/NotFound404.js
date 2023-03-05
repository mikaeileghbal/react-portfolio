import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound404() {
  const navigate = useNavigate();

  navigate("/");
  return <div>404 Page not found</div>;
}
