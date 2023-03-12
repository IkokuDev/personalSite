import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
   const [activeItem, setActiveItem] = useState(0);
   const carouselRef = useRef();

   const scroll = (node, left) => {
     return node.scrollTo({ left, behavior: 'smooth' });
   }

   const handleClick = (e, i) => {
     e.preventDefault();

     if (carouselRef.current) {
       const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
       scroll(carouselRef.current, scrollLeft);
     }
   }

   const handleScroll = () => {
     if (carouselRef.current) {
       const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

       setActiveItem(index);
     }
   }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
   useEffect(() => {
     const handleResize = () => {
       scroll(carouselRef.current, 0);
     }

     window.addEventListener('resize', handleResize);
   }, []);

  return (
    <Section id="about">
      <SectionDivider/>
      <br/>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      My name is Michael and I am a Software Developer currently trying to gain practical experience in the tech industry.<br/> I have always been extremely passionate about technology which eventually prompted my choice to study AI and Robotics at the University of Bedfordshire in 2013. At the University, I picked up essential programming skills in Java and Python, as well as database management skills with SQL.<br/> Unfortunately, due to issues at home I was forced to return to my home country in 2016. A year later I would enroll into Baze University, Abuja in the Software Engineering course which I successfully completed in 2023.<br/>
      I have had over a decade’s worth of practice with programming and now, upon completion of my BSc Software Engineering program, I feel it is the right time to seek work experience in the industry.

      </SectionText>
      <SectionDivider />     
    </Section>
  );
};

export default Timeline;
