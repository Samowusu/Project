import React from "react";
import classes from "./BlogItem.module.css";

function BlogItem() {
  return (
    <div className={classes["blog-item"]}>
      <p>Sat Apr 03 2021</p>
      <h2>
        Misconceptions on ageing
        <br /> and health
      </h2>
    </div>
  );
}

export default BlogItem;
