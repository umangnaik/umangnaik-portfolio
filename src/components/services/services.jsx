import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'

const services = () => {
  return (
    <section id="services">
      <h5>For Whom I Worked...</h5>
      <h2>Work Experience</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>Tata Consultancy Services Japan,Ltd.</h3>
            <h5>Frontend Developer</h5>
            <h5>Oct 2020 - Present</h5>
            <h5>
              <GrLocation /> Tokyo, Japan
            </h5>
          </div>
          <ul className="service__list">
          <li>
              <BiCheck className="service__list-icon" />
              <p>Project requirement gathering understands business logic</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Part of a code development, deployment,reviewing code.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Handle a sprint grooming call on behalf of team to represt progress to team leader / PM
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Part of a Client call where requirement are interpret from japanese to english for indian team member.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>VeBuIn株式会社</h3>
            <h5>Software Engineer</h5>
            <h5>Feb 2019 - Sep 2020</h5>
            <h5>
              <GrLocation /> Tsukuba, Ibaraki, Japan
            </h5>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Project requirement gathering understands business logic</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Define a project structure with a team member and implement it
                from scratches.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Part of a code development, deployment,reviewing code & Project Documentation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                identifying key areas where a SEO can be effective in an ec site.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                SEO Related development to keep site in Google Ranking.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Monitoring Google Analytics , Search Console for EC site.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Enhancement and Keep maintain site performance.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>Thinkbiz Technology Pvt Ltd</h3>
            <h5>Software Engineer</h5>
            <h5>Nov 2017 - Feb 2019</h5>
            <h5>
              <GrLocation /> Ahemdabad, Gujarat, India
            </h5>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop a codes to structure the website's layout and enhance functionality.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Provide a technical support & respond to QA Team with defect fixes</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Acquire a knowledge from Seniors & carry forward a legacy towards a project </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default services