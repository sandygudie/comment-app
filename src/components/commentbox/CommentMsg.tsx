import React, { useState } from "react";
import EditMessagebox from "./EditMessagebox";
interface Props {
  content: string;
  replyingTo?: string;
  isEdit?: boolean;
  setIsEdit;
  commentId: number;
}
function CommentMsg({
  content,
  replyingTo,
  commentId,
  isEdit,
  setIsEdit,
}: Props) {
  return (
    <>
      {isEdit ? (
        <EditMessagebox
          content={content}
          commentId={commentId}
          setIsEdit={setIsEdit}
        />
      ) : (
        <div className="text-sm text-gray-200 my-2 font-medium">
          {" "}
          {replyingTo && (
            <span className="font-medium text-primary font-bold">
              @{replyingTo}
            </span>
          )}{" "}
          {content}
        </div>
      )}
    </>
  );
}

export default CommentMsg;
