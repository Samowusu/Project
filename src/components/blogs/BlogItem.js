import React from "react";
import classes from "./BlogItem.module.css";
import blogImage from "../../assets/images/blog.png";
import Text from "../UI/Text";

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
      {/* <p>{date}</p>
      <h2>{title}</h2> */}
      <Text
        fontSize={"m"}
        fontWeight="regular"
        marginBottom={"0.63rem"}
        color="#fff"
        textAlign={"start"}
      >
        {date}
      </Text>
      <Text
        fontSize={"xl"}
        fontWeight="bolder"
        lineHeight={"1.69rem"}
        color="#fff"
        textAlign={"start"}
      >
        {title}
      </Text>
    </div>
  );
}

export default BlogItem;
