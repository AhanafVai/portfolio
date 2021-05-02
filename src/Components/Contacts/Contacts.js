import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mgerozyq");
  if (state.succeeded) {
    return <p>Thanks for Connecting</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label htmlFor="name" class="form-label">
          Name
        </label>
        <input
          class="form-control"
          id="name"
          type="text"
          name="text"
          required
        />
      </div>
      <div class="mb-3">
        <label htmlFor="email" class="form-label">
          Email Address
        </label>
        <input class="form-control" id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div class="mb-3">
        <label htmlFor="message" class="form-label">
          Message
        </label>
        <textarea class="form-control" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        class="btn btn-outline-success"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

const Contacts = () => {
  return (
    <div id="contact" className="container text-md-start contact-section ">
      <div
        style={{ height: "600px" }}
        className="align-items-center d-flex row"
      >
        <h1>Contact Me!</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacts;
