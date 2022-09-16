import Header from "../../components/header/header";
import UserInputArea from "../../components/UserInputArea/userInputArea";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <Header></Header>
      <UserInputArea></UserInputArea>
    </div>
  );
}

export default Home;
