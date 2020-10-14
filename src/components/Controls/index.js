import React, { useContext } from 'react'
import IntersectionContext from '../../context/intersection'

const Controls = () => {
  const { setIntersectionState } = useContext(IntersectionContext)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
      <h2>Controls</h2>
      <button type="button" onClick={() => setIntersectionState('STOP')}>
        🔴 set to STOP
      </button>
      <button type="button" onClick={() => setIntersectionState('GO')}>
        🟢 set to GO
      </button>
      <button type="button" onClick={() => setIntersectionState('OFF')}>
        ⚠️ set to OFF
      </button>
    </div>
  )
}

export default Controls
