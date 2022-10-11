import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Img } from "../Footer/FooterStyles";

const AboutMe = () => (
  <Section id="aboutme">
    <SectionDivider></SectionDivider>
    <br />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      I am a 3-rd year Electrical Engineering Student at University of Calgary,
      and I am passionate about hands-on learning in science labs, as well as
      software projects in web development. I love working in a team setting,
      which is why I have been working on a lot of interesting projects with
      other students throughout my degree! I am also a huge K-pop enthusiast, so
      definitely reach out to me if you would like good BTS song suggestions 😎
    </SectionText>
  </Section>
);

export default AboutMe;
