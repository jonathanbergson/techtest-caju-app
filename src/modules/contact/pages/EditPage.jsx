import { useLoaderData, useNavigate, useSubmit } from "react-router-dom"
import FormContact from "@/modules/contact/components/FormContact.jsx"

export default function EditPage() {
  const { contact } = useLoaderData()
  const navigate = useNavigate()
  const submit = useSubmit()

  const handleCancel = () => {
    navigate(-1)
  }
  const handleSubmit = (event) => {
    submit(event.target)
  }

  return (
    <FormContact
      contact={contact}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  )
}
