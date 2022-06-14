import React from 'react'

export default function DeleteButton(props) {

  return (
    <button onClick={props.deleteMaterial} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
    ลบ
  </button>
   
  )
}
