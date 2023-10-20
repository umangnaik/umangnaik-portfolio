import React from 'react'
import CV from '../../assets/Umang_Naik_About_6_Years_of_Experience_FrontEnd_Engineer_Resume.pdf'
import { useTranslation } from 'react-i18next';

const CTA = props => {
  const { t } = useTranslation();
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>{t('downloadCv')}</a>
        <a href="#contact" className='btn btn-primary'>{t('letsTalk')}</a>
    </div>
  )
}


export default CTA