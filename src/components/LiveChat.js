import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomName,makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const dispatch=useDispatch();
    const chatMessages=useSelector(store=>store.chat.messages);
    // logic for polling 
    useEffect(()=>{
        const i=setInterval(()=>{
            console.log("Polling")
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(20)
            }));
        },1500);
        return ()=>clearInterval(i);
    },[]);
  return (
    <div className=' w-96 h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {/* <ChatMessage name="Aniket Dibbe" message="This is Youtyube Clone"/>
      <ChatMessage name="Aniket Dibbe" message="This is Youtyube Clone"/>
      <ChatMessage name="Aniket Dibbe" message="This is Youtyube Clone"/>
      <ChatMessage name="Aniket Dibbe" message="This is Youtyube Clone"/>
      <ChatMessage name="Aniket Dibbe" message="This is Youtyube Clone"/>
      <ChatMessage name="Aniket Dibbe" message="This is Youtyube Clone"/> */}
      {chatMessages.map((c,i)=> <ChatMessage key={i} name={c.name} message={c.message}/>)}
      
    </div>
  )
}

export default LiveChat
