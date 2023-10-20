import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/jal.jpeg'
import IMG2 from '../../assets/TataAig.jpg'
import IMG3 from '../../assets/RightonEC.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "(JAL) Japan Airline Reservation",
    github: "",
    demo: "https://www.jal.co.jp/jp/en/"
  },
  {
    id: 2,
    image: IMG2,
    title: "TATA AIG Insurance",
    github: "",
    demo: "https://www.tataaig.com/travel-insurance/travel-insurance-japan"
    
  },
  {
    id: 3,
    image: IMG3,
    title: "Right On Ec Site",
    github: "https:github.com",
    demo: "https://right-on.co.jp/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Right ON Merchandise System",
    github: "https:github.com",
    demo: "https://right-on.co.jp/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Personal Blog",
    github: "https:github.com",
    demo: "https://www.jal.co.jp/jp/en/"
  },
  {
    id: 6,
    image: IMG6,
    title: "Personal PortFolio",
    github: "https:github.com",
    demo: "https://right-on.co.jp/"
  },

]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title, github,demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>
              This is a portfolio item title
            </h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article> */}
      </div>
    </section>
  );
}

export default portfolio