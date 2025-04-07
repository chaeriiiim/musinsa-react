import Header from "./components/common/Header";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div style={{ paddingTop: "80px" }}>
        <h2>콘텐츠</h2>
      </div>
    </>
  );
}

export default App;
