import {Form, Link, useLoaderData, useNavigation} from "react-router-dom"
import Avatar from "@/modules/contact/components/Avatar.jsx"
import Info from "@/modules/contact/components/Info.jsx"
import {useEffect, useState} from "react"

export default function DetailPage() {
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()
  useEffect(() => {
    if (navigation.state === "loading") setIsLoading(true)
    else setIsLoading(false)
  }, [navigation])

  const { contact } = useLoaderData()
  const handleDelete = (event) => {
    if (!confirm("Please confirm you want to delete this record."))
      event.preventDefault()
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div id="contact">
      <Avatar
        alt={contact.firstName}
        id={contact.id}
        src={contact.avatar}
      />

      <div>
        <Info contact={contact} />

        <div>
          <Link to={`/contacts/${contact.id}/edit`}>
            <button type="submit">Edit</button>
          </Link>
          <Form
            method="post"
            action="destroy"
            onSubmit={handleDelete}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}
