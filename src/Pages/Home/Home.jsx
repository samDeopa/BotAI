import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import IntialCard from "../../Components/IntialCard/IntialCard";
import Aidata from "../../AIdata/Aidata.json";
import ChattingCard from "../../Components/ChattingCard/ChattingCard";
import { Stack } from "@mui/material";
import ChatInput from "../../Components/ChatInput/ChatInput";
import FeedbackModal from "../../Components/FeedbackModal/FeedbackModal";

function Home({ setclose ,setchat,chat}) {

  const [chatid, setchatid] = useState(1);
  const [Selectedid, setSelectedid] = useState(null);
  const [showfeedbackmodel, setshowfeedbackmodel] = useState(false);
  const [scrolltoBottom, setsrolltoBottom] = useState(false);
  const listRef = useRef();

  useEffect(() => {
    if (!Aidata) {
      console.error("Failed to load AI data.");
    }
  }, []);

  const generatedChat = (value) => {
    const question = Aidata.find(
      (data) => data.question.toLowerCase() === value.toLowerCase()
    );
    let answer = "Could not get the answer from AI";
    if (question !== undefined) {
      answer = question.response;
    }
    setchat((prev) => [
      ...prev,
      { type: "Human", text: value, time: new Date(), id: chatid },
      { type: "AI", text: answer, time: new Date(), id: chatid + 1 },
    ]);
    setchatid(chatid + 2);
  };
  console.log(chat);

  useEffect(() => {
    //   if (listRef.current && listRef.current.lastElementChild) {
    //     listRef.current.lastElementChild.scrollIntoView();
    // }
    //( ?. opitional chaining)
    listRef.current?.lastElementChild?.scrollIntoView();
    setsrolltoBottom(false);
  }, [scrolltoBottom]);
  return (
    <div>
      <Navbar setclose={setclose} />
      {chat.length === 0 && <IntialCard generatedChat={generatedChat} />}
      {chat && chat.length !== 0 &&(
      <Stack
        sx={{
          height: "550px",
          // Setting overflowY: 'auto' on an element in CSS means that the element will have a vertical scrollbar when its content overflows the visible area. Here’s a simple breakdown of what this property does:

          // overflowY: This CSS property controls how content that overflows the vertical axis of an element is handled.
          // Value 'auto': This value tells the browser to automatically add a vertical scrollbar when the content exceeds the specified height of the element. If there's no overflow, no scrollbar will be shown.

          overflowY: "auto", //this the main control of scrollbar if i give height the content overflow  tell to place the scrollbar
          //design the scroll bar----
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(151, 133, 186,0.4)",
            borderRadius: "8px",
          },
        }}
        ref={listRef}
      >
       {
          chat.map((item, index) => (
            <ChattingCard
              key={index}
              item={item}
              setSelectedid={setSelectedid}
              setshowfeedbackmodel={setshowfeedbackmodel}
              setchat={setchat}
              chat={chat}
              readonly={false}
            />
          ))}
      </Stack>)}

      <ChatInput
        generatedChat={generatedChat}
        chat={chat}
        setchat={setchat}
        setsrolltoBottom={setsrolltoBottom}
      />
      <FeedbackModal showfeedbackmodel={showfeedbackmodel} setshowfeedbackmodel={setshowfeedbackmodel} Selectedid={Selectedid} setchat={setchat} />
    </div>
  );
}

export default Home;
