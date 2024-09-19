import React from 'react'

const Heading = (props) => {
  return (
    <div className='head'>
      {props.name}  {/**if u dont want use props just destructure it i.e instead of props set {name} and put {name} in div */}
    </div>
  )
}

export default Heading
