import PropTypes from "prop-types";
import Favorite from "@/modules/contact/components/Favorite.jsx";

export default function Info({ contact }) {
  return (
    <>
      <h1>
        {contact.firstName || contact.lastName ? (
          <>
            {contact.firstName} {contact.lastName}
          </>
        ) : (
          <i>No Name</i>
        )}{" "}
        <Favorite isFavorite={contact.favorite}/>
      </h1>

      {contact.twitter && (
        <p>
          <a
            target="_blank"
            href={`https://twitter.com/${contact.twitter}`}
          >
            {contact.twitter}
          </a>
        </p>
      )}

      {contact.notes && <p>{contact.notes}</p>}
    </>
  )
}

Info.propTypes = {
  contact: PropTypes.shape({
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    favorite: PropTypes.bool,
    twitter: PropTypes.string,
    notes: PropTypes.string,
  }).isRequired,
}
