import MoreOptions from "../moreOptions/moreOptions";
import "./header.css";

export default function Header() {
  const copyToClipboard = () => {
    const textareaEl = document.querySelector(".userInputArea__textInput");
    textareaEl.select();
    navigator.clipboard.writeText(textareaEl.value);
  };

  return (
    <div className="header-container">
      <h1 className="app-title">Remotepad</h1>
      <div className="header-container__right">
        <button
          className="header-container__right__btn btn btn-transparent"
          onClick={copyToClipboard}
        >
          copy
        </button>
        <button className="btn btn-transparent">clear</button>
        <MoreOptions />
      </div>
    </div>
  );
}
