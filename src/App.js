import "./App.css";
import { useSelector } from "react-redux";
import Header from "./components/header/header";
import Home from "./pages/Home/Home";
import PaddedWrapper from "./components/paddedWrapper/paddedWrapper";

function App() {
  const darkMode = useSelector((store) => store.darkMode);
  return (
    <div
      className="App container"
      style={{ backgroundColor: darkMode.colors.tertiaryColor }}
    >
      <PaddedWrapper>
        <Header></Header>
      </PaddedWrapper>
      <Home></Home>
    </div>
  );
}

export default App;
