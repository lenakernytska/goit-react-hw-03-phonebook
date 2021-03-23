import React from "react";
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

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

Filter.propTypes = {
  value: PropTypes.string,
  onFilterContact: PropTypes.func.isRequired,
};

export default Filter;