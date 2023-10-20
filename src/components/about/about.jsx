import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from 'react-i18next';

const about = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="switcher"></div>
      <h5>{t("getToKnow")}</h5>
      <h2>{t("aboutMe")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>4+ Japan / India</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>

          <p>
            Frontend Developer Having ​5+ Years​ of Experience in Building
            Large-scale Web Applications. Which includes ​4+ Years of Experience
            in Angular Framework & Year of Experience in React Js, where I
            worked for various ​Japanese projects & Clients​ .
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
