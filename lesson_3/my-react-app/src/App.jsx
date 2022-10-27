import React, { useState, useCallback, useEffect } from "react";
import './App.css';
import Message from './components/Message';
import TextareaAutosize from '@mui/base/TextareaAutosize';

function App() {
  const [messageList, setMessagesList] = useState([
    { id: 1, text: "message 1", author: "user1" },
    { id: 2, text: "message 2", author: "user2" },
    { id: 3, text: "message 3", author: "user3" },
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

  useEffect(() => {
    if (messageList[messageList.length - 1].author !== "robot") {
      setTimeout(() => {
        const arr = [
          ...messageList,
          {
            id: messageList.length + 1,
            text: `Сообщение от ${messageList[messageList.length - 1].author
              }`,
            author: "robot",
          },
        ];
        setMessagesList(arr);
      }, 1500);
    }
  }, [messageList]);







  return (
    <div className="App">
      <header className="App-header">
        <Message text="Message first" />
        {messageList.map(({ text, id, author }) => (
          <Message text={text} key={id} author={author} />
        ))}
      </header>

      <form action="#">
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
          />
        </p>
        <p>
          <input type="submit" value="Отправить" onClick={handleSubmitButton} />
        </p>
      </form>
    </div>
  );
}

export default App;
