import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Full-Stack Web Developer and Data Analyst working out of Abuja, Nigeria.<br/>
        Here are some of my projects!
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/IkokuDev'}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;