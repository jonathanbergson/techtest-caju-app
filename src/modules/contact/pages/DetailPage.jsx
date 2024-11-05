import { Form, useLoaderData } from "react-router-dom";
import Avatar from "@/modules/contact/components/Avatar.jsx";
import Info from "@/modules/contact/components/Info.jsx";

// export async function action({ request, params }) {
//   const formData = await request.formData();
//   return updateContact(params.contactId, {
//     favorite: formData.get("favorite") === "true",
//   });
// }

export default function DetailPage() {
  const { contact } = useLoaderData();
  const handleDelete = (event) => {
    if (!confirm("Please confirm you want to delete this record."))
      event.preventDefault();
  };

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
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
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
  );
}
