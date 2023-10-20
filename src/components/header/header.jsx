import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {Language} from '../language-switch/language'
import { useTranslation } from 'react-i18next';
const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  return (
   <header>
    <Language/>
    <div className="container header__container">
    <h5>{t("helloIam")}</h5>
    
    <h1>{t("porfolioPersonName")}</h1>
    <h5 className='text-light'>{t("frontEndEngineer")}</h5>
    <CTA/>
    <HeaderSocials/>
    <div className="me">
      <img src={ME} alt="me" />
    </div>

    <a href="#contact" className='scroll__down'>{t("scrollDown")}</a>
    </div>
   </header>
  )
}

export default header