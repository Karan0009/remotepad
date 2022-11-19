import { useSelector } from "react-redux";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";
import MoreOptions from "../moreOptions/moreOptions";

import "./header.css";

export default function Header() {
  const content = useSelector((state) => state.content);
  const darkMode = useSelector((state) => state.darkMode);
  const copyToClipboard = () => {
    const textareaEl = document.querySelector(".userInputArea__textInput");
    textareaEl.select();
    navigator.clipboard.writeText(textareaEl.value);
  };

  return (
    <div
      className="header-container"
      style={{ background: darkMode.colors.tertiaryColor }}
    >
      <h1 className="app-title" style={{ color: darkMode.colors.primaryColor }}>
        Remotepad
      </h1>
      <div className="header-container__left">
        <p
          className="header-container__left-contentLoadingStatus"
          style={{
            opacity: content.isDataLoaded ? "0" : "1",
            color: darkMode.colors.primaryColor,
          }}
        >
          Loading...
        </p>
      </div>
      <div className="header-container__right">
        <DarkModeToggle />
        <button
          className="header-container__right__btn btn btn-transparent"
          onClick={copyToClipboard}
          style={{ color: darkMode.colors.primaryColor }}
        >
          copy
        </button>
        <button
          className="header-container__clearAllBtn btn btn-transparent"
          style={{ color: darkMode.colors.primaryColor }}
        >
          clear
        </button>
        <MoreOptions />
      </div>
    </div>
  );
}
