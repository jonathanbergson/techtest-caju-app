import {Form} from "react-router-dom";
import PropTypes from "prop-types";

export default function FormContact({ contact = {}, onCancel, onSubmit }) {
  const handleCancel = () => {
    if (typeof onCancel === 'function') onCancel();
  }
  const handleSubmit = () => {
    // TODO: validate form
    if (typeof onSubmit === 'function') onSubmit();
  }

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="firstName"
          defaultValue={contact?.firstName}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="lastName"
          defaultValue={contact?.lastName}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@nickname"
          defaultValue={contact?.twitter}
        />
      </label>
      {/*<label>*/}
      {/*  <span>Avatar URL</span>*/}
      {/*  <input*/}
      {/*    placeholder="https://example.com/avatar.jpg"*/}
      {/*    aria-label="Avatar URL"*/}
      {/*    type="text"*/}
      {/*    name="avatar"*/}
      {/*    defaultValue={contact?.avatar}*/}
      {/*  />*/}
      {/*</label>*/}
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="button" onClick={handleCancel}>Cancel</button>
        <button type="submit" onClick={handleSubmit}>Save</button>
      </p>
    </Form>
  )
}

FormContact.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    twitter: PropTypes.string,
    avatar: PropTypes.string,
    notes: PropTypes.string,
  }),
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
}
