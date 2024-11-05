import {redirect} from "react-router-dom";

export default {
  async getContacts({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");

    const response = q
        ? await fetch(`http://localhost:3000/api/contacts?q=${q}`)
        : await fetch(`http://localhost:3000/api/contacts`)

    const contacts = await response.json();
    return { contacts, q };
  },

  async getContact({ params }) {
    const id = params.contactId;
    const response = await fetch(`http://localhost:3000/api/contacts/${id}`);
    const contact = await response.json();
    return { contact };
  },

  async createContact({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const response = await fetch("http://localhost:3000/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const contact = await response.json();
    return redirect(`/contacts/${contact.id}`);
  },

  async updateContact({ request, params }) {
    const id = params.contactId;
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });

    return redirect(`/contacts/${params.contactId}`);
  },

  async updateContactFavorite({ request, params }) {
    const id = params.contactId;
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorite: updates.favorite === "true",
      }),
    });

    return redirect(`/contacts/${params.contactId}`);
  },

  async deleteContact({ params }) {
    const id = params.contactId;
    await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: "DELETE",
    });
    return redirect("/");
  },
}
