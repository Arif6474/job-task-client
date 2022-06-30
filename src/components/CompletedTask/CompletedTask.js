import React, { useEffect, useState } from 'react';


const CompletedTask = () => {
    const [completedTasks , setCompletedTasks] = useState([])
   
    useEffect(() => {
        
            fetch(`https://sleepy-scrubland-60658.herokuapp.com/tasks`)
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
     completedTasks.map((task , index) => <tr   key={task._id}>
        
        
     <td>{index + 1}</td>
     <td >{task.complete}</td>
    
     <td> <button  className="btn btn-outline btn-primary btn-xs">Done</button></td>
    
   </tr>)
  }
</tbody>
</table>
</div>
    </div>
    );
};

export default CompletedTask;