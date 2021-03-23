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
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;