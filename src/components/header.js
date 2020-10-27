import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import VGlogo from "../svgs/VG_logo.svg"

import componentStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={componentStyles.header}>
    <Link
      to="/"
      tabIndex="0"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <VGlogo style={{display: `block`, width: `100%`, maxWidth: `30rem`, height: `auto`, margin: `0 auto`}} />
    </Link>

    <nav style={{display: `block`, width: `100%`, maxWidth: `25rem`, height: `auto`, margin: `0 auto`}} >
      <ul>
        <li role="none">
          <Link to="/participants/" tabIndex="0">Participants</Link>
        </li>
        <li role="none">
          <Link to="/" tabIndex="0">Projects</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
