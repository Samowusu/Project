import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BlogItem from "./BlogItem";
import classes from "./Blogs.module.css";

Blogs.defaultProps = {
  blogsList: [],
  itemsPerSlide: 4,
  justifyContent: "center",
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
    <div className={classes["carousel-container"]}>
      <Carousel showThumbs={false} showArrows={false} showStatus={false}>
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
  );
}

export default Blogs;
