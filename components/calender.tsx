
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="px-2 items-center flex py-2 rounded-lg border-2 border-gray-400">  <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} /><SlCalender className="font-bold text-2xl"/></div>
  )
}

export default Example