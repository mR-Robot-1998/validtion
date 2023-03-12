import React from "react";
import "./Form.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameData: "",
      lastNameData: "",
      emailData: "",

      submitted: false,

      allValid: false,
    };
  }
  handelSubmitted(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
    if (
      this.state.firstNameData.length !== 0 &&
      this.state.lastNameData.length !== 0 &&
      this.state.emailData.length !== 0
    ) {
      this.setState({
        allValid: true,
      });
      setTimeout(() => {
        this.setState({
          allValid: false,
        });
      }, 5000);
    }
  }
  handelFirstName(event) {
    this.setState({
      firstNameData: event.nativeEvent.target.value,
    });
  }
  handelLastName(event) {
    this.setState({
      lastNameData: event.nativeEvent.target.value,
    });
  }
  handelEmail(event) {
    this.setState({
      emailData: event.nativeEvent.target.value,
    });
  }

  render() {
    return (
      <div className="form-container">
        <form
          className="register-form"
          onSubmit={(event) => {
            this.handelSubmitted(event);
          }}
          autoComplete="off"
        >
          {this.state.allValid === true && (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          )}

          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(event) => {
              this.handelFirstName(event);
            }}
          />
          {this.state.submitted && this.state.firstNameData.length === 0 && (
            <span id="first-name-error">Please enter a first name</span>
          )}
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(event) => {
              this.handelLastName(event);
            }}
          />
          {this.state.submitted && this.state.lastNameData.length === 0 && (
            <span id="last-name-error">Please enter a last name</span>
          )}
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(event) => {
              this.handelEmail(event);
            }}
          />
          {this.state.submitted && this.state.emailData.length === 0 && (
            <span id="email-error">Please enter an email address</span>
          )}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
