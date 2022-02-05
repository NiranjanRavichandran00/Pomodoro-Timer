import React from 'react';
import {FiSettings } from "react-icons/fi"
import {BsFillAlarmFill} from "react-icons/bs"

export default function Navigation({setOpenSetting}) {
  return (
    <nav className="pt-5 text-violet-500 flex justify-between w-11/12 mx-auto">
        <div className="flex items-center gap-1 cursor-pointer">
            <BsFillAlarmFill className="text-sm " />
            <h1>Pomodoro Timer</h1>
        </div>
        <FiSettings
            className="text-2xl cursor-pointer "
            onClick={() => setOpenSetting((value) => !value)}
        />
    </nav>  
    );
}
