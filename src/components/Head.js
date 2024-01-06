import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
  return (
   
    <div className="grid grid-flow-col p-3 m-2 shadow">
      <div className="flex col-span-1">
        <img
        onClick={()=>toggleMenuHandler()} className="h-8 cursor-pointer"
          alt="hamburger menu"
          src="https://tse2.mm.bing.net/th?id=OIP.8t6YKcKu6faLA6Kx2cbERAHaHa&pid=Api&P=0&h=180"
        />
        <img className="h-10 mx-2"
          alt="youtube"
          src="https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=180"
        />
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100">🔍</button>
      </div>
      <div className="col-span-1">
        <img className="h-8"
          alt="user"
          src="https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=180"
        />
      </div>
    </div>
  );
};

export default Head;
