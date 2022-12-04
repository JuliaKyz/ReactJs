// import React, { useState, useCallback, useEffect } from "react";
import './App.css';
// import Message from './components/Message';
import Header from './components/Header/Header';
// import { Container } from "@mui/material";
// import ChatsList from "./components/ChatsList/ChatsList";
// import DialogList from "./components/DialogList/DialogList.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./components/Home/Home";
import Chats from "./components/Chats";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/chats/:chatId" element={<Chats />}></Route>
          <Route path="/chats/" element={<Chats />}></Route>


        </Routes>
      </BrowserRouter>
    </Provider>
  );
}



// function App() {
//   const [messageList, setMessagesList] = useState([]);

//   const [chatsList, setChatsList] = useState([
//     { id: 1, name: "Hello" },
//     { id: 2, name: "This" },
//     { id: 3, name: "Re" },
//   ]);



//   const [inputValue, setInputValue] = useState("");

//   const handleTextChange = useCallback(
//     event => {
//       setInputValue(event.target.value);
//     },
//     [setInputValue]
//   );

//   const handleSubmitButton = useCallback(
//     event => {
//       event.preventDefault();
//       if (inputValue !== "") {
//         const arr = [
//           ...messageList,
//           {
//             id: messageList.length + 1,
//             text: inputValue,
//             author: "-",
//           },
//         ];
//         setInputValue("");
//         setMessagesList(arr);
//       } else {
//         alert("Отправленное имя: ");
//       }
//     },
//     [setMessagesList, inputValue, messageList]
//   );




//   return (
//     <div className="App">
//       <Provider store={store}>
//         <BrowserRouter>

//           <Header />
//           {/* <Switch> */}


//           <Routes>
//             <Route path="/" element={<Home />}></Route>
//             <Route path="/profile" element={<Profile />}></Route>

//             <Route
//               path="/ChatList"
//               element={
//                 <ChatsList />
//               }
//             ></Route>



// {/* <ChatsList /> */}
// {/* <DialogList /> */}
// {/* <Container /> */}


//     </Routes>
//     {/* </Switch> */}
//   </BrowserRouter >
// </Provider>



export default App;
