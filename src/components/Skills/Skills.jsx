import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard.jsx'
import SkillInfoCard from './SkillInfoCard/SkillInfoCard.jsx'

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  }

  return (
    <section className='skills-container' id='skills'>
        <h5>Technical Knowledge</h5>
        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <SkillCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => {
                      handleSelectSkill(item)
                    }}
                    />
                ))}
            </div>
            

            <div className="skills-info">
              <SkillInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
              />
            </div>
        </div>
    </section>
  )
}

export default Skills