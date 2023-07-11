import React from 'react'

export default function Category({onFilter}) {
  const categories = ["All", "Pizza", "Fruits", "Drink", "Coffi"]
  return (
    <>
      <ul className='horizontal'>
        {
          categories.map((elm, i ) => <li onClick={() => onFilter(elm)} key = {i}>{elm}</li> )
        }
      </ul>
    </>
  )
}
