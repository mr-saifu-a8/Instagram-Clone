import { useContext } from "react";
import { PostContext } from "../post.context";
import { getFeed } from "../services/post.api";

export const usePost = () => {
  const context = useContext(PostContext);

  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    try {
      const data = await getFeed();
      setFeed(data.posts);
    } catch (error) {
      console.error("Error fetching feed:", error);
      // Handle error, e.g., set error state
    } finally {
      setLoading(false);
    }
  };

  return { loading, feed, post, handleGetFeed };
};
