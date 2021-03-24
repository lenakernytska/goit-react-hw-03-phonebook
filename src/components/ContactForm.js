import React, { Component } from "react";
import styles from './ContactForm.module.css'
import PropTypes from 'prop-types';

class ContactForm extends Component{
 static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    }

state = {
  name: '',
  number: ''
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };
    
    handleSubmit = event => {
    event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: ''})
  };
    
    render() {
        const { name, number } = this.state;
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
                    Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            onChange={this.handleChange}
          />
                </label>
                 <label className={styles.label}>
                    Number
          <input
            className={styles.input}
            type="number"
            name="number"
            value={number}
            autoComplete="off"
            onChange={this.handleChange}
          />
        </label>

        <button  className={styles.button} type="submit">Add contact</button>
      </form>
        )
    }
}




export default ContactForm;