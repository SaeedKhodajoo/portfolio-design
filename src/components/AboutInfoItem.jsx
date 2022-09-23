import React from "react";
import styled from "styled-components";
import PText from "./PText";

const AboutItemStyles = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;

  .about__item-heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  .item__info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 3rem;
    gap: 3rem;

    .title {
      font-size: 2.4rem;
      min-width: 18rem;
    }
    .items {
      display: flex;
      gap: 1.5rem;

      .item {
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 8px;
      }
    }
  }

  @media only screen and (max-width: 540px) {
    .about__item-heading {
      font-size: 3rem;
    }

    .item__info {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      .title {
        font-size: 2rem;
      }

      .items {
        position: initial;
        flex-wrap: wrap;
      }
    }
  }
`;

export default function AboutInfoItem({
  heading = "this is heading",
  items = [
    {
      title: "this is title",
      info: ["html", "css", "js"],
    },
  ],
}) {
  return (
    <AboutItemStyles>
      <div className="about__item-heading">{heading}</div>
      {items.map((item, index) => {
        return (
          <div className="item__info" key={index}>
            <h1 className="title">{item.title}</h1>
            <div className="items">
              {item.info.map((i, index) => (
                <div className="item" key={index}>
                  <PText>{i}</PText>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </AboutItemStyles>
  );
}
