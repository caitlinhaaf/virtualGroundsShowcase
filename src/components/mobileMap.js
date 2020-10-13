import { Link } from "gatsby"
import ClassNames from "classnames"
import React from "react"

import componentStyles from "./mobileMap.module.scss"

import RtoLline from "../svgs/RtoL.svg"
import LtoRline from "../svgs/LtoR.svg"

import Helen from "../svgs/mapBlocks/helen.svg"
import Monika from "../svgs/mapBlocks/monika.svg"
import Caroline from "../svgs/mapBlocks/caroline.svg"
import AmandaL from "../svgs/mapBlocks/amandaL.svg"
import Lena from "../svgs/mapBlocks/lena.svg"
import Roya from "../svgs/mapBlocks/roya.svg"
import Marie from "../svgs/mapBlocks/marie.svg"
import Shaina from "../svgs/mapBlocks/shaina.svg"
import Laura from "../svgs/mapBlocks/laura.svg"
import Milan from "../svgs/mapBlocks/milan.svg"
import Sara from "../svgs/mapBlocks/sara.svg"
import Laurence from "../svgs/mapBlocks/laurence.svg"
import AmandaG from "../svgs/mapBlocks/amandaG.svg"

const MobileMap = ({ siteTitle }) => (
  <section className={componentStyles.container}>

    <p style={{display: `block`, margin: `2rem`}}>
      Virtual Grounds is a one-year, training and research initiative hosted by the Digital Justice Lab and Trinity Square Video. Over the course of the year, the participants explored how technology continues to grow and impact our lives in different ways through a series of workshops led by practicing creative technologists, scholars, and artists. In the second half of the program, each participant pursued an independent project to explore how they navigate the future, protect their virtual selves, and shape digital landscapes.  
    </p>
    <p>
      This website features the final products from the program. Follow us on our Twitter <a href="https://twitter.com/digitaljustlab">Twitter</a> for more details and upcoming events! 
    </p>


     <LtoRline style={{width: `calc(100% - 8rem)`, display: `block`, margin: `0 auto`}}/>

      <div className={ClassNames(componentStyles.mapRow, componentStyles.rightAlign, componentStyles.disabled)}>
        <div>
            <h3>Helen Chen</h3>
            <p>I took a walk, and only found places I’ve already known </p>
        </div>
        <Helen />
      </div>

      <div className={ClassNames(componentStyles.lineRow, componentStyles.rightAlign)}></div>

      <div className={ClassNames(componentStyles.mapRow, componentStyles.rightAlign, componentStyles.disabled)}>
        <div>
            <h3>Monika Lemke</h3>
            <p>Proposal for the Commons Space</p>
        </div>
        <Monika />
      </div>

      <div className={ClassNames(componentStyles.lineRow, componentStyles.rightAlign)}></div>

      <div className={ClassNames(componentStyles.mapRow, componentStyles.rightAlign, componentStyles.disabled)}>
        <div>
            <h3>Caroline Hill</h3>
            <p>The Incarcerated City</p>
        </div>
        <Caroline />
      </div>

      <RtoLline style={{width: `calc(100% - 8rem)`, display: `block`, margin: `0 auto`}}/>




      <div className={ClassNames(componentStyles.mapRow, componentStyles.disabled)}>
        <AmandaL />
        <div>
            <h3>Amanda Low</h3>
            <p>Moving Without a Trace (When Everything is being Tracked)</p>
        </div>
      </div>

      <div className={componentStyles.lineRow}></div>

      <div className={componentStyles.mapRow}>
        <Lena />
        <div>
            <h3>Lena Phillips</h3>
            <a href="https://www.lena.virtualgrounds.zone/">Towards Just Urban Futures: The Little Black Book of Design Prompts to Survive the Urban Apocalypse</a>
        </div>
      </div>

      <LtoRline style={{width: `calc(100% - 8rem)`, display: `block`, margin: `0 auto`}}/>




      <div className={ClassNames(componentStyles.mapRow, componentStyles.rightAlign, componentStyles.disabled)}>
        <div>
            <h3>Roya DelSol</h3>
            <p>BLACK_BOX</p>
        </div>
        <Roya />
      </div>

      <div className={ClassNames(componentStyles.lineRow, componentStyles.rightAlign)}></div>

      <div className={ClassNames(componentStyles.mapRow, componentStyles.rightAlign, componentStyles.disabled)}>
        <div>
            <h3>Marie Sotto</h3>
            <p>Scarborough Always</p>
        </div>
        <Marie />
      </div>

      <RtoLline style={{width: `calc(100% - 8rem)`, display: `block`, margin: `0 auto`}}/>



      <div className={ClassNames(componentStyles.mapRow, componentStyles.disabled)}>
        <Shaina />
        <div>
            <h3>Shaina Agbayani</h3>
            <p>Digital Dambana</p>
        </div>
      </div>

      <div className={componentStyles.lineRow}></div>

      <div className={ClassNames(componentStyles.mapRow, componentStyles.disabled)}>
        <Laura />
        <div>
            <h3>Laura Nelson Hamilton</h3>
            <p>A Letter to My Niece, Describing the World that Could Be</p>
        </div>
      </div>

      <div className={componentStyles.lineRow}></div>

      <div className={ClassNames(componentStyles.mapRow, componentStyles.disabled)}>
        <AmandaG />
        <div>
            <h3>Amanda Gutierrez Gomes</h3>
            <p>With You in Distance (Contigo a la Distancia)</p>
        </div>
      </div>

      <div className={componentStyles.lineRow}></div>

      <div className={componentStyles.mapRow}>
        <Milan />
        <div>
            <h3>Milan Gokhale</h3>
            <a href="https://www.milan.virtualgrounds.zone/">Male Consent Project to It’s Time to Reject the Myth of Multiculturalism that Canada Uses to Cover Up Racism</a>
        </div>
      </div>

      <LtoRline style={{width: `calc(100% - 8rem)`, display: `block`, margin: `0 auto`}}/>

      

      <div className={ClassNames(componentStyles.mapRow, componentStyles.rightAlign, componentStyles.disabled)}>
        <div>
            <h3>Sara Kay Maston Low</h3>
            <p>Worm’s Eye View</p>
        </div>
        <Sara />
      </div>

      <div className={ClassNames(componentStyles.lineRow, componentStyles.rightAlign)}></div>

      <div className={ClassNames(componentStyles.mapRow, componentStyles.rightAlign, componentStyles.disabled)}>
        <div>
            <h3>Laurence Butet-Roch</h3>
            <p>Slow Net Toolkit</p>
        </div>
        <Laurence />
      </div>

  </section>
)

export default MobileMap
