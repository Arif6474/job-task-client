import React from 'react';

const TaskRow = (task) => {
    // const {complete} = t;
    console.log(task);
    return (
        <tr>
        
        
        <td></td>
        <td >{task.complete}</td>
       
        <td> <button  className="btn btn-outline btn-success btn-xs">Done</button></td>
       
      </tr>
    );
};

export default TaskRow;