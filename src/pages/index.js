import React, { useState } from 'react'
import Intersection from '../components/Intersection'
import IntersectionContext from '../context/intersection'

export default function Home() {
  const [intersectionState, setIntersectionState] = useState('OFF')

  return (
    <div>
      {/* not here */}
      <IntersectionContext.Provider value={{ intersectionState, setIntersectionState }}>
        {/* here i can access data from the provider */}
        <h1 style={{ textAlign: 'center' }}>🚦Intersection Controls🚦</h1>
        <Intersection />
      </IntersectionContext.Provider>
    </div>
  )
}
