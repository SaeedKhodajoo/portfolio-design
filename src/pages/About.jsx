import React from "react";
import Button from "../components/Button";
import PText from "../components/PText";
import aboutImg from "../assets/images/about-page-img.png";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import aboutItems from "../assets/data/aboutItems";
import ContactBanner from '../components/ContactBanner'

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    .left {
      flex: 3;

      .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
          background-color: var(--deep-dark);
          padding: 0.5rem;
          border-radius: 8px;
        }
      }

      .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
      }

      .about__info {
        margin-bottom: 4rem;
        .para {
          max-width: 100%;
        }
      }
    }

    .right {
      flex: 2;

      img {
        border: 2px solid var(--gray-1);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;

      .left {
        .about__subheading {
          font-size: 1.8rem;
        }

        .about__heading {
          font-size: 3rem;
        }
      }
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi I am <span>Saeed Khodajoo</span>
            </p>
            <h2 className="about__heading">A freelance web developer</h2>
            <div className="about__info">
              <PText>
                I am from lahijan, iran. A place of beauty and nature.
                Since my childhood, i love art and design. I always try to
                design stuff with my unique point of view. I also love to create
                things that can be usefull to others.
                <br /> <br />I started coding since I was in high school. Coding
                is also an art for me. I love it and now I have the opportunity
                to design along with the coding. I find it really interesting
                and I enjoyed the process a lot. <br /> <br /> My vision is to
                make the world a better place. Now almost everything is becoming
                better than ever. It is time for us to create more good stuff
                that helps the world to become a better place. Download CV
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="about__info__items">
          {aboutItems.map(({ id, heading, items }) => (
            <AboutInfoItem key={id} heading={heading} items={items} />
          ))}
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
