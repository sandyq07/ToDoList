import React from 'react'

const Addlist = ({newitems,setNewItems,handeSubmit,time,setTime}) => {
  return (
    <div id='addlist'>
      <form action="" onSubmit={handeSubmit}>
      <input 
      type="text" 
      id="input" 
      placeholder='Add items...'
      required 
      value={newitems} 
      onChange={(ele)=>setNewItems(ele.target.value)}/>
      <input type="time" id='input' value={time} onChange={(ele)=>setTime(ele.target.value)}/>
      <button id='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Addlist