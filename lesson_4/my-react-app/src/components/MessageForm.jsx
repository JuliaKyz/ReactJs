import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../store/Messages/action";
import { useParams } from "react-router-dom";
import { getChatMessages } from "../components/MsgChat";
import { getMessages } from "../store/Messages/selectors";
import { getProfile } from "../store/Profile/selectors";
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function SendMessageForm() {
    const messages = useSelector(getMessages);
    const profileName = useSelector(getProfile);

    const { chatId = 1 } = useParams();

    const dispatch = useDispatch();

    const inputRef = useRef(null);

    const [inputValue, setInputValue] = useState("");
    const handleTextAreaChange = useCallback(
        event => {
            setInputValue(event.target.value);
        },
        [setInputValue]
    );
    const handleButtonClick = useCallback(
        event => {
            event.preventDefault();
            if (inputValue !== "") {
                dispatch(
                    addMessage(chatId, {
                        id: getChatMessages(messages, chatId).length + 1,
                        text: inputValue,
                        author: profileName,
                    })
                );
                setInputValue("");
            } else {
                alert("Введите текст сообщения");
            }
        }, [inputValue, setInputValue, messages, chatId, dispatch, profileName]
    );
    return (
        <>
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
                    // autoFocus
                    />
                </p>
                <p>
                    <input type="submit" value="Отправить" onClick={handleSubmitButton} />
                </p>
            </form>

        </>

    );
}



















