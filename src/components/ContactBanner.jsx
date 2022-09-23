import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";

const ContactBannerStyle = styled.div`
  padding: 4rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;

    .ContactBanner__heading {
      font-size: 4rem;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .contactBanner__wrapper {
      .ContactBanner__heading {
        font-size: 3rem;
      }
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind</PText>
          <h3 className="ContactBanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyle>
  );
}
