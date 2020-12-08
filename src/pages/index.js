import React from "react"
import { useMediaQuery } from 'react-responsive';
// react-responsive

import Layout from "../components/layout"
import SEO from "../components/seo"

// import MapGrid01 from "../components/mapGrid_01"
// import MobileMap01 from "../components/mobileMap_01"
// import ParticipantList01 from "../components/participantList_01"

import MapGrid02 from "../components/mapGrid_02"
import MobileMap02 from "../components/mobileMap_02"
import ParticipantList02 from "../components/participantList_02"

const IndexPage = () => { 
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return(
    <Layout>
      <SEO title="Home" />

        <h1>Virtual Grounds Showcase: Projects</h1>

        <p style={{display: `block`, textAlign: `center`, margin: `0 auto`}}>
          Explore the digital city to learn about all virtual grounds projects
        </p>

      <div className="fadeIn">
        {isMobile
        ?
          <MobileMap02 />
        :
          <>
            <MapGrid02 />
            <ParticipantList02 />
          </>
        }
      </div>
      
    </Layout>
  )
}

export default IndexPage
