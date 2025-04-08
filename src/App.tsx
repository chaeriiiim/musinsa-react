import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/common/Header";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
