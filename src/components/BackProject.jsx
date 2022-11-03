import React from 'react';
import styled from "styled-components";
import iconApi from "../img/icon-api.webp";

const BackProject = () => {
    return (
        <ProjectBack>
        <figure>
          <img src={iconApi} alt="" />
        </figure>
        <div className="container-button">
          <a
            href="https://github.com/LuisSoraca27/tester-server"
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
        <h4>Savefood</h4>
        <div className="container-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            unde, rerum nam minus corporis neque obcaecati ipsum modi
            quisquam rem earum odit ipsam nobis. Earum ipsum unde eos eius
            dolores?
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
