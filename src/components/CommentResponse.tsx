import Comments from "./Comments";

export const CommentResponse = ({ response }) => {
  return (
    <div className="md:ml-10 border-l-[1px] border-gray-300">
      {response.map((post) => (
        <div key={post.id}>
          <div className="ml-4 md:ml-10 ">
            <Comments
              comment={post}
              key={post.id}
              replyingTo={post.replyingTo}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
