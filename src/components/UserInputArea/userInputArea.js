import "./userInputArea.css";
import { GetEndpoint } from "../../utils/endpoints";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserInputArea() {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    (async () => await getContentFromApi())();
  }, []);

  const getContentFromApi = () => {
    axios
      .get(GetEndpoint("getContent"))
      .then((data) => {
        console.log(data.data.data);
        if (data.data.success) setUserInput(data.data.data);
      })
      .catch((err) => {
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
    console.log(event.target.value);
    setUserInput(event.target.value);
    (async () => await setContentToApi(event.target.value))();
  };

  // const debouncedUserInputChangeHandler = debounce(userInputChangeHandler);

  return (
    <div className="userInputArea__container">
      <textarea
        value={userInput}
        onChange={userInputChangeHandler}
        className="userInputArea__textInput"
      />
    </div>
  );
}
