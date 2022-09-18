import React from "react";

//components import
import Navbar from "../src/components/Navbar";
import Search from "../src/components/Search";
import Cards from "./components/Cards";

//redux import
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "./redux/postbyid";
import { fetchPosts } from "./redux/posts";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts())
    // dispatch(fetchPostById(2))
  }, [dispatch])

  const posts = useSelector((state) => state.posts);
  const postbyid = useSelector((state) => state.postbyid)

  return (
    <>
      <Navbar />
      <div className="container">
        <Search />
        <Cards data={posts} />
      </div>
    </>
  );
}

export default App;
