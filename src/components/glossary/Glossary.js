import React, { useState } from "react";

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
import { blogsList, specialtiesList, radioButtonItems } from "../../Data";

// images
import doctor from "../../assets/images/doctor.png";
import blog from "../../assets/images/blog.png";
import item from "../../assets/images/item.png";
import RadioButton from "../UI/RadioButton";

function Glossary() {
  const [select, setSelect] = useState("optionA");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  return (
    <div className="glossary">
      {radioButtonItems.map((item) => (
        <RadioButton
          onChange={handleSelectChange}
          select={select}
          title={item.title}
          value={item.value}
        />
      ))}
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
