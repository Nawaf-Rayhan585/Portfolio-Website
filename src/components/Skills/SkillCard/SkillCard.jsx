import React from 'react'
import './SkillCard.css'

const SkillCard = ({title , iconUrl , isActive , onClick}) => {
  return (
    <div 
    className={`skills-card block ${isActive ? 'active' : ''}`}
    onClick={() => onClick()}
    >
        <div className="skill-icon">
            <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>
    </div>
  )
}

export default SkillCard