import GlobalStyle from "./styles/global";
import { MainContainer } from "./styles/style";
import PageHeader from "./components/Header";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <PageHeader />
      <MainContainer>
        <GlobalStyle />
        <Routes />
      </MainContainer>
    </>
  );
}

export default App;
