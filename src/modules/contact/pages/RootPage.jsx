import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom"
import Sidebar from "@/components/Sidebar.jsx"
import NavList from "@/modules/contact/components/NavList.jsx"
import Filter from "@/modules/contact/components/Filter.jsx"

export default function RootPage() {
  const { contacts } = useLoaderData()
  const navigation = useNavigation()

  return (
    <>
      <Sidebar>
        <div>
          <Filter />

          <Link  to="/contacts/create">
            <button type="button">New</button>
          </Link>
        </div>

        <NavList contacts={contacts} />
      </Sidebar>

      <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
        <Outlet />
      </div>
    </>
  )
}
