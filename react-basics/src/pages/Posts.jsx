import { useQuery } from "../hooks/useQuery";

function Posts() {
  const {
    state,
    data: posts,
    errorMssg,
  } = useQuery("https://jsonplaceholder.typicode.com/posts");
  return (
    <>
      <h2>Posts:</h2>
      <ul>
        {state === "loading" && <p>loading</p>}
        {state === "success" &&
          posts.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}

        {state === "error" && <p>{errorMssg}</p>}

        {/* {posts.length ? (
        posts.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })
      ) : (
        <p>loaidng....</p>
      )} */}
      </ul>
    </>
  );
}

export default Posts;
