import SectionTitle from "./SectionTitle";
import PText from "./PText";
import Button from "./Button";
import AboutImg from "../assets/images/about-sec-img.png";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    gap: 1rem;
    .aboutSection__left,
    .aboutSection__right {
      flex: 1;
    }

    .aboutSection__left {
      .section-title {
        text-align: left;
      }
      .para {
        margin-top: 2rem;
        margin-left: 0;
      }
      .aboutSection__buttons {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
      }
    }
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
      .aboutSection__left,
      .aboutSection__right {
        width: 100%;
      }

      .aboutSection__left {
        .section-title {
          text-align: center;
        }
        .para {
          margin: 2rem auto 0;
        }
        .aboutSection__buttons {
          flex-direction: column;
          gap: 0;
          .button-wrapper,
          a {
            width: 90%;
            text-align: center;
          }
        }
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            exercitationem maiores magni blanditiis natus molestiae eaque sunt,
            incidunt possimus recusandae?Lorem ipsum dolor sit amet consectetur
            adipisicing.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="works" />
            <Button btnLink="/about" btnText="Read More" outline={true} />
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
