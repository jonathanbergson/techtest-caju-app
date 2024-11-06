import {Form} from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export default function FormContact({ contact = {}, onCancel = () => {}, onSubmit = () => {} }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const submit = (event) => {
    handleSubmit(() => onSubmit(event))(event)
  }

  return (
    <Form method="post" id="contact-form" onSubmit={submit}>
      <label>
        <span>First Name</span>
        <input
          aria-label="First name"
          className={errors.firstName && "input-error"}
          defaultValue={contact?.firstName}
          placeholder="First"
          type="text"
          {...register("firstName", { required: true, minLength: 3 })}
        />
      </label>
      <p className="input-error-message">{errors.firstName && <span>This field is required</span>}</p>

      <label>
        <span>Last Name</span>
        <input
          aria-label="Last name"
          className={errors.lastName && "input-error"}
          defaultValue={contact?.lastName}
          placeholder="Last"
          type="text"
          {...register("lastName", {required: true, minLength: 3})}
        />
      </label>
      <p className="input-error-message">{errors.lastName && <span>This field is required</span>}</p>

      <label>
        <span>Twitter</span>
        <input
          className={errors.twitter && "input-error"}
          defaultValue={contact?.twitter}
          placeholder="@nickname"
          type="text"
          {...register("twitter", {required: true, minLength: 3})}
        />
      </label>
      <p className="input-error-message">{errors.twitter && <span>This field is required</span>}</p>

      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>

      <p>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Save</button>
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
