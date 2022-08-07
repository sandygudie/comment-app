import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import Comments from "../components/Comments";
import MessageBox from "../components/MessageBox";
import { appData } from "../redux/commentSlice";

function index() {
  const data = useSelector(appData);
  return (
    <div className="p-2 lg:w-1/2 m-auto mt-4 md:mt-16">
      <Head>
        <title>Interactive Comment App</title>
      </Head>

      {data.comments.map((item) => (
        <Comments comment={item} key={item.id} />
      ))}
      <MessageBox />
    </div>
  );
}

export default index;
