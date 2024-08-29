import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 mt-3 mx-2 font-medium bg-gray-100 rounded-xl'>{name}</button>
    </div>
  )
}

export default Button