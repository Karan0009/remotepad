import { useDispatch, useSelector } from "react-redux";
import { setIsDarkModeEnabled } from "../../reducers/darkMode";
import "./darkModeToggle.css";
export default function DarkModeToggle() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(setIsDarkModeEnabled(!darkMode.isDarkModeEnabled));
  };
  return (
    <div
      className="darkModeToggle__container"
      style={{
        border: "1px solid " + darkMode.colors.primaryColor,
        background: darkMode.colors.tertiaryColor,
      }}
      onClick={toggleDarkMode}
    >
      <div
        className="darkModeToggle__container-handle"
        style={{
          left: darkMode.isDarkModeEnabled ? "100%" : "0%",
          transform: darkMode.isDarkModeEnabled
            ? "translateX(-100%)"
            : "translateX(0%)",
          background: darkMode.colors.primaryColor,
        }}
      ></div>
    </div>
  );
}
