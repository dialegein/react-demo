/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

const Blog = () => {
  const [data, setData] = useState([]);
  const [currentPage, setPage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPost = (page) => {
    setLoading(true);
    setPage(page);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      .then((res) => {
        setLoading(false);
        setData([...data, ...res.data]);
      });
  };

  useEffect(() => {
    if (currentPage !== null) {
      const scrollHandler = () => {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        if (scrollHeight - scrollTop === clientHeight) {
          getPost(currentPage + 1);
        }
      };
      window.addEventListener("scroll", scrollHandler); // 绑定滚动事件
      return () => window.removeEventListener("scroll", scrollHandler);
    }
  }, [currentPage, data]);

  useEffect(() => {
    getPost(1);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pb-24 m-0 bg-blue-500 text-white">
      <h1 className="text-center">My Blog</h1>

      <div className="mt-5 w-4/5 max-w-3xl">
        <input
          type="text"
          id="filter"
          className=" w-full p-3 text-base box-border text-black"
          placeholder="Filter posts..."
        />
      </div>

      <div className="box-border w-screen">
        {data?.map(({ title, body, id }, index) => (
          <div
            key={String(id)}
            className="flex relative bg-blue-800 shadow-xl rounded-md p-5 my-10 max-w-3xl w-4/5 mx-auto"
          >
            <div className="flex items-center justify-center absolute -top-4 -left-4 text-base w-10 h-10 rounded-full bg-white text-blue-500 px-3 py-2">
              {index + 1}
            </div>
            <div>
              <h2>{title}</h2>
              <p className="leading-5 mt-4">{body}</p>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="flex fixed bottom-12 transition-opacity">
          <div className=" bg-white w-2 h-2 rounded-full m-1 animate-loading"></div>
          <div
            className=" bg-white w-2 h-2 rounded-full m-1 animate-loading"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className=" bg-white w-2 h-2 rounded-full m-1 animate-loading"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Blog;
