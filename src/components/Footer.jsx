import React from 'react'

const Footer = ({planner}) => {

if (!planner.length)
  return (
    <div className='stats'>

    <em>Start adding items to your packing list...</em>
    {/* <em>You have (x) ites in your list and have packed (x) (x%)</em>  */}

    </div>
  )

const packedItem = planner.length
const calculatedPacked = planner.filter(item => item.packed).length
const percentagePacked = Math.round(calculatedPacked/packedItem * 100)

  return (
   <div className='stats'>

   {
     percentagePacked === 100 ? <em>You are all packed items and ready to go</em> : <em>You have ({packedItem}) items in your list and have packed ({calculatedPacked}) ({percentagePacked}%)</em>
   }
      </div>
  )


  }

export default Footer