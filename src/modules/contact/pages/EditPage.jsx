import { useLoaderData, useNavigate } from "react-router-dom";
import FormContact from "@/modules/contact/components/FormContact.jsx";

export default function EditPage() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <FormContact
      contact={contact}
      onCancel={handleCancel}
    />
  );
}
