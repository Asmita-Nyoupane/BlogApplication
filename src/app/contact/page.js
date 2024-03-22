"use client";
import { useState, useEffect } from "react";
import { submitContactForm } from "../../../services/submitContact";
export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { name, email, message };
    try {
      const result = await submitContactForm(data);

      if (result) {
        setShowAlert(true); // show alert on successful submission
      }

      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  return (
    <>
      <h1 className=" container me-4 mt-3 center">Contact Form</h1>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Thank you for contacting us!
        </div>
      )}
      <form onSubmit={handleSubmit} method="POST">
        <div className=" container mb-3 ">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />

          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingTextarea">Message</label>
          <textarea
            className="form-control"
            placeholder="Leave a message here"
            id="floatingTextarea"
            name="message"
            value={message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
