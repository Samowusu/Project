import React from "react";
import DoctorProfile from "../UI/ProfileCard";
import Search from "../header/search/Search";
import Button from "../UI/Button";
import doctor from "../../assets/images/doctor.png";
import blog from "../../assets/images/blog.png";
import item from "../../assets/images/item.png";
import Typography from "../UI/Typography";
import BlogItem from "../blogs/BlogItem";
import SpecialtyItem from "../popularSearches/specialties/SpecialtyItem";
import { blogsList } from "../../Data";
import Blogs from "../blogs/Blogs";

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
    </div>
  );
}

export default Glossary;
