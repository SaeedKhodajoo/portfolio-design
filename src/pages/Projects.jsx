import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import projects from "../assets/data/projects";
import ProjectItem from "../components/ProjectItem";
import { useState } from "react";

const ProjectsStyles = styled.div`
  padding: 10rem 0;

  .projects__searchBar {
    margin-top: 5rem;
    width: 300px;

    position: relative;
    gap: 1rem;

    input {
      width: 100%;
      font-size: 2rem;
      padding: 0.8rem;
      color: var(--black);
      border-radius: 6px;
      outline: none;
      border: none;
    }

    .searchIcon {
      width: 2rem;
      position: absolute;
      right: 1rem;

      path {
        color: var(--deep-dark);
      }
    }
  }

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 5rem;

    .project-item {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .projects__searchBar {
      width: 100%;
    }
  }
`;

export default function Projects() {
  // const [searchText, setSearchText] = useState("");
  const [projectsData, setProjectsData] = useState(projects);

  function handleChange(e) {
    // setSearchText(e.target.value);
      
    setProjectsData(e.target.value.trim() === ""
    ? projects
    : projects.filter((data) => data.name.toLowerCase().includes(e.target.value.trim())));
  }

  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent works" />
        <div className="projects__searchBar">
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              // value={searchText}
              onChange={handleChange}
              placeholder="project name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectsData.map((project) => {
            return (
              <ProjectItem
                key={project.id}
                image={project.img}
                title={project.name}
                desc={project.desc}
              />
            );
          })}
        </div>
      </div>
    </ProjectsStyles>
  );
}
