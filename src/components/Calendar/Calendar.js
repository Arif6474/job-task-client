import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const Calendar = () => {
  // const [selected, setSelected] = React.useState<Date>();

  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, 'PP')}.</p>;
  // }
  return (
    <div className="card w-96  mx-auto my-8 bg-green-200 shadow-xl">
  <div className="card-body">
       <DayPicker/>
    </div>
  </div>
  );
};

export default Calendar;
