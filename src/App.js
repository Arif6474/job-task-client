

import { Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import CompletedTask from './components/CompletedTask/CompletedTask';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';

import Header from './components/Shared/Header';
import ToDo from './components/ToDo/ToDo';

function App() {
  return (
    <div >
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="completed-task" element={<CompletedTask></CompletedTask>}></Route>
      <Route path="to-do" element={<ToDo></ToDo>}></Route>
      <Route path="calendar" element={<Calendar></Calendar>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
