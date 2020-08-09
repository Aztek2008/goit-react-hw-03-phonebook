import React from "react";

export default function ContactItem({ name, number, children }) {
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      {children}
    </li>
  );
}
