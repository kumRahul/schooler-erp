import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function Dashboard(props) {
  const { state } = useLocation();
  return <div>{state ? <h1>Dashboard</h1> : <Navigate to="/" />}</div>;
}

export default Dashboard;
