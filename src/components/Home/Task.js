import React from 'react';

const Task = ({t}) => {
    const {task} = t;
    return (
        <tr>
        
        <td><div class="form-control">
  <label class="cursor-pointer label">
    
    <input type="checkbox"  class="checkbox checkbox-accent" />
  </label>
</div></td>
        <td>{task}</td>
        <td> <button  className="btn btn-outline btn-success btn-xs">Edit</button></td>
       
      </tr>
      
    );
};

export default Task;