import React from 'react'

const Buttons = ({btnName}) => {
  return (
    <button className='border-2 px-4 py-2 rounded-xl flex-shrink-0' onClick={()=>{
        console.log(btnName);
    }}>{btnName}</button>
  )
}

export default Buttons