import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero95 from '../components/hero95'
import Features221 from '../components/features221'
import Gallery71 from '../components/gallery71'
import Team141 from '../components/team141'
import Contact35 from '../components/contact35'
import Footer15 from '../components/footer15'
import './projects.css'

const Projects = (props) => {
  return (
    <div className="projects-container">
      <Helmet>
        <title>Projects - Carolina Website</title>
        <meta property="og:title" content="Projects - Carolina Website" />
      </Helmet>
      <div className="projects-navbar1">
        <Navbar4></Navbar4>
      </div>
      <Hero95></Hero95>
      <Features221></Features221>
      <Gallery71></Gallery71>
      <Team141></Team141>
      <Contact35></Contact35>
      <div className="projects-footer11">
        <Footer15></Footer15>
      </div>
    </div>
  )
}

export default Projects
