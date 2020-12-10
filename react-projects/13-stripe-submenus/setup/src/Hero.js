import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return <section className="hero">
    <div className="hero-center">
      <article className="hero-info">
        <h1>Payments infrastructure for the internet</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident deleniti, necessitatibus id cumque quasi soluta iure quis ea blanditiis natus modi, hic animi beatae culpa, maiores sed numquam distinctio vel!</p>
        <button className="btn">
          Start No
        </button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} alt="" className="phone-img" />
      </article>
    </div>
  </section>
}

export default Hero
