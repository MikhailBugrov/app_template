import Narration from '../components/Narration';
import Carousel from '../components/Carousel';

import { PagesContainer } from './styles';

const Pages = () => {
  return (
    <PagesContainer>
      <Narration
        heading="UT ALIQUIP EX EA COMMODO CONSEQUAT"
        title1="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        description1="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        imageUrl1={`${process.env.PUBLIC_URL}/images/photos/julia_photo_1.jpg`}
        title2="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        description2="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        imageUrl2={`${process.env.PUBLIC_URL}/images/photos/taisiia_photo_1.jpg`}
      />

      <Carousel title="LOREM IPSUM DOLOR SIT AMET" />

      <Narration
        heading="UT ALIQUIP EX EA COMMODO CONSEQUAT"
        title1="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        description1="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        imageUrl1={`${process.env.PUBLIC_URL}/images/photos/julia_photo_2.jpg`}
        title2="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        description2="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        imageUrl2={`${process.env.PUBLIC_URL}/images/photos/taisiia_photo_2.jpg`}
      />
    </PagesContainer>
  );
};

export default Pages;
