import React from "react";

//react router dom import
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//components import
import Navbar from "../src/components/Navbar";
import Cards from "./components/Cards";

//redux import
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/posts";
import DetailView from "./components/DetailView";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const posts = useSelector((state) => state.posts);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Cards data={posts} />} />
          <Route exact path="/post/:id" element={<DetailView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
