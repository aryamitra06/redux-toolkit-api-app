import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/user";

function App() {
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(fetchPosts())
  }, [dispatch])

  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <>
    </>
  );
}

export default App;
