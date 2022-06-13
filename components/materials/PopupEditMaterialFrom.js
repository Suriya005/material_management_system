import React from 'react'

export default function PopupEditMaterialFrom(props) {
  return (props.tringer) ? (
    <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center border-2 bg-slate-200'>
        <div className='relative p-10 w-full max-w-64'>
            <button className='absolute top-1 right-1'></button>
            {props.children}
        </div>
    </div>
  ): ""
}
