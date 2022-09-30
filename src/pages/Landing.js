import React from 'react'

import Logo from '../components/Logo'

import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> job
          </h1>
          <p>
            I&apos;m baby dSA vibecession street art big mood succulents,
            kinfolk gatekeep gentrify 8-bit church-key semiotics man braid.
            Meditation godard vegan disrupt photo booth actually small batch.
            Viral jean shorts sus hashtag, try-hard farm-to-table literally
            narwhal.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
