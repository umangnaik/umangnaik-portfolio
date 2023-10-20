import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';


const experience = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation();
  return (
    <section id="experience">
      <h5>{t("whatSkillLabel")}</h5>
      <h2>{t("experienceLabel")}</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("frontEndLabel")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">{t("experiencedLabel")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">{t("experiencedLabel")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">{t("experiencedLabel")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">{t("experiencedLabel")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">{t("experiencedLabel")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">{t("intermediateLabel")}</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>{t("otherDevelopmentLabel")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SEO For SPA</h4>
                <small className="text-light">{t("experiencedLabel")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">{t("intermediateLabel")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{t("designThinkingLabel")}</h4>
                <small className="text-light">{t("experiencedLabel")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java Spring Boot</h4>
                <small className="text-light">{t("intermediateLabel")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">{t("intermediateLabel")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Sql Server 2016</h4>
                <small className="text-light">{t("intermediateLabel")}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
