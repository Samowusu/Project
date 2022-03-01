import React, { useState, useEffect } from "react";

// components
import ProfileCard from "../UI/profileCard/ProfileCard";
import Search from "../header/search/Search";
import Button from "../UI/button/Button";
import Typography from "../UI/typography/Typography";
import Blogs from "../blogs/Blogs";
import BlogItem from "../blogs/BlogItem";
import SpecialtyItem from "../popularSearches/specialties/SpecialtyItem";
import HorizontalScrollbarComponent from "../horizontalScrollbar/HorizontalScrollbarComponent";
import Pagination from "../pagination/Pagination";
import SwitchButton from "../UI/switchButton/SwitchButton";
import Insurance from "../UI/insurance/Insurance";

// data
import { blogsList, specialtiesList, doctorsList } from "../../Data";
// import { pageSize } from "../pagination/Pagination";

// images
import doctor from "../../assets/images/doctor.png";
import blog from "../../assets/images/blog.png";
import item from "../../assets/images/item.png";
import RadioComponent from "../UI/radio/RadioComponent";
import CheckBoxComponent from "../UI/checkbox/CheckBoxComponent";

//DUMMY DATA
const CHECK_OPTIONS = [
  "Pediatrics",
  "Pediatrics Medicine",
  "Family Medicine",
  "Internal Medicine",
  "Allergy & Immunology",
  "General Medical Practice",
];

const SORT_OPTIONS = ["Most Relevant", "Closest", "Highest Rated"];

const DISTANCE_OPTIONS = ["100km", "200km", "300km", "Near Me", "National"];

function Glossary() {
  const [sortState, setSortState] = useState(SORT_OPTIONS[0]);
  const [distanceState, setDistanceState] = useState(DISTANCE_OPTIONS[0]);
  const [checkedState, setCheckedState] = useState(false);

  // states for managing the pagination component
  const [currentPage, setCurrentPage] = useState(1); //the page on current display
  const [startIndex, setStartIndex] = useState(0); //the start index of the items to display on a current page
  const [endIndex, setEndIndex] = useState(8); //the end index of the items to display on a current page
  const [cardList, setCardList] = useState([]); //the array items to display

  useEffect(() => {
    console.log({ sortState, distanceState });
  }, [sortState, distanceState]);

  /*take the array(from the DB or config file) and slice it into the desired 
  number of items to display per page(i.e pageSize) */
  useEffect(() => {
    const data = doctorsList.slice(startIndex, endIndex);
    setCardList([...data]);
  }, [currentPage, startIndex, endIndex]);

  const handleSortChange = (val) => {
    setSortState(val);
  };

  const handleDistanceChange = (val) => {
    setDistanceState(val);
  };

  /*paginationClickHandler is triggered when ever a pagination button is clicked.
  the firstPageIndex and lastPageIndex logic is set to provide an interval of the same
  size as the pageSize. these indexes are then used to slice the whole dataset into 
  the desired pageSize. thus used to update the `setStartIndex` and `setEndIndex` states
  */
  const paginationClickHandler = (event, pageNumber, pageSize) => {
    if (
      currentPage === pageNumber ||
      pageNumber === 0 ||
      pageNumber > Math.ceil(doctorsList.length / pageSize)
    )
      return;

    const page = pageNumber;
    const firstPageIndex = (pageNumber - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    setStartIndex(firstPageIndex);
    setEndIndex(lastPageIndex);
    setCurrentPage(page);
  };

  const switchChangeHandler = (nextChecked) => {
    setCheckedState(nextChecked);
  };

  return (
    <div className="glossary">
      <SwitchButton value={checkedState} onChange={switchChangeHandler} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          alignItems: "flex-start",
        }}
      >
        <div className="grid">
          {cardList.map((doctor, index) => (
            <ProfileCard
              key={index}
              name={doctor.name}
              address={doctor.address}
              image={doctor.image}
              specialty={doctor.specialty}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          onChange={paginationClickHandler}
          pageSize={8}
          itemCount={doctorsList.length}
        />
      </div>
      <Insurance />
      <CheckBoxComponent header={"Specialist"} options={CHECK_OPTIONS} />
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
