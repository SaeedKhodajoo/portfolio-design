import { MdDesktopMac } from "@react-icons/all-files/md/MdDesktopMac";
import styled from "styled-components";
import PText from "./PText";

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: "Montserrat SemiBold";
    margin-top: 2rem;
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "Web Design",
  desc = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Magni aut sedlaborum? Qui sed nesciunt nemo! Sequi, repellat!`,
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
