import React from "react";
import PText from "./PText";
import MapImg from "../assets/images/map.png";
import styled from "styled-components";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;

  .container {
    position: relative;
    min-height: 400px;

    .map__card {
      position: absolute;
      right: 10%;
      bottom: 15.5%;
      padding: 2rem;
      background-color: var(--deep-dark);
      max-width: 300px;
      width: 100%;
      border-radius: 12px;

      .map__card-heading {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .map__card-link {
        display: inline-block;
        font-size: 1.6rem;
        margin-top: 3rem;
        text-decoration: underline;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .container {
      .map__card {
        max-width: none;
        right: auto;
      }
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card-heading">Here is me</h3>
          <PText>Lahijan, Guilan, Iran</PText>
          <a
            className="map__card-link"
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
