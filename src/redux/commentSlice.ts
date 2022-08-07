import { createSlice } from "@reduxjs/toolkit";
import { Comment, Reply } from "../../types";
import data from "../../data.json";
const { v4: uuidv4 } = require("uuid");
import moment from "moment";
import type { RootState } from "./store";
const initialState = data;

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      if (action.type === "comment/addComment") {
        const newComment: Comment = {
          id: uuidv4(),
          content: action.payload.message,
          createdAt: moment().startOf("minute").fromNow(),
          score: 0,
          user: state.currentUser,
          replies: [],
        };
        state.comments.push(newComment);
      } else {
        return state;
      }
    },
    deleteComment: (state, action) => {
      if (action.type === "comment/deleteComment") {
        state.comments.find((post) => {
          post.id === action.payload.commentId
            ? (state.comments = state.comments.filter(
                (item) => item.id !== action.payload.commentId
              ))
            : (post.replies = post.replies.filter(
                (item) => item.id !== action.payload.commentId
              ));
        });
      } else {
        return state;
      }
    },
    addReply: (state, action) => {
      if (action.type === "comment/addReply") {
        let replyingToName = "";
        state.comments.find((post) =>
          post.id === action.payload.commentId
            ? (replyingToName = post.user.username)
            : post.replies?.find((item) => {
                item.id === action.payload.commentId
                  ? (replyingToName = item.user.username)
                  : null;
              })
        );
        const newComment: Reply = {
          id: uuidv4(),
          content: action.payload.message,
          createdAt: moment().startOf("minute").fromNow(),
          score: 0,
          replyingTo: replyingToName,
          user: state.currentUser,
        };

        state.comments.find((item) => {
          item.id === action.payload.commentId
            ? item.replies.push(newComment)
            : item.replies.map((subitem) => {
                subitem.id === action.payload.commentId
                  ? item.replies.push(newComment)
                  : item.replies;
              });
        });
      } else {
        return state;
      }
    },

    editComment: (state, action) => {
      if (action.type === "comment/editComment") {
        state.comments.find((comment) => {
          comment.id === action.payload.commentId
            ? (comment.content = action.payload.editMsg)
            : comment.replies.find((subitem) => {
                subitem.id === action.payload.commentId
                  ? (subitem.content = action.payload.editMsg)
                  : subitem.content;
              });
        });
      } else {
        return state;
      }
    },
    increaseScore: (state, action) => {
      if (action.type === "comment/increaseScore") {
        state.comments.find((comment) => {
          comment.id === action.payload.commentId
            ? comment.score++
            : comment.replies.find((subitem) => {
                subitem.id === action.payload.commentId
                  ? subitem.score++
                  : subitem.score;
              });
        });
      } else {
        return state;
      }
    },
    decreaseScore: (state, action) => {
      if (action.type === "comment/decreaseScore") {
        state.comments.find((comment) => {
          comment.id === action.payload.commentId
            ? comment.score--
            : comment.replies.find((subitem) => {
                subitem.id === action.payload.commentId
                  ? subitem.score--
                  : subitem.score;
              });
        });
      } else {
        return state;
      }
    },
  },
});

export const {
  addComment,
  deleteComment,
  addReply,
  editComment,
  decreaseScore,
  increaseScore,
} = commentSlice.actions;

export const appData = (state: RootState) => state.data;
export default commentSlice.reducer;
