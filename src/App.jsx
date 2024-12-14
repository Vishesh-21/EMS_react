import React, { useContext, useEffect, useState } from "react";
import { Login } from "./components/auth/Login";
import { EmployeeDashboard } from "./components/dashboards/EmployeeDashboard";
import { AdminDashboard } from "./components/dashboards/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

export default function App() {
  const [user, setUser] = useState(null);
  const authdata = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const logUser = localStorage.getItem('loggedInUser');
    if(logUser) {
      const userData = JSON.parse(logUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authdata && authdata.employeeData) {
      const employee = authdata.employeeData.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee",data : employee })
        );
      }
    } else {
      alert("Invalid credentials!!!");
    }
  };

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser}/>}
      {user === "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </div>
  );
}
