import React from "react";
import CommentMsg from "./CommentMsg";
import CommentCounter from "./CommentCounter";
import CommentHeader from "./CommentHeader";
import { Comment } from "../../../types";
import ReplyBox from "./ReplyBox";

interface Props {
  commentDetails: Comment;
  setIsReply: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  replyingTo?: string;
  isEdit: boolean;
}

export const CommentBox = ({
  commentDetails,
  isEdit,
  setIsEdit,
  setIsReply,
  replyingTo,
}: Props) => {
  return (
    <>
      <div className="hidden md:flex items-start text-sm bg-white p-4 mb-4 rounded-md h-auto">
        <CommentCounter
          className="w-10 bg-gray-100 text-center text-gray-300 text-lg flex flex-col items-center justify-between px-2 rounded-md"
          score={commentDetails.score}
          commentId={commentDetails.id}
        />
        <div className="pl-4 w-full relative">
          <div className="flex justify-between mb-2">
            <CommentHeader
              setIsReply={setIsReply}
              setIsEdit={setIsEdit}
              commentId={commentDetails.id}
              userimage={commentDetails.user?.image}
              createdAt={commentDetails.createdAt}
              username={commentDetails.user?.username}
            />
            <ReplyBox
              username={commentDetails.user?.username}
              commentId={commentDetails.id}
              setIsReply={setIsReply}
              setIsEdit={setIsEdit}
            />
          </div>

          <CommentMsg
            content={commentDetails.content}
            commentId={commentDetails.id}
            replyingTo={replyingTo}
            setIsEdit={setIsEdit}
            isEdit={isEdit}
          />
        </div>
      </div>

      <div className="block md:hidden text-sm bg-white p-4 mb-4 rounded-md h-auto">
        <CommentHeader
          setIsReply={setIsReply}
          setIsEdit={setIsEdit}
          commentId={commentDetails.id}
          userimage={commentDetails.user?.image}
          createdAt={commentDetails.createdAt}
          username={commentDetails.user?.username}
        />
        <CommentMsg
          content={commentDetails.content}
          commentId={commentDetails.id}
          replyingTo={replyingTo}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
        <div className="flex justify-between items-center ">
          <CommentCounter
            className="w-20 bg-gray-100 text-center text-gray-300 text-lg flex flex-row items-center justify-between px-2 rounded-md"
            score={commentDetails.score}
            commentId={commentDetails.id}
          />
          <ReplyBox
            username={commentDetails.user?.username}
            commentId={commentDetails.id}
            setIsReply={setIsReply}
            setIsEdit={setIsEdit}
          />
        </div>
      </div>
    </>
  );
};
