import React, {useState} from "react"
import ClassNames from 'classnames'
import componentStyles from "./participantsGrid.module.scss"

import ParticipantTile from "./participantTile"
import Anonymous from "../svgs/avatars/ANONYMOUS.svg"
import Amanda from "../svgs/avatars/AMANDA.svg"
import Caroline from "../svgs/avatars/CAROLINE.svg"
import Laura from "../svgs/avatars/LAURA.svg"
import Laurence from "../svgs/avatars/LAURENCE.svg"
import Lena from "../svgs/avatars/LENA.svg"
import Marie from "../svgs/avatars/MARIE.svg"
import Milan from "../svgs/avatars/MILAN.svg"
import Monika from "../svgs/avatars/MONIKA.svg"
import Roya from "../svgs/avatars/ROYA.svg"
import Sara from "../svgs/avatars/SARA.svg"

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
        document.getElementById(activePerson).focus();
        setActivePerson(null);
        setActiveBio(null);
        setAlignment(null);
        toggleVignette(false);
    }

    const checkFocusable = (id) => {
        return (!vignetteOpen || (vignetteOpen && activePerson===id)) ? true : false;
    }

    const getBioClass = alignVal => {
        if(alignVal === "centerRight") return ClassNames(componentStyles.bio, componentStyles.center, componentStyles.right)
        if(alignVal === "centerWide") return ClassNames(componentStyles.bio, componentStyles.center, componentStyles.wide)
        else if(alignVal === "center") return ClassNames(componentStyles.bio, componentStyles.center)
        else if(alignVal === "right") return ClassNames(componentStyles.bio, componentStyles.right)
        else if(alignVal === "thin") return ClassNames(componentStyles.bio, componentStyles.thin)
        else return componentStyles.bio
    }

    return(
        <section className={componentStyles.gridContainer}>

            <ParticipantTile
                active={activePerson==="roya"}
                focusable={checkFocusable("roya")}
                participantId="roya"
                onClick={() => tileClick("roya", "center")}
                name="Roya">
                <Roya/>
            </ParticipantTile>

            <ParticipantTile
                active={activePerson==="marie"}
                focusable={checkFocusable("marie")}
                participantId="marie"
                onClick={() => tileClick("marie", "right")}
                name="Marie">
                <Marie/>
            </ParticipantTile>

            <ParticipantTile
                active={activePerson==="amandaGG" }
                focusable={checkFocusable("amandaGG")}
                participantId="amandaGG" 
                onClick={() => tileClick("amandaGG", "thin")}
                name="Amanda G.">
                <Amanda/>
            </ParticipantTile>

            <ParticipantTile
                active={activePerson==="amandaLow" }
                focusable={checkFocusable("amandaLow" )}
                participantId="amandaLow" 
                onClick={() => tileClick("amandaLow", null)}
                name="Amanda Low">
                <Anonymous />
            </ParticipantTile>

            <div className={componentStyles.solid} style={{backgroundColor: `rgb(228, 223, 218)`}}></div>

            <ParticipantTile
                active={activePerson==="caroline" }
                focusable={checkFocusable("caroline")}
                participantId="caroline" 
                onClick={() => tileClick("caroline", "centerWide")}
                name="Caroline">
                <Caroline />
            </ParticipantTile>

            {/* <div className={ClassNames(componentStyles.solid, "greenBody")}></div> */}

            <ParticipantTile
                active={activePerson==="helen"}
                focusable={checkFocusable("helen")}
                participantId="helen"  
                onClick={() => tileClick("helen", "right")}
                name="Helen">
                <Anonymous />
            </ParticipantTile>

            <div className="orangeBody"></div>

            <ParticipantTile
                active={activePerson==="laura"}
                focusable={checkFocusable("laura")}
                participantId="laura"  
                onClick={() => tileClick("laura", null)}
                name="Laura">
                <Laura />
            </ParticipantTile>

            <ParticipantTile
                active={activePerson==="sara"}
                focusable={checkFocusable("sara")}
                participantId="sara"  
                onClick={() => tileClick("sara", null)}
                name="Sara">
                <Sara/>
            </ParticipantTile>

            <ParticipantTile
                active={activePerson==="shaina"}
                focusable={checkFocusable("shaina")}
                participantId="shaina"  
                onClick={() => tileClick("shaina", "right")}
                name="Shaina">
                <Anonymous />
            </ParticipantTile>

            <ParticipantTile
                active={activePerson==="laurence" }
                focusable={checkFocusable("laurence" )}
                participantId="laurence"   
                onClick={() => tileClick("laurence" , "right")}
                name="Laurence">
                <Laurence />
            </ParticipantTile>

            <ParticipantTile
                active={activePerson==="milan" }
                focusable={checkFocusable("milan" )}
                participantId="milan"    
                onClick={() => tileClick("milan", null)}
                name="Milan">
                <Milan />
            </ParticipantTile>

            <ParticipantTile
                active={activePerson==="monika"}
                focusable={checkFocusable("monika")}
                participantId="monika"   
                onClick={() => tileClick("monika", null)}
                name="Monika">
                <Monika />
            </ParticipantTile>

            <ParticipantTile
                active={activePerson==="lena"}
                focusable={checkFocusable("lena")}
                participantId="lena"   
                onClick={() => tileClick("lena", null)}
                name="Lena">
                <Lena />
            </ParticipantTile>


            <div
            aria-hidden={vignetteOpen ? false : true} 
            className={vignetteOpen ? `${componentStyles.vignette} ${componentStyles.active}` : componentStyles.vignette}>
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
                                            <span>{contact.name}</span>: <a href={contact.link} target="_blank" rel="noreferrer" tabIndex="0">{contact.linkText}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        }
                    </section>
                }
                <button aria-label="Close vingette" type="button" onClick={closeVignette} className={componentStyles.closeBtn}>
                    &#10006;
                </button>
            </div>

        </section>
    )
}

export default ParticipantsGrid