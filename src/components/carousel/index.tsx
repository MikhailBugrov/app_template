import { useRef, useEffect } from 'react';
import { carouselData } from './carouselData';

import { Heading } from '../headingStyle';
import { Box, ImageCarousel, ImageCarouselContainer } from './styles';


const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  let scrollInterval: NodeJS.Timeout;

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const startX = event.clientX;
    const scrollLeft = carouselRef.current?.scrollLeft || 0;

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX - startX;
      const scrollAmount = x * 1.4;
      carouselRef.current!.scrollLeft = scrollLeft - scrollAmount;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAutomaticScroll();
          } else {
            stopAutomaticScroll();
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(carouselElement);

    return () => {
      observer.unobserve(carouselElement);
    };
  }, []);

  const startAutomaticScroll = () => {

    const scrollDuration = 2000;
    const scrollDistance = 700;
    const framesPerSecond = 60;
    const framesCount = scrollDuration / (1000 / framesPerSecond);

    let frame = 0;

    const animateScroll = () => {
      const carouselElement = carouselRef.current;
      if (!carouselElement) return;

      const scrollStep = scrollDistance / framesCount;
      
      carouselElement.scrollBy({ left: scrollStep, behavior: 'auto' });

      frame++;

      if (frame >= framesCount) {
        clearInterval(scrollInterval);
        scrollInterval = setTimeout(startAutomaticScroll, scrollDuration);
      }
    };

    clearInterval(scrollInterval);
    if (window.innerWidth >= 767) {
      scrollInterval = setInterval(animateScroll, 1000 / framesPerSecond);
    }
  };

  const stopAutomaticScroll = () => {
    clearInterval(scrollInterval);
  };

  return (
    <Box>
      <Heading $isMobileMargin>LOREM IPSUM DOLOR SIT AMET</Heading>

      <ImageCarouselContainer ref={carouselRef} onMouseDown={handleMouseDown}>
        {carouselData.map((image, index) => (
          <ImageCarousel
            key={index}
            src={`${process.env.PUBLIC_URL}/images/carousel/${image}`}
            alt={`${image}`}
            $isLast={index === carouselData.length - 1}
          />
        ))}
      </ImageCarouselContainer>
    </Box>
  );
};

export default Carousel;