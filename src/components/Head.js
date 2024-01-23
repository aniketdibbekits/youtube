import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
// import { json } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";
import { json } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setsuggestions]=useState([]);
  const [showsuggestions,setshowsuggestions]=useState(false);
  const searchCache=useSelector((store)=>store.search)
  useEffect(()=>{
    // console.log(searchQuery);
   const timer= setTimeout(()=>{
    if(searchCache[searchQuery]){
      setsuggestions(searchCache[searchQuery]);
    }
    else{
      getsearchSuggestions();
      
    }
     },300);
   return ()=>{
    clearTimeout(timer);
   }
   
  },[searchQuery]);
  const getsearchSuggestions=async ()=>{
  const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json=await data.json();
  console.log(json[1])
  setsuggestions(json[1]);
  dispatch(cacheResults({
    [searchCache]:json[1],
  }))
  }
  // useEffect(()=>{
  //   getsearchSuggestions();
  // },[searchQuery]);
  // const getsearchSuggestions = async () => {
  //   try {
  //     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //     const jsonData = await data.json();
  //     console.log(jsonData[1]);
  //   } catch (error) {
  //     console.error('Error fetching search suggestions:', error);
  //   }
  // };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="hamburger menu"
          src="https://tse2.mm.bing.net/th?id=OIP.8t6YKcKu6faLA6Kx2cbERAHaHa&pid=Api&P=0&h=180"
        />
        <img
          className="h-10 mx-2"
          alt="youtube"
          src="https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=180"
        />
      </div>
      <div className="col-span-10 px-10">
      <div>
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setshowsuggestions(true)}
          onBlur={()=>setshowsuggestions(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100">
          🔍
        </button>
        </div>
        {showsuggestions &&(
        <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map(s=><li key={s} className=" py-2 shadow-sm hover:bg-gray-100"> 🔍{s}</li>)}
            {/* <li className=" py-2 shadow-sm hover:bg-gray-100"> 🔍iphone</li>
            <li className=" py-2 shadow-sm hover:bg-gray-100"> 🔍iphone</li>
            <li className=" py-2 shadow-sm hover:bg-gray-100"> 🔍iphone</li>
            <li className=" py-2 shadow-sm hover:bg-gray-100"> 🔍iphone</li>
            <li className=" py-2 shadow-sm hover:bg-gray-100"> 🔍iphone</li>
            <li className=" py-2 shadow-sm hover:bg-gray-100"> 🔍iphone</li> */}
            
          </ul>

        </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=180"
        />
      </div>
    </div>
  );
};

export default Head;
