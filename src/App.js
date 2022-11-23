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
      <PaddedWrapper
        style={{ position: "absolute", top: "0", left: "0", width: "100%" }}
      >
        <Header></Header>
      </PaddedWrapper>
      <Home></Home>
    </div>
  );
}

export default App;
