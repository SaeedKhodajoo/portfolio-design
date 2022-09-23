import { MdDesktopMac } from "@react-icons/all-files/md/MdDesktopMac";
import { MdCode } from "@react-icons/all-files/md/MdCode";
import { MdPhonelinkSetup } from "@react-icons/all-files/md/MdPhonelinkSetup";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  .servicesSection__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .servicesSection__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      gap: 5rem;
      margin-top: 5rem;
    }
  }
`;

const data = [
  {
    id: 1,
    icon: <MdDesktopMac />,
    title: "Web Design",
    desc: "I do ui/ux design for the website that help website to get a unique look",
  },
  {
    id: 2,
    icon: <MdCode />,
    title: "Web Development",
    desc: `I also Develop the websites.
    I create high performance website whit blazing fast speed`,
  },
  {
    id: 3,
    icon: <MdPhonelinkSetup />,
    title: "App Dev",
    desc: `I develop mobile application.
    I create mobile app whit eye catching ui.`,
  },
];

export default function ServicesSection() {
  return (
    <ServicesSectionStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what i will do for you" />
        <div className="servicesSection__allItems">
          {data.map((d) => (
            <ServicesSectionItem
              key={d.id}
              icon={d.icon}
              title={d.title}
              desc={d.desc}
            />
          ))}
        </div>
      </div>
    </ServicesSectionStyles>
  );
}
