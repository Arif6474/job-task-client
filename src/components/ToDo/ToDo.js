import React, { useState } from 'react';

const ToDo = () => {
    const [task, setTask] = useState('');
   
  
    const handleSubmit = event => {
      event.preventDefault();
      const task = event.target.task.value
      const dailyTask = {task}
      const url = `https://sleepy-scrubland-60658.herokuapp.com/task`
      fetch(url,{
          method: 'POST',
          headers: {'content-type' : 'application/json'},
          body: JSON.stringify(dailyTask)
      })
      .then(res => res.json())
      .then(result=> console.log(result))
      console.log(task);
      setTask('')
    };
    
  
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-lime-600">To-Do</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <input type="text"  name="task"
            value={task}
            onChange={event => setTask(event.target.value)} placeholder="Daily Task" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <input className='my-4 w-full max-w-xs btn btn-accent border-0 text-white' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToDo;