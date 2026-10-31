import React from 'react'
import { Helmet } from "react-helmet"

import AboutHeading from '../components/AboutHeading'
import AboutMission from '../components/AboutMission'
import AboutStats from '../components/AboutStats'
import AboutStory from '../components/AboutStory'
import AboutValues from '../components/AboutValues'
import AboutCTA from '../components/AboutCTA'
import TechStack from '../components/AboutTechStack.jsx'

function About() {
  return (
    <>
      {/* ✅ SEO Part */}
      <Helmet>
        <title>About Us - My Website</title>
        <meta 
          name="description" 
          content="Learn more about our company, mission, values, and the technology stack we use to build amazing products." 
        />
      </Helmet>

      {/* ✅ Page Content */}
      <div>
        <AboutHeading/>
        <AboutMission/>
        <AboutStats/>
        <AboutStory/>
        <AboutValues/>
        <TechStack/>
        <AboutCTA/>
      </div>
    </>
  )
}

export default About