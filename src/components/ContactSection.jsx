import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";
import { MdLocalPhone } from "@react-icons/all-files/md/MdLocalPhone";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import ContactForm from "./ContactForm";

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: center;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 2px;
      height: 50%;
      background-color: var(--gray-1);
      left: 50%;
      top: 10%;
      transform: (-50%, -50%);
    }
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }
  @media only screen and (max-width: 768px){
      .contactSection__wrapper{
          flex-direction: column-reverse;
          &::after{
              display: none;
          }
      }
  } 

`;
export default function ContactSection() {
  return (
    <ContactSectionStyles>
      <div className="container">
        <SectionTitle heading="Contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+123-456-7890" />
            <ContactInfoItem icon={<MdEmail />} text="text@test.com" />
            <ContactInfoItem text="Guilan, Iran" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}
