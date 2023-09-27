import { FooterProps } from './types';
import { FooterContainer, TextFooter } from './styles';

const Footer: React.FC<FooterProps> = ({ textFooter }) => {
  return (
    <FooterContainer>
      <TextFooter>{textFooter}</TextFooter>
    </FooterContainer>
  );
};

export default Footer;