import React from 'react'
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreVertical,
} from "lucide-react";
const Post = ({user, post}) => {
  return (
    <div>
      <div className="posts">
        {/* Header */}
        <div className="user">
          <div className="user__left">
            <img
              src={user.profileImage}
              alt="avatar"
            />
            <div className="user__info">
              <span className="username">{user.username}</span>
              <span className="location">New York, NY</span>
            </div>
          </div>
          <div className="user__actions">
            <button className="follow-btn">Follow</button>
            <button className="more-btn">
              <MoreVertical size={20} color="#262626" />
            </button>
          </div>
        </div>

        {/* Post Image */}
        <img
          className="posts__image"
          src={post.imgUrl}
          alt="post"
        />

        {/* Action Buttons */}
        <div className="actions">
          <div className="actions__left">
            <button className="action-btn">
              <Heart size={24} color="#262626" />
            </button>
            <button className="action-btn">
              <MessageCircle size={24} color="#262626" />
            </button>
            <button className="action-btn">
              <Send size={24} color="#262626" />
            </button>
          </div>
          <button className="bookmark-btn">
            <Bookmark size={24} color="#262626" />
          </button>
        </div>

        {/* Bottom */}
        <div className="bottom">
          <p className="likes">1,284 likes</p>
          <p className="caption">
            <span className="caption__user">{user.username}</span>
           {post.caption}
            <button className="caption__more">more</button>
          </p>
          <button className="view-comments">View all 42 comments</button>
          <span className="timestamp">2 hours ago</span>

          <div className="add-comment">
            <img
              src="https://images.unsplash.com/photo-1528120369764-0423708119ae?w=900&auto=format&fit=crop&q=60"
              alt="you"
            />
            <input type="text" placeholder="Add a comment…" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post