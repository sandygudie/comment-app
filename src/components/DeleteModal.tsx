import React from "react";
import classes from "../styles/index.module.css";
import { useDispatch } from "react-redux";
import { deleteComment } from "../redux/commentSlice";

function DeleteModal({ commentId, setisDelete }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.drawer} onClick={() => setisDelete(false)} />
      <div className={classes.drawerContent}>
        <h3 className="font-semibold text-gray-500 text-xl">Delete comment</h3>
        <p className="my-4 text-gray-200 font-medium">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex items-center font-semibold text-sm justify-between text-white">
          <button
            onClick={() => {
              setisDelete(false);
            }}
            className="py-3 px-6 bg-gray-200 rounded-md"
          >
            NO, CANCEL
          </button>
          <button
            onClick={() => {
              dispatch(deleteComment({ commentId }));
            }}
            className="py-3 px-6 bg-error rounded-md"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
