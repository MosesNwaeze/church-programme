import React, { useState } from "react";
import "./userInput.css";
import {useNavigate} from "react-router-dom"

const UserInput = (props) => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    sex: "",
  });

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    for (let key in userInput) {
      if (userInput[key] === "") {
        return alert("All fields must be filled");
      }
    }
    props.userDetails(userInput);
    alert("Your data have been captured! Thanks!");
    navigate("/");
  }

  function handleChange(event) {
    event.preventDefault();
    setUserInput((currentState) => ({
      ...currentState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="user-inputs">
      <h1>User information form</h1>
      <form className="users-form" onSubmit={handleSubmit}>
        <div className="form-groups">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            id="first-name"
            value={userInput.firstName}
            required={true}
            onChange={handleChange}
          />
        </div>

        <div className="form-groups">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            id="last-name"
            required={true}
            value={userInput.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-groups">
          <label htmlFor="dob">Date Of Birth</label>
          <input
            type="date"
            name="dob"
            placeholder="Date Of birth"
            id="dob"
            value={userInput.dob}
            required={true}
            onChange={handleChange}
          />
        </div>

        <div className="form-groups">
          <label htmlFor="sex">Sex</label>
          <select
            id="sex"
            name="sex"
            required={true}
            value={userInput.sex}
            onChange={handleChange}
          >
            <option value="">:SEX:</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="complicated">Complicated</option>
          </select>
        </div>
        <button type="submit" className="book-me" onClick={handleSubmit}>
          Book Me
        </button>
      </form>
    </div>
  );
};

export default UserInput;
