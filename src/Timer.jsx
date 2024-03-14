import React from 'react'

function Timer({time}) {
  return (
    <div>
      <h2>{Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}</h2>
    </div>
  )
}

export default Timer
