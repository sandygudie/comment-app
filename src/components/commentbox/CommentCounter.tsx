import React from "react";
import { useDispatch } from "react-redux";

import { increaseScore, decreaseScore } from "../../redux/commentSlice";
interface Props {
  score: number;
  commentId: number;
  className;
}

function CommentCounter({ score, commentId, className }: Props) {
  const dispatch = useDispatch();
  return (
    <div className={className}>
      <button
        onClick={() => {
          dispatch (increaseScore({ commentId }));
        }}
        className="font-medium outline-0 "
      >
        +
      </button>
      <p className="font-normal py-1 text-primary ">{score}</p>
      <button
        onClick={() => {
          dispatch(decreaseScore({ commentId }));
        }}
        className="font-medium  outline-0"
      >
        -
      </button>
    </div>
  );
}

export default CommentCounter;
