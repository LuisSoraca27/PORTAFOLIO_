import React from "react";
import styled from "styled-components";
import { Content } from "./MySkills";

const Contact = () => {
  return (
    <ContentContact id="contact" >
      <h2>Contact</h2>
      <h3>If you like what I do, don't doubt in contacting me</h3>
      <Content className="content-contact">
        <article className="form-contact">
          <h3>Send me an e-mail &#128526; </h3>
          <Form action="https://formsubmit.co/luisenriquesoraca27@gmail.com" method="POST">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName_"
              name="fullName"
              placeholder="Full Name"
              required
            />
            <label htmlFor="email">Email</label>
            <input type="text" id="email_" name="email" placeholder="Email" required/>
            <label htmlFor="affair">Affair</label>
            <input
              type="text"
              id="affair_"
              name="affair"
              placeholder="Affair"
              required
            />
            <label htmlFor="comments">Comments</label>
            <textarea
              name="comments"
              id="comments_"
              cols="10"
              rows="10"
              placeholder="Comments"
              required
            ></textarea>
            <button className="submit-form" type="submit">
              Enviar
            </button>
            <input type="hidden" name="_next" value="https://luissoraca.tech"></input>
            <input type="hidden" name="_captcha" value="false"></input>
          </Form>
        </article>

        <article className="social-contact">
          <h3>You can know me more in &#128525;</h3>
          <div className="button-contact">
            <a
              href="https://www.linkedin.com/in/luis-enrique-sorac%C3%A1-benthan-09a999241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <i className="fa-brands fa-linkedin-in"></i>
                LinkedIn
              </button>
            </a>
            <a
              href="https://github.com/LuisSoraca27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <i className="fa-brands fa-github"></i>
                GitHub
              </button>
            </a>
            <a
              href="https://www.instagram.com/luis_soraca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <i className="fa-brands fa-instagram"></i>
                Instagram
              </button>
            </a>
          </div>
        </article>
      </Content>
    </ContentContact>
  );
};

export default Contact;

const ContentContact = styled.section`
  width: 100%;
  height: 110vh;
  background-color: #05021c;

  h2 {
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
  }

  h3 {
    text-align: center;
    color: white;
    font-weight: 600;
    margin-bottom: 30px;
    color: #522cef;
  }

  .form-contact {
    width: 50%;
    height: 80%;
    padding: 10px;

    h3 {
      color: white;
      text-align: center;
      font-size: 28px;
      margin-bottom: 20px;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 50%;
      margin-bottom: 35px;
    }
  }

  .social-contact {
    width: 50%;
    height: 80%;
    padding: 10px;

    h3 {
      color: white;
      text-align: center;
      font-size: 28px;
      margin-bottom: 15px;
    }

    .button-contact {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 70px;

      button {
        color: white;
        background-color: transparent;
        border: none;
        margin: 33px 0;
        font-size: 28px;

        &:hover {
          color: #522cef;
        }

        i {
          margin-right: 25px;
          font-size: 55px;
        }
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 50%;

      .button-contact {
        button {
          margin: 10px 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: 110vh;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: white;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  }

  input {
    width: 70%;
    height: 35px;
    text-align: center;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 2px solid #522cef;
  }

  textarea {
    width: 70%;
    height: 70px;
    margin: auto;
    margin-bottom: 20px;
    border-radius: 8px;

    border: 2px solid #522cef;
  }

  .submit-form {
    width: 40%;
    height: 35px;
    color: white;
    background-color: #522cef;
    font-weight: bold;
    margin: auto;
    border-radius: 8px;
    border: 2px solid #522cef;
  }
`;
