import React from "react"
import { Link } from "gatsby"
import Media from 'react-media';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import MapGrid from "../components/mapGrid"
import MapGrid2 from "../components/mapGrid02"
import MobileMap from "../components/mobileMap"
import ParticipantList from "../components/participantList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <p style={{display: `block`, textAlign: `center`, margin: `0 auto`}}>
        Explore the digital city to learn about all virtual grounds projects
      </p>

    <Media queries={{
          small: "(max-width: 799px)",
          large: "(min-width: 800px)"
        }}>
          {matches => (
            <>
              {matches.small && <MobileMap />}
              {matches.large && 
                <>
                  <MapGrid2 />
                  <ParticipantList />
                </>}
            </>
          )}
    </Media>

    

  </Layout>
)

export default IndexPage
