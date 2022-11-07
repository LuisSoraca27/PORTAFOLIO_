import React from 'react';
import styled from "styled-components";
import iconApi from "../img/icon-api.webp";

const BackProject = ({name, github, description}) => {
    return (
        <ProjectBack>
        <figure>
          <img src={iconApi} alt="" />
        </figure>
        <div className="container-button">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <i className="fa-brands fa-github"></i>
              <br />
              Code
            </button>
          </a>
        </div>
        <h4>{name}</h4>
        <div className="container-description">
          <p>
           {description}
          </p>
        </div>
      </ProjectBack>
    );
};

export default BackProject;



const ProjectBack = styled.div`
  width: 350px;
  height: 400px;
  margin: 10px;
  padding: 10px;

  figure {
    width: 50%;
    height: 30%;
    display: inline-block;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .container-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 30%;

    button {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 20px;

      i {
        font-size: 45px;
      }
    }
  }

  h4 {
    color: #522cef;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }

  .container-description {
    width: 100%;
    height: 70%;
    padding: 10px;
    text-align: center;

    p {
      color: white;
      font-size: 18px;
    }
  }
`;
