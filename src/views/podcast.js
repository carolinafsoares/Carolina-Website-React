import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero93 from '../components/hero93'
import Features13 from '../components/features13'
import Contact33 from '../components/contact33'
import Footer15 from '../components/footer15'
import './podcast.css'

const Podcast = (props) => {
  return (
    <div className="podcast-container">
      <Helmet>
        <title>Podcast - Carolina Website</title>
        <meta property="og:title" content="Podcast - Carolina Website" />
      </Helmet>
      <div className="podcast-navbar1">
        <Navbar4></Navbar4>
      </div>
      <Hero93></Hero93>
      <Features13></Features13>
      <Contact33></Contact33>
      <div className="podcast-footer11">
        <Footer15></Footer15>
      </div>
    </div>
  )
}

export default Podcast
