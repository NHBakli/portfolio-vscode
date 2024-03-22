"use client";
import ProjectCard from "@/components/ProjectCard";
import styles from "../../../style/ProjectPage.module.css";
import React, { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  tags: string[];
  source_code?: string;
  demo?: string;
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects", { method: "GET" });
        const projectsData = await response.json();
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching data !", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h3>some of my projects</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
