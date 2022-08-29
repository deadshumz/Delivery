import React from 'react'
import { Shuffle } from 'react-bootstrap-icons';
import styles from './ShuffleButton.module.css'

export default function ShuffleButton({className, callback}) {
  return (
    <div onClick={callback} className={styles.ShuffleButton + ' ' + className}><Shuffle/></div>
  )
}
