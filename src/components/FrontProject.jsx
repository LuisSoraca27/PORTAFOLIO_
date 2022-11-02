import React from "react";
import styled from "styled-components";

const FrontProject = ({ videoProject, nameProject, demo, code }) => {
  return (
    <>
      <ProjectFront>
        <div className="container-video">
          <video loop autoPlay muted>
            <source src={videoProject} type="video/mp4" />
          </video>
        </div>
        <div className="description-project">
          <h4>{nameProject}</h4>
          <a href={demo} target="_blank">
            <button className="button-project">
              <i class="fa-solid fa-globe"></i>
              <br />
              Demo
            </button>
          </a>
          <a href={code} target="_blank" >
            <button className="button-project">
              <i className="fa-brands fa-github"></i>
              <br />
              Code
            </button>
          </a>
        </div>
      </ProjectFront>
    </>
  );
};

export default FrontProject;

const ProjectFront = styled.div`
  width: 320px;
  border: 0px solid white;
  margin: 10px 5px;

  .container-video {
    width: 100%;
    height: 40%;
    margin: 0;

    video {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }

  .description-project {
    text-align: center;
    color: white;

    h4 {
      color: #522cef;
      font-weight: 600;
    }

    .button-project {
      background-color: transparent;
      border-radius: 50%;
      border: none;
      color: white;
      font-size: 13px;
      font-weight: 400;
      margin: 7px;

      &:hover {
        color: #522cef;
      }

      i {
        font-size: 25px;
      }
    }
  }
`;
