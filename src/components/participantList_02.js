// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import componentStyles from "./participantList.module.scss"

const ParticipantList = () => (
    <section>
        <ul className={componentStyles.list}>

            <li>
                <h3>Amanda Low</h3>
                <a href="http://www.amandalow.virtualgrounds.zone/" target="_blank" rel="noreferrer">Moving Without a Trace (When Everything is being Tracked)</a>
            </li>

            <li>
                <h3>Amanda Gutierrez Gomes</h3>
                <a href="http://www.amandag.virtualgrounds.zone/" target="_blank" rel="noreferrer">With You in Distance (Contigo a la Distancia)</a>
            </li>

            <li>
                <h3>Caroline Hill </h3>
                <a href="http://www.caroline.virtualgrounds.zone/" target="_blank" rel="noreferrer">The Incarcerated City</a>
            </li>

            <li>
                <h3>Helen Chen</h3>
                <a href="http://www.helen.virtualgrounds.zone/" target="_blank" rel="noreferrer">I took a walk, and only found places I’ve already known</a>
            </li>

            <li>
                <h3>Laura Nelson Hamilton </h3>
                <a href="http://www.laura.virtualgrounds.zone/" target="_blank" rel="noreferrer">A Letter to My Niece, Describing the World that Could Be</a>
            </li>

            <li>
                <h3>Laurence Butet-Roch</h3>
                <a href="http://www.laurence.virtualgrounds.zone/" target="_blank" rel="noreferrer">Slow Net Toolkit </a>
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
                <a href="http://www.monika.virtualgrounds.zone/" target="_blank" rel="noreferrer">Proposal for the Commons Space</a>
            </li>

            <li>
                <h3>Roya DelSol</h3>
                <a href="http://www.roya.virtualgrounds.zone/" target="_blank" rel="noreferrer">BLACK_BOX</a>
            </li>

            <li className={componentStyles.disabled}>
                <h3>Sara Kay Maston Low</h3>
                <p>Worm’s Eye View</p>
            </li>

            <li>
                <h3>Shaina Agbayani</h3>
                <a href="http://www.sha.virtualgrounds.zone/" target="_blank" rel="noreferrer">Digital Dambana</a>
            </li>

        </ul>
    </section>
)


export default ParticipantList