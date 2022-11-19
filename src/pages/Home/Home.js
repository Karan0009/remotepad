import { useSelector } from "react-redux";

import UserInputArea from "../../components/UserInputArea/userInputArea";
import "./Home.css";

function Home() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="page" style={{ background: darkMode.colors.tertiaryColor }}>
      <UserInputArea></UserInputArea>
    </div>
  );
}

export default Home;
