// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import componentStyles from "./participantList.module.scss"

const ParticipantList = () => (
    <section>
        <ul className={componentStyles.list}>

            <li className={componentStyles.disabled}>
                <h3>Amanda Low</h3>
                <p>Moving Without a Trace (When Everything is being Tracked)</p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Amanda Gutierrez Gomes</h3>
                <p>With You in Distance (Contigo a la Distancia)</p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Caroline Hill </h3>
                <p>The incarcerated city</p>
            </li>

            {/* <li>
                <h3>Camila Diaz-Varela</h3>
                <p>Psst… Pass it On - an Audio Story on Digital Technology and Activism in the past, present, and possible future </p>
            </li> */}

            <li className={componentStyles.disabled}>
                <h3>Helen Chen</h3>
                <p>I took a walk, and only found places I’ve already known </p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Laura Nelson Hamilton </h3>
                <p>Imagining a Digital Public and new forms of public goods through creative engagement</p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Laurence Butet-Roch</h3>
                <p>Slow Net Toolkit </p>
            </li>

            <li>
                <h3>Lena Phillips</h3>
                <a href="">Towards Just Urban Futures: The Little Black Book of Design Prompts to Survive the Urban Apocalypse</a>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Marie Sotto</h3>
                <p>Toronto Stories</p>
            </li>

            <li>
                <h3>Milan Gokhale</h3>
                <a href="">The Male Consent Project</a>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Monika Lemke</h3>
                <p>'Proposal for the Commons + Space'</p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Roya DelSol</h3>
                <p>BLACK_BOX</p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Sara Kay Maston Low</h3>
                <p>Worm’s Eye View / “worm net” / Virtual Shovel</p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Shaina Agbayani</h3>
                <p>Digital Dambana</p>
            </li>

        </ul>
    </section>
)


export default ParticipantList