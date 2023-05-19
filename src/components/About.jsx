import React from "react";
import styled from "styled-components";
import photoMe from "../img/photo-me.webp";
import cvls from '../../public/Luis FS CV.pdf';

const About = () => {

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = cvls;
    link.setAttribute('download', 'Luis Soraca CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <ContentAbout id="about">
      <div className="container-about" data-aos="fade-right">
        <h2>Sobre mí</h2>
        <article className="photo-cv">
          <div className="photo-me">
            <img src={photoMe} alt="Luis Soracá" />
          </div>
          <button onClick={downloadFile} ><a>Resumen</a></button>
        </article>
        <article className="description">
          <p>
            <span> programador y amante de los buenos habitos.</span> Egresado en Desarrollo de Software con enfoque en JavaScript. Con habilidades en el desarrollo Full-Stack y experiencia en proyectos prácticos utilizando JavaScript. Buscando oportunidades para aplicar mis habilidades y contribuir al crecimiento de una empresa.
          </p>
          <a href="#mySkillss"><button className="mySkills" >Mis Habilidades</button></a>
        </article>
      </div>
    </ContentAbout>
  );
};

export default About;

const ContentAbout = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #05021c;
  .container-about {
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    h2 {
      padding: 20px;
      font-size: 2.5rem;
      font-weight: 900;
      color: white;
      width: 100%;
    }
    .photo-cv {
      width: 100%;
      height: 30vh;
      .photo-me {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 5px solid white;
        margin: auto;
        img {
          object-position: center;
          object-fit: cover;
          width: 100%;
          border-radius: 50%;
        }
      }
      button {
        width: 150px;
        height: 40px;
        background-color: #5500ff;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        border: none;
        margin: 10px;
        &:hover {
          background-color: #55557f;
        }
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
    .description {
      text-align: center;
      height: 70vh;
      p {
        font-size: 23px;
        color: white;
        span {
          color: #522cef;
          display: block;
        }
      }

      .mySkills {
        width: 200px;
        height: 45px;
        background-color: #5500ff;
        color: white;
        font-weight: 700;
        border-radius: 5px;
        border: none;
        margin: 10px;
        &:hover {
          background-color: #55557f;
        }
      }

      
    }
  }
  @media (min-width: 768px) {
    .container-about {
      h2 {
        font-size: 55px;
        height: 10vh;
      }
      .photo-cv {
        width: 50%;
        height: 88vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .photo-me {
          margin: 20px;
          width: 360px;
          height: 360px;
        }
        button {
          width: 220px;
          height: 50px;
          font-size: 23px;
        }
      }
      .description {
        width: 50%;
        height: 88vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
          font-size: 28px;
        }

        button {
          width: 220px;
          height: 50px;
          font-size: 23px;
        }
      }
    }
  }
`;
