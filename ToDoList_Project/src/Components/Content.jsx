import React from 'react'

const Content = ({items,handeCheck,handeldelete}) => {
  return (
    <div id='content'>
      <ul>
        {
          items.map((ele)=><li key={ele.id} className='item'>
            <div className ="checkbox-wrapper-56">
              <label className="container">
                <input checked={ele.checked} type="checkbox" onChange={()=>handeCheck(ele.id)}></input>
                <div className="checkmark"></div>
              </label>
            </div>
          <label htmlFor="" id='prodect' style={ele.checked?{textDecoration:"line-through"}:null}>{ele.prodect}</label>
          <label htmlFor="" id='prodect' style={ele.checked?{textDecoration:"line-through"}:null}>{ele.time}</label>
          
          <button className="button-86" role="button" onClick={()=>handeldelete(ele.id)}>Delete</button>
          </li>)
        }
      </ul>
    </div>
  )
}

export default Content