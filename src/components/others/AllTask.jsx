import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const AllTask = () => {
  const data = useContext(AuthContext);

  return (
    <div
      id="alltasks"
      className="bg-[#1c1c1c] py-4 px-14 rounded mt-4 h-[300px]"
    >
      <div className="mb-2 py-2 px-4 flex justify-between rounded border-b-2 border-white">
        <h1 className="w-1/5 font-semibold">Employee</h1>
        <h2 className="w-1/5 font-semibold">New Task</h2>
        <h3 className="w-1/5 font-semibold">Active Task</h3>
        <h3 className="w-1/5 font-semibold">Completed</h3>
        <h3 className="w-1/7 font-semibold">Failed</h3>
      </div>

      <div className="h-[80%] overflow-auto" id="empTable">
      {data.employeeData.map((ele, idx) => {
        return (
          <div
            className="mb-2 py-2 px-4 flex justify-between rounded"
            key={idx}
          >
            <h1 className="w-1/5 font-thin">{ele.firstName}</h1>
            <h2 className="w-1/5 font-semibold text-purple-500">{ele.taskNumbers.newTask}</h2>
            <h3 className="w-1/5 font-semibold text-yellow-400">{ele.taskNumbers.active}</h3>
            <h3 className="w-1/5 font-semibold text-green-400">{ele.taskNumbers.completed}</h3>
            <h3 className="w-1/7 font-semibold text-red-500">{ele.taskNumbers.failed}</h3>
          </div>
        );
      })}
      </div>
    </div>
  );
};
