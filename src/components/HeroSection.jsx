import HeroImg from "../assets/images/hero.jpg";
import Button from "./Button";
import PText from "./PText";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import styled from "styled-components";

const HeroStyles = styled.div`
  height: 100vh;
  min-height: 1000px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -3rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 5.5rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
    }
  }

  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }

  .hero__info {
    margin-top: -18rem;
  }

  .hero__socials,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }

  .hero__socials {
    left: 50px;
  }

  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;

        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width:768px){
    min-height: 750px;
    .hero__heading{
      font-size: 1.4rem;
      .hero__name{
        font-size: 4.5rem;
      }
    }
    .hero__img{
      height: 300px;
    }
    .hero__info{
      margin-top: 3rem;
    }
    .hero__socials{
      left: 0;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator{
        width: 20px;
        p{
          font-size: 1.2rem;
        }
        img{
          max-height: 22px;
        }
      }
      .hero__social__text{
        ul{
          li{
            a{
              font-size:1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    .hero__scrollDown{
      right: 0;
      width: 20px;
      gap: 1rem;
      p{
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, this is</span>
          <span className="hero__name">Saeed Khodajoo</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText>
            I am working as a freelance web designer and developer for 4 years.
            I love to design and make new web experiences for the people.
          </PText>
          <Button btnLink="/projects" btnText="see my works" />
        </div>
        <div className="hero__socials">
          <div className="hero__social__indicator">
            <p>Follow</p>
            <img src={SocialMediaArrow} alt="" />
          </div>
          <div className="hero__social__text">
            <ul>
              <li>
                <a href="https:facebook.com" target="_blank" rel="noreferrer">
                  FB
                </a>
              </li>
              <li>
                <a href="https:twitter.com" target="_blank" rel="noreferrer">
                  TW
                </a>
              </li>
              <li>
                <a href="https:linkedin.com" target="_blank" rel="noreferrer">
                  LI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__scrollDown">
          <p>Scroll</p>
          <img src={ScrollDownArrow} alt="" />
        </div>
      </div>
    </HeroStyles>
  );
}
