import { useNavigate } from "react-router-dom";
import FormContact from "@/modules/contact/components/FormContact.jsx";

export default function CreatePage() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <FormContact
      onCancel={handleCancel}
    />
  );
}
