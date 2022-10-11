import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
        <Span><DiCssdeck size="3rem" /> Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
      <Link href="#about">
        <NavLink>Contact Me</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/nurgul-ths">
        <AiFillGithub size="3rem" color="black"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/nurgul-ths/">
        <AiFillLinkedin size="3rem" color="black"></AiFillLinkedin>
      </SocialIcons>
     
    </Div3>
  </Container>
);

export default Header;
