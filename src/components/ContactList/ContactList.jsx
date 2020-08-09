import React from "react";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul className={styles.ContactList}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li className={styles.ContactItem} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              id={contact.id}
              className="Button"
              type="submit"
              onClick={onRemoveContact}
            >
              Remove Contact
            </button>
          </li>
        ))
      ) : (
        <p style={{ margin: 0, fontSize: 14, color: "grey" }}>No match...</p>
      )}
    </ul>
  );
}
