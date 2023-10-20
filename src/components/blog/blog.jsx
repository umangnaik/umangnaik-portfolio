import React from 'react'
import "./blog.css"
import IMG1 from '../../assets/jal.jpeg'
import IMG2 from '../../assets/TataAig.jpg'
import IMG3 from '../../assets/whichisBest.PNG'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG3,
    title: "Which Framework is Most Suitable for Your Project or Learning in 2023: Angular vs React vs Vue",
    demo: "https://dev.to/umangnaik/which-framework-is-most-suitable-for-your-project-or-learning-in-2023-angular-vs-react-vs-vue-3ljd"
  },
  {
    id: 2,
    image: IMG2,
    title: "kami shirataki Hokkaido, Japan railway station that stayed open for a single schoolgirl…",
    demo: "https://medium.com/@umangnaik_93533/kami-shirataki-hokkaido-japan-railway-station-that-stayed-open-for-a-single-schoolgirl-b08a2822edbd"
    
  },
]

const blog = () => {
  return (
    <section id="blogs">
      <h5>My Recent Blog</h5>
      <h2>Blogs</h2>
      <div className='container blogs__container'>
        {
          data.map(({id,image,title, github,demo}) => {
            return (
              <a href={demo} target={'_blank'}>
              <article key={id} className="blogs__item">
                <div className="blogs__item-image">
                  <img src={image} alt={title}  />
                </div>
                <h3>{title}</h3>
              </article>
                </a>
            );
          })
        }
      </div>
    </section>
  );
}

export default blog