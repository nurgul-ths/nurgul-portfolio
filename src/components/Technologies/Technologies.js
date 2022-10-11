import React from "react";
import {
  DiCode,
  DiVisualstudio,
  DiWebplatform,
  DiTechcrunch,
  DiFirebase,
  DiReact,
  DiZend,
  DiPhonegap
} from "react-icons/di";
import { 
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Progress,
  ProgressBar80,
  ProgressBar90,
  ProgressBar70,
  ProgressBar30
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>

    <List>
      <ListItem>
        <DiCode size="3rem" color="black" />
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          Python, Javascript
          <Progress>
            <ProgressBar90></ProgressBar90>
          </Progress>
          C, Dart
          <Progress>
            <ProgressBar80></ProgressBar80>
          </Progress>
          Typerscript, SystemVerilog
          <Progress>
            <ProgressBar70></ProgressBar70>
          </Progress>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" color="black" />
        <ListContainer>
          <ListTitle>Web & Data</ListTitle>
          
          React
          <Progress>
            <ProgressBar80></ProgressBar80>
          </Progress>
          HTML, CSS, Flutter
          <Progress>
            <ProgressBar90></ProgressBar90>
          </Progress>
          Node.js, Next.js
          <Progress>
            <ProgressBar70></ProgressBar70>
          </Progress>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size="3rem" color="black" />
        <ListContainer>
          <ListTitle>Tech</ListTitle>
          Git, Postman
          <Progress>
            <ProgressBar90></ProgressBar90>
          </Progress>
          GraphQL, MongoDB
          <Progress>
            <ProgressBar30></ProgressBar30>
          </Progress>
          Django
          <Progress>
            <ProgressBar70></ProgressBar70>
          </Progress>
        </ListContainer>
      </ListItem>
    </List>
  
  </Section>
);

export default Technologies;
