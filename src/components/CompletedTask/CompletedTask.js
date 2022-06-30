import React, { useEffect, useState } from 'react';


const CompletedTask = () => {
    const [completedTasks , setCompletedTasks] = useState([])
   
    useEffect(() => {
        
            fetch(`http://localhost:5000/tasks`)
            .then(res => res.json())
            .then(data => setCompletedTasks(data))
        
    },[])
    return (
        <div className="container mx-auto">
    <h2 className="text-center text-xl font-bold text-emerald-600 my-4">Completed Tasks</h2>
        <div className="overflow-x-auto">
<table className="table w-full">
<thead>
  <tr>
    
    <th></th>
    <th>Completed Task</th>
    <th>Status</th>
    
  </tr>
</thead>
<tbody>
  {
     completedTasks.map((task ) => <tr   key={task._id}>
        
        
     <td></td>
     <td >{task.complete}</td>
    
     <td> <button  className="btn btn-outline btn-success btn-xs">Done</button></td>
    
   </tr>)
  }
</tbody>
</table>
</div>
    </div>
    );
};

export default CompletedTask;