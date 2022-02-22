import React, { useState, useMemo, useEffect } from "react";

// components
import ProfileCard from "../UI/ProfileCard";
import Search from "../header/search/Search";
import Button from "../UI/Button";
import Typography from "../UI/Typography";
import Blogs from "../blogs/Blogs";
import BlogItem from "../blogs/BlogItem";
import SpecialtyItem from "../popularSearches/specialties/SpecialtyItem";
import HorizontalScrollbarComponent from "../horizontalScrollbar/HorizontalScrollbarComponent";

// data
import {
  blogsList,
  specialtiesList,
  radioButtonItems,
  doctorsList,
} from "../../Data";

// images
import doctor from "../../assets/images/doctor.png";
import blog from "../../assets/images/blog.png";
import item from "../../assets/images/item.png";
import RadioComponent from "../UI/RadioComponent";
import CheckedRadioIcon from "../../assets/svgs/CheckedRadioIcon";
import UncheckedRadioIcon from "../../assets/svgs/UncheckedRadioIcon";

// let PageSize = 4;

const SORT_OPTIONS = ["Most Relevant", "Closest", "Highest Rated"];

const DISTANCE_OPTIONS = ["100km", "200km", "300km", "Near Me", "National"];

function Glossary() {
  // const [objState, setObjState] = useState({
  //   sort: SORT_OPTIONS[0],
  //   distance: DISTANCE_OPTIONS[0],
  // });

  const [sortState, setSortState] = useState(SORT_OPTIONS[0]);
  const [distanceState, setDistanceState] = useState(DISTANCE_OPTIONS[0]);

  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log({ sortState, distanceState });
  }, [sortState, distanceState]);

  // const handleSelectChange = (key, val) => {
  //   const updatedState = { ...objState, [key]: val };
  //   setObjState({ ...updatedState });
  //   console.log("clicked");
  // };

  const handleSortChange = (val) => {
    setSortState(val);
  };

  const handleDistanceChange = (val) => {
    setDistanceState(val);
  };

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return doctorsList.slice(firstPageIndex, lastPageIndex); //returns an array of 4 items per table
  // }, [currentPage]);

  // return (
  //   <>
  //     <div className="grid">
  //       {currentTableData.map((doctor) => (
  //         <ProfileCard
  //           key={doctor.id}
  //           name={doctor.name}
  //           address={doctor.address}
  //           image={doctor.image}
  //           specialty={doctor.specialty}
  //         />
  //       ))}
  //     </div>
  //     <Pagination
  //       className="pagination-bar"
  //       currentPage={currentPage}
  //       totalCount={doctorsList.length}
  //       pageSize={PageSize}
  //       onPageChange={(page) => setCurrentPage(page)}
  //     />
  //   </>
  // );

  return (
    <div className="glossary">
      <RadioComponent
        options={SORT_OPTIONS}
        onChange={(val) => handleSortChange(val)}
        header="Sort"
      />
      <RadioComponent
        options={DISTANCE_OPTIONS}
        onChange={(val) => handleDistanceChange(val)}
        header="Distance"
      />
      <ProfileCard
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
