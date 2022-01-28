import React from "react";
import classes from "./BlogItem.module.css";
import blogImage from "../../assets/images/blog.png";

BlogItem.defaultProps = {
  date: "Sat Apr 03 2021",
  title: "Misconceptions on ageing and health",
  image: blogImage,
};

function BlogItem({ date, title, image }) {
  return (
    <div
      className={classes["blog-item"]}
      style={{ backgroundImage: `url(${image})` }}
    >
      <p>{date}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default BlogItem;
