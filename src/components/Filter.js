import React from "react";
import styles from './Filter.module.css'

const Filter = ({ value, onFilterContact }) => {
  return (  <label className={styles.label}>
          Find contacts by Name
          <input className={styles.input}
            type="text"
            value={value}
            onChange={onFilterContact}
          />
    </label>)
}


export default Filter;