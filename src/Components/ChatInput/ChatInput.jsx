import React, { useState } from "react";
import { Stack } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { useTheme } from "@mui/material/styles";

function ChatInput({ generatedChat, chat, setchat, setsrolltoBottom }) {
  const [input, setinput] = useState("");
  const theme = useTheme();
  const [snackbar, setSnackbar] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    generatedChat(input);
    setinput("");
    setsrolltoBottom(true);
  };
  const handleSave = (e) => {
    e.preventDefault();
    let storedChat = localStorage.getItem("chat");
    let historyChat = [];
    if (storedChat) {
      try {
        historyChat = JSON.parse(storedChat);
        if (!Array.isArray(historyChat)) {
          console.error("Stored chat is not an array:", historyChat);
          historyChat = [];
        }
      } catch (error) {
        console.error("Error parsing stored chat:", error);
        historyChat = [];
      }
    }
    let date = new Date();
    let newChat = { date: date, chat: chat };
    localStorage.setItem("chat", JSON.stringify([...historyChat, newChat]));
    setchat([]);
    setSnackbar(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };
  return (
    <div>
      <Stack
        onSubmit={(e) => handleSubmit(e)}
        component="form"
        direction="row"
        sx={{ padding: "30px 0px 10px 3px" }}
      >
        <input
          style={{
            padding: "20px",
            color: "black",
            marginRight: "10px",
            width: "950px",

            "@media (max-width: 764px)": {
              width: "100%",
            },
          }}
          value={input}
          placeholder="Message to Bot AI"
          onChange={(e) => setinput(e.target.value)}
          required
        />
        <button
          type="submit"
          style={{
            padding: "20px",
            cursor: "pointer",
            color: theme.palette.text.primary,
            background: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main} `,
            marginRight: "10px",
           
          }}
        >
          ASK
        </button>
        <button
          disabled={chat.length === 0}
          onClick={(e) => handleSave(e)}
          style={{
            padding: "20px",
            cursor: "pointer",
            color: theme.palette.text.primary,
            background: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main} `,
            marginRight: "10px",
            
          }}
        >
          SAVE
        </button>
      </Stack>
      <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Coversation is Saved Successfully!..
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ChatInput;
