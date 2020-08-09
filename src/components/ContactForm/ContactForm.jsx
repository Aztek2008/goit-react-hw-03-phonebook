import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import "../../index.css";
import NumberFormat from "react-number-format";
import { v4 as uuidv4 } from "uuid";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    // CREATE CONTACT
    this.props.onSubmit({
      id: uuidv4(),
      name: name,
      number: number,
    });

    // CLEAR INPUT
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className={styles.ContactForm} onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            placeholder="Name..."
            autoFocus
          />
        </label>

        <label>
          <p>Number</p>
          <NumberFormat
            format="(###) ###-####"
            mask=""
            name="number"
            placeholder="Phone Number..."
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>

        <button className="Button" type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
