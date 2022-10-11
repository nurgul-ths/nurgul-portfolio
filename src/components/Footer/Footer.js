import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { pfp } from "../../constants/constants";
import { SocialIcons } from "../Header/HeaderStyles";
import { ListItem } from "../Technologies/TechnologiesStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  Img,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Section id="about">
      <Img src="images/csr.png"></Img>
      <SectionDivider></SectionDivider>
      <br />
      <br />
      <SectionTitle>Contact Me</SectionTitle>
      <br />
      <LinkItem href={"tel:8255617799"}>Tel: 8255617799</LinkItem>
      <br />
      <LinkItem href={"mailto:nurgul.akhshatayeva@ucalgary.ca"}>
        Email: nurgul.akhshatayeva@ucalgary.ca
      </LinkItem>
      <br />
      <br />
    </Section>
  );
};

export default Footer;
