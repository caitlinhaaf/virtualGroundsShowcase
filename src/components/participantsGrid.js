import React, {useState} from "react"
import { Link } from "gatsby"
import ClassNames from 'classnames'
import componentStyles from "./participantsGrid.module.scss"

import Anonymous from "../svgs/ANONYMOUSv2.svg"
import Amanda from "../svgs/AMANDA_G.svg"
import Camila from "../svgs/CAMILAv2.svg"
import Caroline from "../svgs/CAROLINEv2.svg"
import Laura from "../svgs/LAURAv2.svg"
import Laurence from "../svgs/LAURENCEv2.svg"
import Lena from "../svgs/LENAv2.svg"
import Marie from "../svgs/MARIEv2.svg"
import Milan from "../svgs/MILANv2.svg"
import Monika from "../svgs/MONIKAv2.svg"
import Roya from "../svgs/ROYAv2.svg"
import Sara from "../svgs/SARAv2.svg"

import bios from "./participantsBios.json";

const ParticipantsGrid = () => {
    const [activePerson, setActivePerson] = useState(null);
    const [activeBio, setActiveBio] = useState(null);
    const [bioAlignment, setAlignment] = useState(null);
    const [vignetteOpen, toggleVignette] = useState(false);

    const tileClick = (activeName, bioAlignment) =>{
        toggleVignette(!vignetteOpen)
        if( activePerson===null ) {
            setActivePerson(activeName)
            setActiveBio(bios[activeName])
            setAlignment(bioAlignment)
        }
        else setActivePerson(null)
    }

    const closeVignette = () => {
        setActivePerson(null);
        setActiveBio(null);
        setAlignment(null);
        toggleVignette(false);
    }

    const getBioClass = alignVal => {
        if(alignVal == "centerRight") return ClassNames(componentStyles.bio, componentStyles.center, componentStyles.right)
        if(alignVal == "centerWide") return ClassNames(componentStyles.bio, componentStyles.center, componentStyles.wide)
        else if(alignVal == "center") return ClassNames(componentStyles.bio, componentStyles.center)
        else if(alignVal == "right") return ClassNames(componentStyles.bio, componentStyles.right)
        else if(alignVal == "thin") return ClassNames(componentStyles.bio, componentStyles.thin)
        else return componentStyles.bio
    }

    return(
        <section className={componentStyles.gridContainer}>

            <div className={vignetteOpen ? `${componentStyles.vignette} ${componentStyles.active}` : componentStyles.vignette}>
                <button type="button" onClick={closeVignette} className={componentStyles.closeBtn}>
                    &#10006;
                </button>

                {activeBio &&
                    <section 
                        className={getBioClass(bioAlignment)}>
                        <div>
                            <h2>{activeBio.name}</h2>
                            <h3>{activeBio.projectName}</h3>
                        </div>
                        
                        <p>
                            {activeBio.bio}
                        </p>
                        {activeBio.contact &&
                            <ul>
                                {
                                    activeBio.contact.map( contact => (
                                        <li>
                                            <span>{contact.name}</span>: <a href={contact.link} targetBlank>{contact.linkText}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        }
                    </section>
                }
            </div>

            <button 
                id="roya" 
                className={activePerson==="roya" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("roya", "center")}>
                <Roya/>
                <div className={componentStyles.tileTitle}>
                    <h2>Roya</h2>
                </div>
            </button>

            <button 
                id="marie" 
                className={activePerson==="marie" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("marie", "right")}>
                <Marie/>
                <div className={componentStyles.tileTitle}>
                    <h2>Marie</h2>
                </div>
            </button>


            <button 
                key="amandaLow" 
                className={activePerson==="amandaLow" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("amandaLow", "thin")}>
                <Amanda/>
                <div className={componentStyles.tileTitle}>
                    <h2>Amanda Low</h2>
                </div>
            </button>


            

            <button 
                id="amandaGG" 
                className={activePerson==="amandaGG" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("amandaGG", null)}>
                <Anonymous />
                <div className={componentStyles.tileTitle}>
                    <h2>Amanda G.</h2>
                </div>
            </button>


            <div className={componentStyles.solid} style={{backgroundColor: `rgb(228, 223, 218)`}}></div>


            <button 
                id="caroline" 
                className={activePerson==="caroline" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("caroline", "centerWide")}>
                <Caroline />
                <div className={componentStyles.tileTitle}>
                    <h2>Caroline</h2>
                </div>
            </button>

            {/* <div className={ClassNames(componentStyles.solid, "greenBody")}></div> */}

            <button 
                id="helen" 
                className={activePerson==="helen" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("helen", "right")}>
                <Anonymous />
                <div className={componentStyles.tileTitle}>
                    <h2>Helen</h2>
                </div>
            </button>

            <div className="orangeBody"></div>

            <button 
                id="laura"
                className={activePerson==="laura" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("laura", null)}>
                <Laura />
                <div className={componentStyles.tileTitle}>
                    <h2>Laura</h2>
                </div>
            </button>


            <button 
                id="sara" 
                className={activePerson==="sara" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("sara")}>
                <Sara/>
                <div className={componentStyles.tileTitle}>
                    <h2>Sara</h2>
                </div>
            </button>

            {/* <div className={ClassNames(componentStyles.solid, "orangeBody")}></div> */}
            <button 
                id="shaina" 
                className={activePerson==="shaina" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("shaina", "right")}>
                <Anonymous />
                <div className={componentStyles.tileTitle}>
                    <h2>Shaina</h2>
                </div>
            </button>

            <button 
                id="laurence" 
                className={activePerson==="laurence" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("laurence", "right")}>
                <Laurence />
                <div className={componentStyles.tileTitle}>
                    <h2>Laurence</h2>
                </div>
            </button>

            <button 
                id="milan" 
                className={activePerson==="milan" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("milan")}>
                <Milan />
                <div className={componentStyles.tileTitle}>
                    <h2>Milan</h2>
                </div>
            </button>

            <button 
                id="monika" 
                className={activePerson==="monika" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("monika", null)}>
                <Monika />
                <div className={componentStyles.tileTitle}>
                    <h2>Monika</h2>
                </div>
            </button>

            <button 
                id="lena"
                className={activePerson==="lena" ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile} 
                type="button" 
                onClick={() => tileClick("lena")}>
                <Lena />
                <div className={componentStyles.tileTitle}>
                    <h2>Lena</h2>
                </div>
            </button>

        </section>
    )
}

export default ParticipantsGrid