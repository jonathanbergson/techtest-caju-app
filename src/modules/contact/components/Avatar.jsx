import * as PropTypes from "prop-types"

export default function Avatar({ alt = "Avatar image", id = "123456", src }) {
  const source = src || `https://robohash.org/${id}.png?size=200x200`

  return (
    <div>
      <img
        alt={alt}
        src={source}
      />
    </div>
  )
}

Avatar.propTypes = {
  alt: PropTypes.string,
  id: PropTypes.string,
  src: PropTypes.string,
}
