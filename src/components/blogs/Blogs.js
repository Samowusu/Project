import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BlogItem from "./BlogItem";
import classes from "./Blogs.module.css";
import Button from "../UI/Button";
import Container from "../UI/Container";
import styled from "styled-components";

Blogs.defaultProps = {
  blogsList: [],
  itemsPerSlide: 4,
  justifyContent: "center",
};
const CarouselIndicator = (onClickHandler, isSelected, index, label) => {
  console.log({ label, isSelected });

  return (
    <Indicator
      selected={isSelected}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};

function Blogs({ blogsList, itemsPerSlide, justifyContent }) {
  const [updatedBlogsList, setUpdatedBlogsList] = useState([]);

  useEffect(() => {
    let chunkList = [];
    while (blogsList.length) {
      const updatedBlogs = blogsList.splice(0, itemsPerSlide);
      chunkList.push(updatedBlogs);
    }
    setUpdatedBlogsList(chunkList);
  }, [blogsList, itemsPerSlide]);

  return (
    <Container style={{ flexDirection: "column" }}>
      <div className={classes["carousel-container"]}>
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          autoFocus={true}
          renderIndicator={CarouselIndicator}
        >
          {updatedBlogsList.map((chunk, index) => (
            <div
              key={index}
              className={`${classes.blogs} ${classes[justifyContent]}`}
            >
              {chunk.map((blogItem) => (
                <BlogItem
                  key={blogItem.id}
                  title={blogItem.title}
                  date={blogItem.date}
                  image={blogItem.image}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
      <Button>More Posts</Button>
    </Container>
  );
}

const Indicator = styled.li`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${(props) => (props.selected ? "#f87537" : "#c4c4c4")};
  display: inline-block;
  margin: 0 8px;
  cursor: pointer;
`;

export default Blogs;
