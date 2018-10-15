import React, { Component } from "react";
import "./Post.css";
import PhotosList from "./axios";
class Post extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const nickname = this.props.nickname;
    const avatar = this.props.avatar;
    const caption = this.props.caption;

    return (
      <article className="Post" ref="Post">
        <header>
            <div className="Post-user">
                <div className="Post-user-avatar">
                    <img src={avatar} alt={nickname} />
                </div>
                <div className="Post-user-nickname">
                    <span>{nickname}</span>
                </div>
            </div>
        </header>
        <div className="Post-image">
            <div className="Post-image-bg">
                <PhotosList />
            </div>
        </div>
        <div className="Post-caption">
          <strong>{nickname}</strong>{caption}
        </div>
      </article>
    );
  }
}
export default Post;
