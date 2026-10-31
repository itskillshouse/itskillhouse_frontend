import React from 'react'
import WorkHeading from '../components/WorkHeading';
import Portfolio from '../components/Portfolio.jsx';
import CaseStudies from '../components/CaseStudies.jsx';
import Process from '../components/Process.jsx';
import Testimonials from '../components/Testimonials.jsx'
import WebsiteTypesSection from '../components/WebsiteTypesSection.jsx';

function Work() {
  return (
    <>
<WorkHeading/>

<Portfolio />
<WebsiteTypesSection/>
      <CaseStudies />

       
      <Process />
      <Testimonials /> 
</>
  )
}

export default Work