import React, { useEffect, useState } from 'react';
import Task from './Task';

const Home = () => {
    const [tasks , setTasks] = useState([])
   
    useEffect(() => {
        
            fetch(`http://localhost:5000/task`)
            .then(res => res.json())
            .then(data => setTasks(data))
        
    },[])
    return (
        <div  className="container mx-auto">
        <h2 className="text-center text-xl font-bold text-emerald-600 my-4">Daily Tasks</h2>
        <div className="overflow-x-auto">
<table className="table w-full">
<thead>
  <tr>
    
    <th></th>
    <th>Daily Task</th>
    <th>Edit Task</th>
    
  </tr>
</thead>
<tbody>
  {
      tasks.map((t ) => <Task   key={t._id} t={t}></Task>)
  }
</tbody>
</table>
</div>
    </div>
    );
};

export default Home;