import React from "react";

import styles from "./Projects.module.css";

import projects from "../../utils/projects.json";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h5 className={styles.title}>Projects</h5>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects