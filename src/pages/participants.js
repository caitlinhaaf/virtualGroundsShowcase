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
        The Virtual Grounds program is driven and enriched by talented emerging and established artists, scholars, writers, and thinkers. Click on their profiles to learn more about the 2019-2020 Virtual Grounds participants.
      </p>
    </div>

    <ParticipantsGrid />

  </Layout>
)

export default ParticipantsPage
