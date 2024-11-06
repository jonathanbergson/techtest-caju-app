import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

export default function NavList({ contacts = [] }) {
  const navLinkClassName = ({isActive, isPending}) => {
    if (isActive) return "active"
    if (isPending) return "pending"
    return ""
  }

  if (contacts.length) {
    return (
      <nav>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <NavLink
                to={`contacts/${contact.id}`}
                className={navLinkClassName}
              >
                {contact.firstName || contact.lastName ? (
                  <>{contact.firstName} {contact.lastName}</>
                ) : (
                  <i>No Name</i>
                )}{" "}
                {contact.favorite && <span>*</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <nav>
      <p>No contacts</p>
    </nav>
  )
}

NavList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    })
  ),
}
