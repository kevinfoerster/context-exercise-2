import React, { useState } from 'react'
import RobotSVG from '../components/Robot/Robot'

const Robot = () => {
  const [state, setState] = useState('OFF')

  return (
    <div style={{ margin: '2rem 0' }}>
      <button
        type="button"
        onClick={() => {
          setState('GO')
        }}
      >
        🟢
      </button>
      <button
        type="button"
        onClick={() => {
          setState('STOP')
        }}
      >
        🔴
      </button>
      <button
        type="button"
        onClick={() => {
          setState('OFF')
        }}
      >
        ⚠️
      </button>

      <RobotSVG state={state} style={{ transform: 'rotate(270deg)' }} />
      <RobotSVG state="OFF" style={{ transform: 'rotate(270deg)' }} />
      <RobotSVG state="GO" style={{ transform: 'rotate(270deg)' }} />
      <RobotSVG state="STOP" style={{ transform: 'rotate(270deg)' }} />
    </div>
  )
}

export default Robot
