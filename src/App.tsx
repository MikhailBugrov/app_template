import Header from "./components/header";
import Pages from "./pages";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header
        logoSrc="/images/icons/logo.svg"
        phoneNumber="+74954954954"
        formattedPhoneNumber="+7 (495) 495-49-54"
      />

      <Pages />

      <Footer textFooter="&copy; TEST, 1022–2022" />
    </>
  );
}

export default App;