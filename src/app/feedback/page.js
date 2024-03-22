// pages/review/[email].js
import React from "react";
import getContact from "../../../services/getContact";

export default function ReviewPage({ contact }) {
  console.log(" hello", contact);
  return (
    <div>
      <div
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img src="..." className="rounded me-2" alt="..." />
          <strong className="me-auto">{contact.name}</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{contact.message}</div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Fetch contacts data
  const contacts = await getContact();

  // Generate static paths based on contact email
  const paths = contacts.map((contact) => ({
    params: { email: contact.email },
  }));

  return {
    paths,
    fallback: true, // true means other paths will not result in 404, ISR will handle them
  };
}

export async function generateStaticProps({ params }) {
  // fetch contact data based on the provided email
  const contacts = await getContact();

  // filter the contact based on the provided email
  const contact = contacts.find((c) => c.email === params.email);

  return {
    props: {
      contact,
    },
    // regenerate the page every 60 seconds
    revalidate: 60,
  };
}
