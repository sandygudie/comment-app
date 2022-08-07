import React, { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addComment, appData, addReply } from "../redux/commentSlice";

interface Props {
  commentId?: number;
  setIsReply?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MessageBox({ commentId, setIsReply }: Props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const data = useSelector(appData);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (message) {
      commentId
        ? (dispatch(addReply({ message, commentId })), setIsReply(false))
        : dispatch(
            addComment({
              message,
            })
          );
    }
    setMessage("");
  };

  return (
    <div className="w-full bg-white flex items-start p-4 my-4 rounded-md gap-x-4">
      <Image
        src={data.currentUser.image.webp}
        alt="currentUser_image"
        width={40}
        height={40}
      />
      <div className="md:flex md:gap-x-4 gap-y-4 items-start w-full">
        <textarea
          className="h-20 text-black outline-0 w-full border-[1px] border-gray-100 rounded-md p-2"
          placeholder="Add a comment"
          onChange={(e) => handleChange(e)}
          value={message}
        />
        <button
          onClick={(e) => handleClick(e)}
          className="text-white text-sm rounded-lg py-2 px-6 bg-primary flex ml-auto  outline-0"
          type="button"
        >
          SEND
        </button>
      </div>
    </div>
  );
}
