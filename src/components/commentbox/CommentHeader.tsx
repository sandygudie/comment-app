import React, { ImgHTMLAttributes } from "react";
import Image from "next/image";
// import { useAppContext } from "../../../context/index";
import { useSelector } from 'react-redux';
import { addComment,appData  } from "../../redux/commentSlice";

interface Props {
  userimage: ImgHTMLAttributes<HTMLImageElement> | any;
  createdAt: string;
  username: string;
  commentId: number;
  setIsReply: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentHeader({ createdAt, username, userimage }: Props) {
  // const { currentUser } = useAppContext();
  const data = useSelector(appData );

  return (
    <div className="flex items-center">
      <Image
        src={userimage?.webp}
        alt="profile_image"
        width={20}
        height={20}
        className="rounded"
      />
      <p className="ml-3 font-semibold text-gray-500">{username}</p>
      {data.currentUser.username === username && (
        <p className="px-[4px] ml-1 text-white text-xs bg-primary rounded-sm">
          YOU
        </p>
      )}
      <p className="ml-3 text-gray-200 font-medium">{createdAt}</p>
    </div>
  );
}

export default CommentHeader;
