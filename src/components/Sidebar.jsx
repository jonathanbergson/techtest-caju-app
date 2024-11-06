import PropTypes from "prop-types"

export default function Sidebar({children}) {
  return (
    <div id="sidebar">
      {children}
    </div>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node,
}
