import React from "react";

const achievementsContent = [
  { title: "2", subTitle1: "years of", subTitle2: "hands-on experience" },
  { title: "10", subTitle1: "completed", subTitle2: "projects" },
  { title: "10", subTitle1: "Happy", subTitle2: "customers" },
  { title: "2", subTitle1: "certifications", subTitle2: "achieved" },
];

const Achievements = () => {
  return (
    <div className="row" style={{ margin: '0 auto', textAlign: 'center' }}>
    {achievementsContent.map((val, i) => (
      <div className="col-6" key={i}>
        <div className="box-stats with-margin">
          <h3 className="poppins-font position-relative">{val.title}</h3>
          <p className="open-sans-font m-0 position-relative text-uppercase">
            {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default Achievements;
