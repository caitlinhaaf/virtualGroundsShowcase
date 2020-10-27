import React from "react"
import Media from 'react-media';

import Layout from "../components/layout"
import SEO from "../components/seo"

import MapGrid01 from "../components/mapGrid_01"
import MobileMap01 from "../components/mobileMap_01"
import ParticipantList01 from "../components/participantList_01"

// import MapGrid02 from "../components/mapGrid_02"
// import MobileMap02 from "../components/mobileMap_02"
// import ParticipantList02 from "../components/participantList_02"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <h1>Virtual Grounds Showcase: Projects</h1>

      <p style={{display: `block`, textAlign: `center`, margin: `0 auto`}}>
        Explore the digital city to learn about all virtual grounds projects
      </p>

    <div className="fadeIn">
      <Media queries={{
            small: "(max-width: 799px)",
            large: "(min-width: 800px)"
          }}>
            {matches => (
              <>
                {matches.small && <MobileMap01 />}
                {matches.large && 
                  <>
                    <MapGrid01 />
                    <ParticipantList01 />
                  </>}
              </>
            )}
      </Media>
    </div>
    
  </Layout>
)

export default IndexPage
