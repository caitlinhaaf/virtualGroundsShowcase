import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ParticipantsGrid from "../components/participantsGrid"

const ParticipantsPage = () => (
  <Layout>
    <SEO title="Participants" />
    
    <div style={{maxWidth: `1000px`, margin: `0 auto`}}>
      <p style={{textAlign: `center`}}>
        Virtual Grounds is a 2-part training and research initiative that considers how we navigate the future, protect our virtual selves, and shape digital landscapes.
        <br/><br/>
        Over the course of 11 months, we will survey how technology continues to grow and impact our lives in different ways through a series of workshops led by practicing creative technologists, scholars, and artists.
        <br/><br/>
        The content and research created will then be compiled into a transmedia publication, which will be distributed publicly to all communities to use and interpret.
      </p>
    </div>

    <ParticipantsGrid />

  </Layout>
)

export default ParticipantsPage
