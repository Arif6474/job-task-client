import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar  bg-accent text-white font-bold">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent text-white font-bold rounded-box w-52">
      
      <li><Link to='/completed-task'>Completed Task</Link></li>
      <li><Link to='/to-do'>To Do</Link></li>
      <li><Link to='/calendar'>Calender</Link></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">EndGame</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    
      <li><Link to='/completed-task'>Completed Task</Link></li>
      <li><Link to='/to-do'>To Do</Link></li>
      <li><Link to='/calendar'>Calender</Link></li>
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Header;