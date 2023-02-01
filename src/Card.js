import React, { useState } from 'react'

const UseCard = ({ id, img, spanish, english }) => {
  // let vocab = { spanish }
  // console.log(useState())
  // const value = useState()[0]
  // const handler = useState()[1]
  // console.log(value, handler)

  const [text, setText] = useState(english)
  const clickHandler = () => {
    if (text === english) {
      setText(spanish)
    } else {
      setText(english)
    }
  }
  return (
    <article className='card' onClick={clickHandler}>
      <img src={img} alt='' />
      <h1>{text}</h1>
    </article>
  )
}

export default UseCard
