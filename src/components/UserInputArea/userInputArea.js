import "./userInputArea.css";
import { GetEndpoint } from "../../utils/endpoints";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setIsDataLoaded } from "../../reducers/content";

export default function UserInputArea() {
  const [userInput, setUserInput] = useState("");
  const darkMode = useSelector((store) => store.darkMode);
  const content = useSelector((store) => store.content);
  // const content = useSelector((state) => state.content);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => await getContentFromApi())();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getContentFromApi = () => {
    dispatch(setIsDataLoaded(false));
    setUserInput("Loading your notes...");
    axios
      .get(GetEndpoint("getContent"))
      .then((data) => {
        dispatch(setIsDataLoaded(true));
        if (data.data.success) setUserInput(data.data.data);
      })
      .catch((err) => {
        dispatch(setIsDataLoaded(true));
        console.log(err);
      });
  };

  const setContentToApi = (content) => {
    const dataToSend = {
      Type: "text",
      Data: content || "",
    };
    axios
      .post(GetEndpoint("postContent"), dataToSend)
      .then((data) => {
        console.log(data);
        // setUserInput("hello");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const debounce = (func, timeout = 300) => {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this, args);
  //     }, timeout);
  //   };
  // };

  const userInputChangeHandler = (event) => {
    if (!content.isDataLoaded) return;

    setUserInput(event.target.value);
    (async () => await setContentToApi(event.target.value))();
  };

  // const debouncedUserInputChangeHandler = debounce(userInputChangeHandler);

  return (
    <div className="userInputArea__container">
      <textarea
        value={userInput}
        disabled={!content.isDataLoaded}
        onChange={userInputChangeHandler}
        style={{
          background: darkMode.colors.tertiaryColor,
          color: darkMode.colors.primaryColor,
          cursor: content.isDataLoaded ? "auto" : "progress",
        }}
        className={
          (content.isDataLoaded ? "" : "disable-select") +
          " userInputArea__textInput"
        }
      ></textarea>
    </div>
  );
}
