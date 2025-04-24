import React, { useState } from 'react'
import Header from './Components/Header'
import Search from './Components/Search'
import Content from './Components/Content'
import Addlist from './Components/Addlist'
const App = () => {
  const [time,setTime]=useState("")
  const [search,setSearch]=useState("")
  const [newitems,setNewItems]=useState("")
  const [items,setItems]=useState(JSON.parse(localStorage.getItem("user")))

  function handeCheck(id){
   const newList=items.map((ele)=>ele.id===id?{...ele,checked:!ele.checked}:ele)
   setItems(newList)
   localStorage.setItem("user",JSON.stringify(newlist))

  }
  function handeldelete(id){
    const newList=items.filter((ele)=>ele.id!==id)
    setItems(newList)
    localStorage.setItem("user",JSON.stringify(newlist))

    
  }
  function handeSubmit(ele,time){
    ele.preventDefault();
    handeladd(newitems,time);
    console.log(time);
    setNewItems("")
    
  }
  function handeladd(ele,time){
    const id=items.length? items[items.length-1].id+1:1;
    const newitems={id,prodect:ele,checked:false,time:time};
    const newlist=[...items,newitems]
    setItems(newlist)
    localStorage.setItem("user",JSON.stringify(newlist))
  }

  return (
    <div id='container'>
      <Header heading="To Do list"/>
     <div id='aside'>
     <Search 
      search={search}
      setSearch={setSearch}
      />
      <Addlist 
      newitems={newitems}
      setNewItems={setNewItems}
      handeSubmit={handeSubmit}
      time={time} setTime={setTime}
      />
     </div>
      <Content items={items.filter(ele=>(ele.prodect.toLowerCase()).includes(search.toLowerCase()))} 
       handeCheck={handeCheck} 
       handeldelete={handeldelete}/>
    </div>
  )
}

export default App