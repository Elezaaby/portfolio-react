import React from 'react'

const AnimationLetter = ({ classLetter, array, index }) => {
  return (
    <span>
      {array.map((char, i) => (
        <span key={char + i} className={`${classLetter} _${i + index} `} >
          {char}
        </span>
      ))
      }
    </ span>
  )
}

export default AnimationLetter