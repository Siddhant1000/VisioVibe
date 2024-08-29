import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
       <img className='h-8' src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' alt='user-icon-live'/>
       <span className='font-bold px-2'>{name}</span>
       <span>{message}</span>
    </div>
  )
}

export default ChatMessage