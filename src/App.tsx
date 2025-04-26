import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "~slick-carousel/slick/slick-theme.css";
import "~slick-carousel/slick/slick.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Main from "./pages/Main/Main";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
