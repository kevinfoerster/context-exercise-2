import React from 'react'
import Controls from '../Controls'
import Road from '../Road'
import styles from './styles.module.css'

const Intersection = () => (
  <div className={styles.grid} style={{ position: 'relative' }}>
    <div />
    <Road rotation="90deg" />
    <div />
    <Road invert rotation="0deg" />
    <Road center />
    <Road invert rotation="180deg" />
    <div />
    <Road rotation="270deg" />
    <div />
    <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
      <Controls />
    </div>
  </div>
)

export default Intersection
