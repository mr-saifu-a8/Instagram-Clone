import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hook/usePost";
import { useAuth } from "../../auth/hooks/useAuth";
import Navbar from "../components/Navbar";

const Feed = () => {
  const { feed, handleGetFeed, loading } = usePost();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    handleGetFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Feed is loading...</h1>
      </main>
    );
  }

  // console.log(feed);

  return (
    <main>
      <div className="feed">
        <Navbar/>
        {feed.map((post) => (
          <Post key={post._id} user={post.user} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Feed;
