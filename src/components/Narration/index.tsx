import { Heading } from '../HeadingStyle';
import { GridContainer, Title, Description, ImageTop, ImageBottom, Box } from './styles';
import { NarrationProps } from './types';

const Narration: React.FC<NarrationProps> = ({
  heading,
  title1,
  description1,
  imageUrl1,
  title2,
  description2,
  imageUrl2
}) => {
  return (
    <>
      <Heading>{heading}</Heading>
      <GridContainer>
        <ImageTop src={imageUrl1} alt="Narratio Photo 1" />
        <Box $isMobileMargin>
          <Title>{title1}</Title>
          <Description>{description1}</Description>
        </Box>
        <Box $isMobileOrder>
          <Title>{title2}</Title>
          <Description>{description2}</Description>
        </Box>
        <ImageBottom src={imageUrl2} alt="Narratio Photo 2" />
      </GridContainer>
    </>
  );
};

export default Narration;
