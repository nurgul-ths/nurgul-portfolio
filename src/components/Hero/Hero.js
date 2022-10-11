import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Portfolio!
      </SectionTitle>
      <br/>
      <Button onClick={()=>window.location='#aboutme'}>Learn More</Button>
      
    </LeftSection>

  </Section>
);

export default Hero;