import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PText from "./PText";

const FooterStyles = styled.div`
  padding: 5rem 0 0;
  margin-top: 10rem;
  background-color: var(--deep-dark);

  .container {
    display: flex;
    gap: 2rem;

    .footer__col-intro {
      flex: 2;

      .footer__col-intro--title {
        font-size: 3.5rem;
        margin-bottom: 3rem;
      }
    }

    .footer__col {
      flex: 1;

      .footer__col-heading {
        font-size: 2.4rem;
        margin-bottom: 4rem;
      }

      ul {
        li {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
      }
    }
  }

  .copyright{
      background-color: var(--dark-bg);
      margin-top: 2rem;
      padding: 2rem 0;
  }

  @media only screen and (max-width: 768px){
      .container{
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
          gap: 5rem;
          .para{
              margin-left: 0;
          }
      }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col-intro">
          <h1 className="footer__col-intro--title">Saeed Khodajoo</h1>
          <PText>
            A freelance web designer and developer from Guilan, Iran.I always
            make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col">
          <div className="footer__col-heading">Important Links</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__col-heading">Contact Info</div>
          <ul>
            <li>
              <a href="tel:+123-456-7890">+123-456-7890</a>
            </li>
            <li>
              <a href="mailto:test@test.com">saeedkhodajoo@gmail.com</a>
            </li>
            <li>
              <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/Lahijan,+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D9%85%D9%88%D9%84%D8%A7%D9%86%D8%A7%D8%8C+Iran%E2%80%AD/@37.2132332,50.007998,18z/data=!3m1!4b1!4m13!1m7!3m6!1s0x3ff54b21645ebd51:0x561e4a4f36ba5183!2sLahijan,+Gilan+Province,+Iran!3b1!8m2!3d37.207073!4d50.0033677!3m4!1s0x3ff54b2ff99bca69:0x7513b71087ff2f1a!8m2!3d37.2132331!4d50.0087516">
                Lahijan, Guilan, Iran
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__col-heading">Social Links</div>
          <ul>
            <li>
              <a href="https://facebook.com" target='_blank' rel="noreferrer">facebook</a>
            </li>
            <li>
              <a href="https://twitter.com" target='_blank' rel="noreferrer">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com" target='_blank' rel="noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
          <div className="container">
              <PText>&copy; 2022 - Saeed Khodajoo | Designed By Me</PText>
          </div>
      </div>
    </FooterStyles>
  );
}
