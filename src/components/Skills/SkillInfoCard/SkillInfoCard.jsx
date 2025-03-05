import React from 'react'
import './SkillInfoCard.css'

const SkillInfoCard = ({heading,skills}) => {
  return (
    <div className='skills-info-card block'>
        <h6>{heading}</h6>
        <div className="skills-info-context block">
          {skills.map((item,index) => (
            <React.Fragment key={`skill_${index}`}>
              <div className="skill-info">
                <p>{item.skills}</p>
                <p className="percentage">{item.percentage}</p>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress" style={{ width: item.percentage }}></div>
              </div>
            </React.Fragment>
          ))}
        </div>
    </div>
  )
}

export default SkillInfoCard