import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessages, generateRandomNames} from '../utils/helper';

const LiveChat = () => {

  const[liveMessage,setLiveMessage] = useState();

  const dispatch = useDispatch();

  const chatMessages = useSelector(store=>store.chat.messages);

  useEffect(()=>{

    const i = setInterval(()=>{
    dispatch(addMessage({
      name:generateRandomNames(),
      message:generateRandomMessages(20),
    }));
    },1500);

    return () =>clearInterval(i);

  },[])


  return (
    <>
    <div className=' mx-2 p-2 border w-full h-[600px] rounded-sm overflow-y-scroll flex flex-col-reverse'>
      <div>{chatMessages.map((c,i)=>(
      <ChatMessage key={i} name={c.name} message={c.message}/>
      ))}
      </div>
      </div>
      <form className='p-2 ml-2 w-full border  flex' 
      onSubmit={(e)=>{e.preventDefault()
      dispatch(addMessage({
        name:"Me",
        message:liveMessage,
      }))
      setLiveMessage("");
      }}>
      <img className='h-8' src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' alt='user-icon-live'/>
      <input className='w-96 p-1 shadow-lg' type='text' value={liveMessage} onChange={(e)=>{
        setLiveMessage(e.target.value)
      }}/>
      <button className='p-1 font-semibold shadow-sm mx-2 bg-blue-200 rounded-lg'>Submit</button>
    </form>
    </>
  )
}

export default LiveChat