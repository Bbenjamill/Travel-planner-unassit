import React from 'react'
import { useState } from 'react'
const Input = ({planner, setPlanner}) => {

 const [input, setInput] = useState('')
 const [select, setSelect] = useState([])


 const handleSubmit = (e) => {
  e.preventDefault()
  if(!input) return alert("Please input a valid item")
  const newItem = {input, select, packed:false, id: Date.now()}
  setPlanner([... planner, newItem])
  setInput("")
  setSelect (1)
 }

  return (
    <div>
     
     <form onSubmit={handleSubmit} className='add-form'>
     <h3>What do you need for the trip?</h3>
     <select onChange={(e) => setSelect(e.target.value)} value={select}> {Array.from({length:20}, (_, i) => i+1).map(num => <option key={num}>{num}</option>)} </select>
     
     <input onChange={(e) => setInput(e.target.value)}  value={input} type="text" placeholder='items' />
     <button>Add</button>

     <p>{select}{input}</p>
     </form>
    </div>
  )
}

export default Input