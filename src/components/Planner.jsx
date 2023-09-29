import React from 'react'

const Planner = ({planner, setPlanner}) => {
 const handleClear = () =>{
  setPlanner([])
 }
 const handleDelete = (id) => {
  setPlanner(planner.filter(item => item.id !== id))
 }
 const handleToggle = (id) => {
  // console.log("I am toggle");
  setPlanner(planner.map(item => item.id === id ? {...item, packed : !item.packed} : item))
 }

  return (
    <div className='list'>
    
    {
     <ul>
      {
      planner.map(item => 
       
       <li key={item.id}>
        <input type="checkbox" value={item.packed} onChange={() => handleToggle(item.id)}/>
        <span style={item.packed ? {textDecoration:"line-through"} : {}} > {item.select} {item.input}</span>
        <button onClick={() => handleDelete(item.id)}>❌</button>
       </li>
       )}
     </ul>
    }

    <button onClick={handleClear}>Clear All</button>



    </div>
  )
}

export default Planner