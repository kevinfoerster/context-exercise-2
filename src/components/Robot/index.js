import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import IntersectionContext from '../../context/intersection'
import RobotSVG from './Robot'
import './styles.css'

const Robot = ({ invert }) => {
  const { intersectionState } = useContext(IntersectionContext)

  let state

  if (invert) {
    switch (intersectionState) {
      case 'STOP':
        state = 'GO'
        break
      case 'GO':
        state = 'STOP'
        break
      default:
        state = 'OFF'
        break
    }
  } else {
    state = intersectionState
  }
  return (
    <div>
      <RobotSVG state={state} />
    </div>
  )
}

Robot.propTypes = {
  invert: PropTypes.bool,
}

Robot.defaultProp = {
  invert: false,
}

export default Robot
