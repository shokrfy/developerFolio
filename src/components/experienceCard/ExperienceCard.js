
import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({ cardInfo, isDark }) {
  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-banner">
        <div className="experience-blurred_div"></div>

        <div className="company-logo-circle">
          <img
            className="company-logo"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
          />
        </div>

        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
      </div>

      <div className="experience-text-details">
        <h5 className={isDark ? "experience-text-role dark-mode-text" : "experience-text-role"}>
          {cardInfo.role}
        </h5>
        <h5 className={isDark ? "experience-text-date dark-mode-text" : "experience-text-date"}>
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
