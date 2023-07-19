import { HeaderProps } from './types';
import {
  HeaderContainer,
  Logo,
  PhoneNumber,
  PhoneNumberImage,
  PhoneNumberImageLink,
} from './styles';

const Header: React.FC<HeaderProps> = ({ logoSrc, phoneNumber, formattedPhoneNumber }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <HeaderContainer>
      <Logo src={logoSrc} alt="logo" onClick={scrollToTop} />
      <PhoneNumber href={`tel:${phoneNumber}`}>{formattedPhoneNumber}</PhoneNumber>
      <PhoneNumberImageLink href={`tel:${phoneNumber}`}>
        <PhoneNumberImage src="/images/icons/phone.svg" alt="phone" />
      </PhoneNumberImageLink>
    </HeaderContainer>
  );
};

export default Header;