import { useSelector } from "react-redux";
import Header from "../../components/header/header";
import UserInputArea from "../../components/UserInputArea/userInputArea";
import "./Home.css";

function Home() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div
      className="container"
      style={{ background: darkMode.colors.tertiaryColor }}
    >
      <Header></Header>
      <UserInputArea></UserInputArea>
    </div>
  );
}

export default Home;
