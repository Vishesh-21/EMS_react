import { empData } from "./employee";
import { adminData } from "./admin";

  export const setLocalStorage = () =>{
    localStorage.setItem("employees",JSON.stringify(empData));
    localStorage.setItem("admin",JSON.stringify(adminData));
  }

  export const getLocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem("employees"));
    const authorData = JSON.parse(localStorage.getItem("admin"));
    return {employeeData,authorData};
  }
  