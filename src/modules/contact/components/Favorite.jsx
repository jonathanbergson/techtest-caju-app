import {Form} from "react-router-dom";
import PropTypes from "prop-types";

export default function Favorite({ isFavorite = false }) {
  return (
    <Form method="put">
      <button
        name="favorite"
        value={!isFavorite}
        aria-label={
          isFavorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

Favorite.propTypes = {
  isFavorite: PropTypes.bool,
};
