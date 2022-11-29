import React, { useState, useCallback, useEffect } from "react";
import './App.css';
// import Message from './components/Message';
import Header from './components/Header/Header';
// import { Container } from "@mui/material";
import ChatList from "./components/ChatList/ChatList.jsx";
// import DialogList from "./components/DialogList/DialogList.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./components/Home/Home";



function App() {
  const [messageList, setMessagesList] = useState([]);

  const [chatsList, setChatsList] = useState([
    { id: 1, name: "Hello" },
    { id: 2, name: "This" },
    { id: 3, name: "Re" },
  ]);



  const [inputValue, setInputValue] = useState("");

  const handleTextChange = useCallback(
    event => {
      setInputValue(event.target.value);
    },
    [setInputValue]
  );

  const handleSubmitButton = useCallback(
    event => {
      event.preventDefault();
      if (inputValue !== "") {
        const arr = [
          ...messageList,
          {
            id: messageList.length + 1,
            text: inputValue,
            author: "-",
          },
        ];
        setInputValue("");
        setMessagesList(arr);
      } else {
        alert("Отправленное имя: ");
      }
    },
    [setMessagesList, inputValue, messageList]
  );




  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>

          <Header />
          {/* <Switch> */}


          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>

            <Route
              path="/ChatList"
              element={
                <ChatList />
              }
            ></Route>



            {/* <ChatList /> */}
            {/* <DialogList /> */}
            {/* <Container /> */}


          </Routes>
          {/* </Switch> */}
        </BrowserRouter >
      </Provider>

      {/* <form action="#">
        <p>
          <b>Введите ваше сообщение:</b>
        </p>
        <p>
          <TextareaAutosize
            value={inputValue}
            onChange={handleTextChange}
            maxRows={4}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue=""
            style={{ width: 200 }}
          // autoFocus
          />
        </p>
        <p>
          <input type="submit" value="Отправить" onClick={handleSubmitButton} />
        </p>
      </form> */}
    </div>

  );
}

export default App;
