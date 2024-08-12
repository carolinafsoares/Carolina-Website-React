import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero91 from '../components/hero91'
import Features11 from '../components/features11'
import Contact31 from '../components/contact31'
import Footer15 from '../components/footer15'
import './ph-d.css'

const PhD = (props) => {
  return (
    <div className="ph-d-container">
      <Helmet>
        <title>PhD - Carolina Website</title>
        <meta property="og:title" content="PhD - Carolina Website" />
      </Helmet>
      <div className="ph-d-navbar1">
        <Navbar4></Navbar4>
      </div>
      <Hero91></Hero91>
      <Features11></Features11>
      <Contact31></Contact31>
      <div className="ph-d-footer11">
        <Footer15></Footer15>
      </div>
    </div>
  )
}

export default PhD
