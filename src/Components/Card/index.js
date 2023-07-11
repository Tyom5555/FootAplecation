import React from 'react'
import CardItem from '../CardItem'

export default function Card({items}) {
  return (
    <div className='card'>
      {
        items.map((elm, i) =>{
          return <CardItem key={i} item={elm}/>
        })
      }
    </div>
  )
}
