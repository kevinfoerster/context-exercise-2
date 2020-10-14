import PropTypes from 'prop-types'
import React from 'react'
import Robot from '../Robot'
import roadSign from './assets/road.svg'

const Road = ({ center, invert, rotation }) => (
  <div
    style={{
      backgroundColor: '#4A4A4A',
      transform: `rotate(${rotation})`,
    }}
  >
    <div
      style={{
        position: 'relative',
        display: 'flex',
        backgroundColor: '#4A4A4A',
      }}
    >
      {!center && (
        <>
          <img
            src={roadSign}
            style={{ width: '100%', height: '50%' }}
            alt="road sign"
          />
          <div style={{ position: 'absolute', top: '-10px', right: 0 }}>
            <Robot invert={invert} />
          </div>
          <div style={{ position: 'absolute', bottom: '-10px', right: 0 }}>
            <Robot invert={invert} />
          </div>
        </>
      )}
    </div>
  </div>
)

Road.propTypes = {
  center: PropTypes.bool,
  invert: PropTypes.bool,
  rotation: PropTypes.oneOf([0, 90, 180, 270]),
}

Road.defaultProps = {
  center: false,
  invert: false,
  rotation: 0,
}

export default Road
