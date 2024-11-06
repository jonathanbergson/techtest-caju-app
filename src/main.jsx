import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "@/components/ErrorPage.jsx";
import RootPage from "@/modules/contact/pages/RootPage.jsx";
import DefaultPage from "@/modules/contact/pages/DefaultPage.jsx";
import CreatePage from "@/modules/contact/pages/CreatePage.jsx";
import DetailPage from "@/modules/contact/pages/DetailPage.jsx";
import EditContact from "@/modules/contact/pages/EditPage.jsx";
import ContactService from "@/modules/contact/services/contact.js";
import '@/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: ContactService.getContacts,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "contacts/create",
        element: <CreatePage />,
        action: ContactService.createContact,
      },
      {
        path: "contacts/:contactId",
        element: <DetailPage />,
        loader: ContactService.getContact,
        action: ContactService.updateContactFavorite,
        errorElement: <ErrorPage />,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: ContactService.getContact,
        action: ContactService.updateContact,
      },
      {
        path: "contacts/:contactId/destroy",
        action: ContactService.deleteContact,
        errorElement: <ErrorPage />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
