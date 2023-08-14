import React from 'react'

function Card(props) {
  return (
    <div className={`bg-white p-5 rounded-xl mt-7 ${props.addClass}`}>{props.children}</div>
  )
}

export default Card