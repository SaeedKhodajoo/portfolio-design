import { Link } from "react-router-dom";
import styled from "styled-components";
import projectImg from "../assets/images/projectImg.png";

const ProjectItemStyles = styled.div`
  margin-top: 8rem;
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;

    .projectItem__title {
      font-size: 2.2rem;
    }

    .projectItem__desc {
      font-size: 1.6rem;
      font-family: "RobotoMono Regular";
      line-height: 2rem;
      margin-top: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  image = projectImg,
  title = "Project Name",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, harum nihil?",
}) {
  return (
    <ProjectItemStyles className="project-item">
      <Link to="/projects" className="projectItem__img">
        <img src={image} alt={title} />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
