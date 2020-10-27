// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import ClassNames from 'classnames'

import Instagram from "../svgs/instagram.svg"
import Twitter from "../svgs/twitter.svg"
import CCFA from "../svgs/CCFA__logo.svg"
import DJL from "../svgs/logo_DJI-text.svg"
import TSV from "../svgs/TSV_Logo.svg"

import componentStyles from "./footer.module.scss"

const Footer = () => (
  <footer className={componentStyles.footer}>
    <nav>
      <ul>
        <li role="none" className={componentStyles.lg}>
            <CCFA />
        </li>

        <li role="none" className={componentStyles.med}>
            <DJL />
        </li>

        <li role="none" className={ClassNames(componentStyles.med, componentStyles.border)}>
            <TSV />
        </li>

        <li role="none" className={componentStyles.sm}>
            <a href="https://twitter.com/digitaljustlab" target="_blank" rel="noreferrer">
                <Twitter />
            </a>
        </li>

        <li role="none" className={componentStyles.sm}>
            <a href="https://www.instagram.com/digitaljustlab/"  target="_blank" rel="noreferrer">
                <Instagram />
            </a>
        </li>

      </ul>
    </nav>
  </footer>
)

// Footer.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Footer.defaultProps = {
//   siteTitle: ``,
// }

export default Footer