import React from 'react'
import Category from '../Categories'

export default function Header({onFilter}) {
  return (
    <div>
      <>
      <img className='main-plc' src='' />
        <Category onFilter={onFilter}/>
      </>
    </div>
  )
}
