import React, { useEffect, useState } from 'react'
import { HAMBURGER_MENU, USER_ICON, VIDEO_HEADER_IMG, YOUTUBE_SEARCH_API } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';


const Head = () => {

  // const[searchQuery,setSearchQuery] = useState("");


  // useEffect(()=>{
  //   //API call
  //   console.log(searchQuery);

  //   // make an api call after every key press
  //   // but if the difference between 2 API calls is <200ms
  //   // decline the API call
  //   getSearchSuggestions();
  // },[searchQuery])

  // const getSearchSuggestions = async () =>{
  //   const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //   const json = await data.json;
  //   console.log(json);
  // };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img 
        onClick={()=>toggleMenuHandler()}
        className='mt-8 h-10 cursor-pointer' src={HAMBURGER_MENU} alt='hamburger-menu' />
        <a href="/">
        <img className='mx-8 w-36' src={VIDEO_HEADER_IMG} alt='icon-img' />
        </a>
        </div>
        <div className='col-span-10 mt-10 text-center'>
          
            <input 
            className=' border-black border w-1/4 rounded-l-xl px-1 py-1' type="text"
            // value={searchQuery}
            // onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <button className='border border-gray-400 rounded-r-2xl px-1 py-1 bg-gray-200'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img className='mt-9 h-10' src={USER_ICON} alt='user-icon'/>
        </div>
    </div>
   
  )
}

export default Head