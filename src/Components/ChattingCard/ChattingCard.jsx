import React, { useEffect, useState } from "react";
import { IconButton, Stack, Typography, Rating } from "@mui/material";
import AI from "../../asset/AI.png";
import human from "../../asset/human.png";
import { format } from "date-fns";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { useTheme } from "@mui/material/styles";

function ChattingCard({
  item,
  setSelectedid,
  setshowfeedbackmodel,
  setchat,
  readonly,
  chat,
}) {
  const [rating, setrating] = useState(false);
  const [dislike, setdislike] = useState(false);
  const [RatingVal, setRatingVal] = useState(0 || item.rating);
  const theme = useTheme();
  const handlelike = () => {
    setrating((prev) => !prev);
  };
  const handledislike = () => {
    setdislike((prev) => !prev);
    setSelectedid(item.id);
    setshowfeedbackmodel(true);
  };
  useEffect(() => {
    if (rating) {
      setchat((prevChat) =>
        prevChat.map((data) =>
          data.id === item.id ? { ...data, rating: RatingVal } : data
        )
      );
    }
    console.log(chat);
  }, [RatingVal]);
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          bg: theme.palette.primary.light,
          border: `1px solid ${theme.palette.primary.light}`,
          padding: "10px",
          boxShadow: 3,
        }}
        alignItems="center"
        marginTop="30px"
        borderRadius="10px"
        marginLeft="30px"
        marginRight="30px"
      >
        <Stack sx={{ width: "60px", padding: "10px 30px 10px 20px" }}>
          <img
            src={item.type === "AI" ? AI : human}
            alt="soul"
            style={{ width: "100%", height: "100%" }}
          />
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: 900, color: "text.primary" }}>
            {item.type === "AI" ? "The Great Sage" : "You"}
          </Typography>
          <Typography sx={{ color: "text.primary" }}>{item.text}</Typography>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ color: "text.primary", fontSize: "15px" }}>
              {format(item.time, "hh:mm a")}
            </Typography>
            {readonly === false && item.type === "AI" && (
              <Stack direction="row" alignItems="center">
                <IconButton
                  onClick={() => {
                    handlelike();
                  }}
                >
                  {rating === false && <BiLike />}
                  {rating === true && <BiSolidLike />}
                </IconButton>
                <IconButton onClick={() => handledislike()}>
                  {dislike === false && <BiDislike />}
                  {dislike === true && <BiSolidDislike />}
                </IconButton>
              </Stack>
            )}
          </Stack>

          {(rating || item.rating > 0) && item.type === "AI" && (
            <Stack>
              <Typography
                component="legend"
                sx={{ color: "text.primary", fontWeight: "900" }}
              >
                {" "}
                {readonly ? "Rating" : "Rate this response"}
              </Typography>
              <Rating
                name={readonly ? "read-only" : "simple-controlled"}
                value={RatingVal}
                onChange={(event, newValue) => {
                  setRatingVal(newValue);
                }}
                readOnly={readonly}
              />
            </Stack>
          )}
          {item.feedback && (
            <Typography sx={{ color: "text.primary" }}>
              <span style={{ fontWeight: "900" }}>Feedback:</span>
              {item.feedback}
            </Typography>
          )}
        </Stack>
      </Stack>
    </div>
  );
}

export default ChattingCard;
