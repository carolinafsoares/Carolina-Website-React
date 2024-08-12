import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero172 from '../components/hero172'
import CTA262 from '../components/cta262'
import Steps22 from '../components/steps22'
import Footer15 from '../components/footer15'
import './cv.css'

const CV = (props) => {
  return (
    <div className="cv-container1">
      <Helmet>
        <title>CV - Carolina Website</title>
        <meta property="og:title" content="CV - Carolina Website" />
      </Helmet>
      <div className="cv-navbar1">
        <Navbar4></Navbar4>
      </div>
      <Hero172 heading1="CV"></Hero172>
      <div className="cv-container2">
        <span>
          <span className="cv-text101">Profile</span>
          <br className="cv-text102"></br>
          <br className="cv-text103"></br>
          <span className="cv-text104">
            Neuroscience PhD Candidate at King’s College London through the LIDO
            program.
          </span>
          <br className="cv-text105"></br>
          <span className="cv-text106">
            Research assistant at Sainsbury Wellcome Center in Sonja Hofer’s
            lab.
          </span>
          <br className="cv-text107"></br>
          <span className="cv-text108">
            Completed the Integrative Neuroscience MscR at The University of
            Edinburgh.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="cv-text109"></br>
          <span className="cv-text110">
            Biochemistry graduate from Queen Mary University of London.
          </span>
          <br className="cv-text111"></br>
          <br className="cv-text112"></br>
          <br className="cv-text113"></br>
          <span className="cv-text114">Education</span>
          <br className="cv-text115"></br>
          <br className="cv-text116"></br>
          <span className="cv-text117">PhD</span>
          <span className="cv-text118">
            {' '}
            — Neuroscience; King’s College London; funded by the LIDo (London
            Interdisciplinary Doctoral Program); September 2023 - present
          </span>
          <br className="cv-text119"></br>
          <span className="cv-text120">MscR</span>
          <span className="cv-text121">
            {' '}
            — Integrative Neuroscience; The University of Edinburgh; September
            2021- August 2022.
          </span>
          <br className="cv-text122"></br>
          <span className="cv-text123">
            {' '}
            Grade: Merit Award (2:1), Dissertation grade: 67%
          </span>
          <br className="cv-text124"></br>
          <span className="cv-text125">
            {' '}
            Dissertation title: Convergent inputs from the lateral entorhinal
            cortex and basolateral amygdala to the medial entorhinal cortex.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="cv-text126"></br>
          <span className="cv-text127">BSc</span>
          <span className="cv-text128">
            {' '}
            — Biochemistry; Queen Mary University of London; 2018-2021. Overall
            Grade: 2:1. Dissertation title: Chromatid Instability in
            Neuropathologies
          </span>
          <br className="cv-text129"></br>
          <br className="cv-text130"></br>
          <br className="cv-text131"></br>
          <span className="cv-text132">Academic experience</span>
          <br className="cv-text133"></br>
          <br className="cv-text134"></br>
          <span className="cv-text135">Research Assistant</span>
          <span className="cv-text136"> — Sainsbury Wellcome Center, UCL;</span>
          <br className="cv-text137"></br>
          <span className="cv-text138">
            Start date: September 2022- Present; PI: Sonja Hofer
          </span>
          <br className="cv-text139"></br>
          <span className="cv-text140">
            Research question: What is the role of basal ganglia and
            prethalambic pathways in decision-making?
          </span>
          <br className="cv-text141"></br>
          <span className="cv-text142">
            Researching decision-making part of the International Brain
            Laboratory (IBL) group, with the goal to produce more reproducible
            electrophysiology data. The project involves training mice in a
            visual decision-making task while performing optogenetic
            manipulations. I analyse behavioural data using SLEAP and am trained
            in head-plate cranial surgeries.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="cv-text143"></br>
          <br className="cv-text144"></br>
          <span className="cv-text145">Master’s research project</span>
          <span className="cv-text146">
            {' '}
            — Edinburgh University;
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="cv-text147"></br>
          <span className="cv-text148">
            Start date: January 2022- August 2022; PI: Professor Matt Nolan
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="cv-text149"></br>
          <span className="cv-text150">
            Research question: Do Lateral Entorhinal Cortex and Basolateral
            Amygdala synaptic inputs converge in the Medial Entorhinal Cortex
            cells?
          </span>
          <br className="cv-text151"></br>
          <span className="cv-text152">
            The project’s focus was on the circuitry of spatial cognition and
            conducted patch-clamping, optogenetic manipulations, histology and
            confocal imaging.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="cv-text153"></br>
          <br className="cv-text154"></br>
          <span className="cv-text155">Bio-Computational Analyst Intern</span>
          <span className="cv-text156">
            {' '}
            — Queen Mary University of London;
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="cv-text157"></br>
          <span className="cv-text158">
            July-September 2020. Supervisor: Dr Chema Martin.
          </span>
          <br className="cv-text159"></br>
          <span className="cv-text160">
            Mapped the evolution of the FGF gene across different species using
            the programs Jalview, raxmIGUI and FigTree.
          </span>
          <br className="cv-text161"></br>
          <br className="cv-text162"></br>
          <span className="cv-text163">Brain Cancer Research Intern</span>
          <span className="cv-text164">
            {' '}
            — Imperial College
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="cv-text165"></br>
          <span className="cv-text166">
            London; August-September 2019. PI: Michael Johnson; Supervisor: Dr
            Liisi Laaniste
          </span>
          <br className="cv-text167"></br>
          <span className="cv-text168">
            Conducted lab work, including cell culturing, RNA/DNA extractions,
            computational work in data analysis, and coding language R.
          </span>
          <br className="cv-text169"></br>
          <br className="cv-text170"></br>
          <br className="cv-text171"></br>
          <span className="cv-text172">Work Experience &amp; Volunteering</span>
          <br className="cv-text173"></br>
          <br className="cv-text174"></br>
          <span className="cv-text175">Podcast</span>
          <span className="cv-text176">
            {' '}
            — Neuroverse; February 2022-Present. Communicating science is
            incredibly important. Thus, I co-founded a neuroscience podcast
            called Neuroverse (February 2022- present). The aim isn’t to
            lecture, but rather to explore ideas and venture into different
            areas of understanding and draw connections between disciplines. The
            podcast receives 500 listens per month from 50+ countries and 60+
            episodes published. These communication and organizational skills
            translate into a research environment where multi-disciplinary
            collaborative work is necessary to achieve holistic science;
            Including setting up collaborations, and presenting data.
          </span>
          <br className="cv-text177"></br>
          <span className="cv-text178">Tutor</span>
          <span className="cv-text179">
            {' '}
            — Hackney Community College; September 2018-July 2019
          </span>
          <br className="cv-text180"></br>
          <span className="cv-text181">
            Helped refugee children with limited English proficiency improve
            their written and spoken English.
          </span>
          <br className="cv-text182"></br>
          <span className="cv-text183">
            Volunteer
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="cv-text184">
            — Hastings Residential Care Home; May-December 2017
          </span>
          <br className="cv-text185"></br>
          <span className="cv-text186">
            Organised and supervised activities, while caring for residents with
            dementia or Alzheimer’s.
          </span>
          <br className="cv-text187"></br>
          <br className="cv-text188"></br>
          <span className="cv-text189">Trainee </span>
          <span className="cv-text190">- AEIPS,</span>
          <br className="cv-text191"></br>
          <span className="cv-text192">
            Lisbon; May-June 2016 Aided in re-integrating people with mental
            disabilities back into society, improving their social skills, and
            helping them to apply for jobs.
          </span>
          <br className="cv-text193"></br>
          <br className="cv-text194"></br>
          <span className="cv-text195">References</span>
          <br className="cv-text196"></br>
          <br className="cv-text197"></br>
          <span className="cv-text198">UCL, Sainsbury Wellcome Centre</span>
          <br className="cv-text199"></br>
          <span className="cv-text200">
            Professor Sonja Hofer - s.hofer@ucl.ac.uk
          </span>
          <br className="cv-text201"></br>
          <span className="cv-text202">
            Nate Miska - miska@internationalbrainlab.org
          </span>
          <br className="cv-text203"></br>
          <br className="cv-text204"></br>
          <span className="cv-text205">
            Edinburgh University
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="cv-text206"></br>
          <span className="cv-text207">
            Professor Matt Nolan - matt.nolan@ed.ac.uk
          </span>
          <br className="cv-text208"></br>
          <br className="cv-text209"></br>
          <span className="cv-text210">Queen Mary University of London</span>
          <br className="cv-text211"></br>
          <span className="cv-text212">
            Dr. Vidya Darbari — v.darbari@qmul.ac.uk
          </span>
          <br className="cv-text213"></br>
          <br className="cv-text214"></br>
          <span className="cv-text215">Imperial College</span>
          <br className="cv-text216"></br>
          <span className="cv-text217">
            Dr Liisi Laaniste — l.laaniste15@imperial.ac.uk
          </span>
          <br className="cv-text218"></br>
          <br className="cv-text219"></br>
          <span className="cv-text220">Queen Mary University of London</span>
          <br className="cv-text221"></br>
          <span className="cv-text222">
            Dr Chema Martin — chema.martin@qmul.ac.uk
          </span>
          <br className="cv-text223"></br>
          <br className="cv-text224"></br>
          <span className="cv-text225">Kings College</span>
          <br className="cv-text226"></br>
          <span className="cv-text227">Dr Ay Lin Kho — ay.kho@kcl.ac.uk</span>
          <br className="cv-text228"></br>
          <br className="cv-text229"></br>
          <span className="cv-text230">Hackney Community College</span>
          <br className="cv-text231"></br>
          <span className="cv-text232">
            Michael Hendriks — Michaela.Hendriks@ncclondon.ac.uk
          </span>
          <br></br>
        </span>
      </div>
      <CTA262 rootClassName="cta262-root-class-name"></CTA262>
      <Steps22 rootClassName="steps22-root-class-name"></Steps22>
      <div className="cv-footer11">
        <Footer15></Footer15>
      </div>
    </div>
  )
}

export default CV
