import { useState, useEffect } from "react";
import "./floatingMenu.css";

const FloatingMenu = (props) => {
  const { showMenu, body, xPosOfClick } = props;
  const [xPosOfPointer, setXPosOfPointer] = useState(0);

  useEffect(() => {
    const menuRect = document
      .querySelector(".floatingMenu__container")
      .getBoundingClientRect();
    const width = menuRect.right - menuRect.left;
    const posOfClickRelativeToMenuRectLeft = xPosOfClick - menuRect.left;
    const percentageOfClick = (posOfClickRelativeToMenuRectLeft * 100) / width;
    setXPosOfPointer(percentageOfClick);
  }, [xPosOfClick]);

  useEffect(() => {
    console.log(showMenu);
  }, [showMenu]);

  return (
    <div
      style={{
        opacity: showMenu ? "1" : "0",
      }}
      className="floatingMenu__container"
    >
      <span
        style={{ left: `${xPosOfPointer}%` }}
        className="floatingMenu__container-pointer"
      ></span>
      {body ? (
        <ul className="floatingMenu__list">
          {body.map((item) => {
            if (item.type === "link")
              return (
                <li className="floatingMenu__listItem floatingMenu__listItem-link">
                  <a href={item.goto}>{item.label}</a>
                </li>
              );

            if (item.type === "select")
              return (
                <li className="floatingMenu__listItem floatingMenu__listItem-select">
                  <span>{item.label}</span>
                  <div className="floatingMenu__listItem-select-options">
                    {item.options.map((o) => (
                      <div className="floatingMenu__listItem-select-options__item">
                        <p style={{ ...(o.styles || {}), fontSize: "0.6rem" }}>
                          {o.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </li>
              );
            return <></>;
          })}
        </ul>
      ) : (
        "menu here"
      )}
    </div>
  );
};

export default FloatingMenu;
