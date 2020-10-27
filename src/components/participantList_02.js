// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import componentStyles from "./participantList.module.scss"

const ParticipantList = () => (
    <section>
        <ul className={componentStyles.list}>

            <li>
                <h3>Amanda Low</h3>
                <a href="" target="_blank" rel="noreferrer">Moving Without a Trace (When Everything is being Tracked)</a>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Amanda Gutierrez Gomes</h3>
                <p>With You in Distance (Contigo a la Distancia)</p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Caroline Hill </h3>
                <p>The Incarcerated City</p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Helen Chen</h3>
                <p>I took a walk, and only found places I’ve already known </p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Laura Nelson Hamilton </h3>
                <p>A Letter to My Niece, Describing the World that Could Be</p>
            </li>

            <li>
                <h3>Laurence Butet-Roch</h3>
                <a href="" target="_blank" rel="noreferrer">Slow Net Toolkit </a>
            </li>

            <li>
                <h3>Lena Phillips</h3>
                <a href="https://www.lena.virtualgrounds.zone/" target="_blank" rel="noreferrer">Towards Just Urban Futures: The Little Black Book of Design Prompts to Survive the Urban Apocalypse</a>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Marie Sotto</h3>
                <p>Scarborough Always</p>
            </li>

            <li>
                <h3>Milan Gokhale</h3>
                <a href="https://www.milan.virtualgrounds.zone/" target="_blank" rel="noreferrer">It's Time to Reject the Myth of Multiculturalism that Canada Uses to Cover Up Racism</a>
            </li>

            <li>
                <h3>Monika Lemke</h3>
                <a href="" target="_blank" rel="noreferrer">Proposal for the Commons Space</a>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Roya DelSol</h3>
                <p>BLACK_BOX</p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Sara Kay Maston Low</h3>
                <p>Worm’s Eye View</p>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Shaina Agbayani</h3>
                <p>Digital Dambana</p>
            </li>

        </ul>
    </section>
)


export default ParticipantList