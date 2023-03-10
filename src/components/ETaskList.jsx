import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/TaskList.css';
import LoggedComponent from './LoggedComponent';
import EmployeeDash from './EmployeeDash';

const ETaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchInput, setSearchInput] = useState("");




  useEffect(() => {
    axios.get('http://localhost:9099/admin/get-all-list-of-tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  const filterTasks = (searchInput) => {
    return tasks.filter((task) =>
      task.taskName.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <div className="tasklist-container">
      <LoggedComponent />
      <EmployeeDash />
      
      <div className="tasklist-content">
        <h2 className="tasklist-heading" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", color: 'white', padding: '10px'}}>Task List</h2>
        <br />
        <input
          type="text"
          placeholder="Search tasks..." 
          onChange={(e) =>setSearchInput(e.target.value)}
          value={searchInput}
          />
          <br />


          <table className="tasklist-table">
          <thead>
          <tr>
          <th>Task Id</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Description</th>
          {/* <th>Actions</th> */}
          </tr>
          </thead>
          <tbody>
          {filterTasks(searchInput).map((task) => (
          <tr key={task.taskId}>
          <td>{task.taskId}</td>
          <td>{task.taskName}</td>
          <td>{task.taskStatus}</td>
          <td>{task.taskStartDate}</td>
          <td>{task.endDate}</td>
          <td>{task.taskDescription}</td>
          <td>
  {/* <input type="checkbox" /> */}
</td>
          </tr>
          ))}
          </tbody>
          </table>
          </div>
          </div>
        
);
};
          
export default ETaskList;
