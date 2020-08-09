import React from "react";
import styles from "../ContactForm/ContactForm.module.css";

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul style={{ padding: 0 }}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              id={contact.id}
              className={styles.ContactFormButton}
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
