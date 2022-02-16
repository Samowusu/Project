import React from "react";

// components
import DoctorProfile from "../UI/ProfileCard";
import Search from "../header/search/Search";
import Button from "../UI/Button";
import Typography from "../UI/Typography";
import Blogs from "../blogs/Blogs";
import BlogItem from "../blogs/BlogItem";
import SpecialtyItem from "../popularSearches/specialties/SpecialtyItem";
import HorizontalScrollbarComponent from "../horizontalScrollbar/HorizontalScrollbarComponent";

// data
import { blogsList, specialtiesList } from "../../Data";

// images
import doctor from "../../assets/images/doctor.png";
import blog from "../../assets/images/blog.png";
import item from "../../assets/images/item.png";

function Glossary() {
  return (
    <div className="glossary">
      <DoctorProfile
        key="D1"
        name="Dr. Yvw Bimpong"
        address={{
          streetName: "Kontomire Street",
          hospitalName: "Valentino",
          province: "14th Feb Ave",
        }}
        image={doctor}
        specialty="Love Doctor"
        isVerified={true}
      />
      <Search />
      <Button onClick={() => {}} style={{ backgroundColor: "#ff7d19" }}>
        Takes a children props
      </Button>
      {/* other style props can be passed to the button 
      component to suit a particular design model. 
      refer to Button.js file in the UI folder for more info */}
      <Typography
        fontSize={"xl"}
        fontWeight="regular"
        color={"blue"}
        textAlign={"start"}
      >
        Takes Children as props....
      </Typography>
      {/* other style props can be passed to the typography 
      component to suit a particular design model. 
      refer to Typography.js file in the UI folder for more info */}
      <BlogItem
        key="b1"
        title="Blog Title Appears Here"
        date="Mon Feb 14 2022"
        image={blog}
      />
      <Blogs blogsList={blogsList} />

      <SpecialtyItem title="Optometry" image={item} onClick={() => {}} />
      <HorizontalScrollbarComponent
        parentClass="scrollContainer"
        RenderItemsList={(clickHandler) => {
          return specialtiesList.map((item, index) => (
            <SpecialtyItem
              title={item.title}
              image={item.image}
              key={index}
              onClick={() => clickHandler(() => console.log({ index }))}
            />
          ));
        }}
      />
    </div>
  );
}

export default Glossary;
