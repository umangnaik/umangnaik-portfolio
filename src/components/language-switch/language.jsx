import { useTranslation } from 'react-i18next';
import Cookies from "js-cookie";
import { useState } from "react";
import React from 'react'
import './language.css'

export const Language = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const { i18n } = useTranslation();
const languages = [
  { name: "English", code: "en" },
  { name: "日本語", code: "ja" },
];
const currentLocale = Cookies.get("i18next") || "en";
// eslint-disable-next-line react-hooks/rules-of-hooks
const [language, setLanguage] = useState(currentLocale);
const handleChangeLocale = (e) => {
  const lang = e.target.value;
  setLanguage(lang);
  i18n.changeLanguage(lang);
};
  // return (
  //   <div className="switcher">
    
  //   <select onChange={handleChangeLocale} value={language}>
  //     {languages.map(({ name, code }) => (
  //       <option key={code} value={code}>
  //         {name}
  //       </option>
  //     ))}
  //   </select>
  // </div>
//   <div className="container">
//   <div className="toggle-switch">
//     <input type="checkbox" className="checkbox" 
//            name="hi" id="h1" />
//     <label className="label" htmlFor="hi">
//       <span className="inner" />
//       <span className="switch" />
//     </label>
//   </div>
// </div>
  // )
}

