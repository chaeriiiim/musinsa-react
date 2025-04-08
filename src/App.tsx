import { ThemeProvider } from "styled-components";
import Header from "./components/common/Header";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <div style={{ paddingTop: "80px" }}>
        <h2>콘텐츠</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
