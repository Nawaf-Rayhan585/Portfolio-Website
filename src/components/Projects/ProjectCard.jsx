import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, imageSrc, live, source},
}) => {
  return (
    <div className="block">
      <div className={styles.container}>
      <img
        src={`${imageSrc}`}
        alt='img-project'
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      {/* <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul> */}
      <div className="button-container">
          <a href={live} className={styles.demo}>
            <BsBoxArrowUpRight/>
          </a>
          <a href={source} className={styles.link}>
            <FaGithub/>
          </a>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard