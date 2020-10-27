import React from "react"
import componentStyles from "./participantsGrid.module.scss"

const ParticipantTile = ({
    active,
    participantId,
    focusable,
    onClick,
    name,
    ...props
}) => (
    <button 
    id={participantId} 
    className={active ? `${componentStyles.tile} ${componentStyles.active}`: componentStyles.tile}
    tabIndex={focusable ? 0 : -1} 
    type="button" 
    onClick={onClick}
    aria-label={active ? "Close vingette" : `View ${name}'s biography`}>
        {props.children}
        <div className={componentStyles.tileTitle}>
            <h2>{active ? "Close Window" : name}</h2>
        </div>
    </button>
)

export default ParticipantTile
