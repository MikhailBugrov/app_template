import Header from './components/Header';
import Pages from './pages';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header
        logoSrc={`${process.env.PUBLIC_URL}/images/icons/logo.svg`}
        phoneNumber="+79960265505"
        formattedPhoneNumber="+7 (996) 026-55-05"
      />
      <Pages />
      <Footer textFooter="&copy; TEST, 2023" />
    </>
  );
}

export default App;
