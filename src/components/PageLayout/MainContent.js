import React from "react";
import PostList from "./../../components/PostList";

import { posts } from "./../../data/tempData.json";

const Maincontent = () => {
  return (
    <main>
      Main content goes here
      <h1>My posts</h1>
      <PostList posts={posts} />
    </main>
  );
};

export default Maincontent;
