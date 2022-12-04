import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Message from "./Message";
import ChatsList from "./comp";
import MessageForm from "./MessageForm";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
import { addChat } from "../store/Chats/action";
import { addMessage } from "../store/Messages/action";
import { getChats } from "../store/Chats/selectors";
import { getMessages } from "../store/Messages/selectors";
import { getChatMessages } from "../components/MsgChat";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";


function AddChatDialog({ handleClose }) {
    const [newChatName, setNewChatName] = useState("");
    const handleChange = useCallback(e => setNewChatName(e.target.value));

    const dispatch = useDispatch();
    const chats = useSelector(getChats);

    const onAddChat = () => {
        dispatch(addChat(newChatName));
        console.log(chats);
        setNewChatName("");
        handleClose();
    };
    return (
        <>
            <DialogTitle>Please enter a name </DialogTitle>
            <Item elevation={0}>
                <TextField autoFocus value={newChatName} onChange={handleChange} />
            </Item>
            <Button onClick={onAddChat} disabled={!newChatName}>
                Submit
            </Button>
        </>
    );
}

export default function Chats() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    const { chatId = 1 } = useParams();

    const chats = useSelector(getChats);
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    let chat = chats.find(({ id }) => {
        return id === +chatId;
    });

    let isChatMissing = !chat;

    if (isChatMissing) {
        chat = chats[0];
    }


    const messageList = getChatMessages(messages, chatId);
    const addMessageToChat = useCallback(
        message => {
            dispatch(addMessage(chatId, message));
        },
        [dispatch, chatId]
    );

    const handleOpen = () => setVisible(true);
    const [visible, setVisible] = useState(false);
    const handleClose = () => setVisible(false);

    useEffect(() => {
        if (
            messageList.length &&
            messageList[messageList.length - 1].author !== "robo"
        ) {
            setTimeout(() => {
                addMessageToChat({
                    id: messageList.length + 1,
                    text: `Сообщение получено от ${messageList[messageList.length - 1].author
                        }`,
                    author: "robo",
                });
            }, 1500);
        }
    }, [messageList, addMessageToChat]);

    return (
        <Container
            maxWidth="xl"
            sx={{ height: "calc(100% - 78px)", position: "relative" }}
        >
            <Box sx={{ flexGrow: 1, height: "100%" }}>
                <Grid sx={{ height: "100%" }} container>
                    <Grid sx={{ height: "100%" }} item xs={4} md={3}>
                        <Container maxWidth="xl" xs={4} md={3}>
                            <Button
                                sx={{ alignItem: "center" }}
                                variant="outlined"
                                // startIcon={<ChatIcon />}
                                onClick={handleOpen}
                            >
                                Add chat
                            </Button>
                        </Container>
                        <ChatsList handleOpen={handleOpen} />
                    </Grid>

                    <Dialog open={visible} onClose={handleClose}>
                        <AddChatDialog handleClose={handleClose} />
                    </Dialog>

                    <Grid sx={{ height: "100%" }} item xs={8} md={9}>
                        <Item
                            sx={{
                                height: "calc(100% - 166px)",
                                position: "relative",
                                overflow: "auto",
                            }}
                            elevation={0}
                        >
                            {messageList.map(({ text, id, author }) => (
                                <Message
                                    text={text}
                                    key={id}
                                    author={author}
                                />
                            ))}
                        </Item> {!isChatMissing && (
                            <>
                                <Divider />
                                <Item elevation={0}>
                                    <MessageForm />
                                </Item>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}