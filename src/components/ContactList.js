import React from "react";
import PropTypes from 'prop-types';
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.list}>
        {
            contacts.map(({ id, name, number }) => (
                <li
                    className={styles.item}
                    key={id}
                >{name}: {number}
                <button className={styles.button} type="button" onClick={()=>onDeleteContact(id)}>Delete</button>
                </li>
            ))
        }
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.any.isRequired
 }

export default ContactList;