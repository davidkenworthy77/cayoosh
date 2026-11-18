"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

/**
 * Same fields as the Squarespace form. Squarespace handled delivery itself, so
 * for now submitting opens the visitor's email app with the message filled in.
 * TODO: replace with a real form backend (API route + email service).
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = `${data.get("fname")} ${data.get("lname")}`.trim();
    const subject = `Website enquiry from ${name}`;
    const body = `${data.get("message")}\n\n${name}\n${data.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form-name">
        <legend>Name</legend>
        <label>
          <span className="form-caption">
            First Name <span className="form-required">(required)</span>
          </span>
          <input type="text" name="fname" autoComplete="given-name" required />
        </label>
        <label>
          <span className="form-caption">
            Last Name <span className="form-required">(required)</span>
          </span>
          <input type="text" name="lname" autoComplete="family-name" required />
        </label>
      </fieldset>
      <label className="form-field">
        <span>
          Email <span className="form-required">(required)</span>
        </span>
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label className="form-field">
        <span>
          Message <span className="form-required">(required)</span>
        </span>
        <textarea name="message" required />
      </label>
      <div className="form-actions">
        <button type="submit" className="button button--medium">
          SUBMIT
        </button>
      </div>
      {sent && (
        <p className="form-note" role="status">
          Your email app should have opened with your message. If it didn’t,
          email us at {site.email}.
        </p>
      )}
    </form>
  );
}
