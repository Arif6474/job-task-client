import React, { useState } from 'react';

const Task = ({t}) => {
    const {task} = t;
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };
    const completedTask = (complete) =>{
        
        const completeTask = {complete}
        console.log(completeTask);

        const url = `https://sleepy-scrubland-60658.herokuapp.com/tasks`
        fetch(url,{
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(completeTask)
        })
        .then(res => res.json())
        .then(result=> console.log(result))

    };
    return (
        <tr>
        
        <td><div className="form-control">
  <label className="cursor-pointer label">
  {
            isChecked ? <input type="checkbox" checked="checked" className="checkbox checkbox-accent" /> :
        
    <input type="checkbox"
    checked={isChecked}
    onChange={handleOnChange}
      onClick={()=>completedTask(t.task)} className="checkbox checkbox-accent" />
  }
  </label> 
</div></td>
        <td>{task}</td>
       
        <td> <button  className="btn btn-outline btn-success btn-xs">Edit</button></td>
       
      </tr>
      
    );
};

export default Task;