import React, { useEffect, useState } from "react";
import doctorsHeader from "../../assets/images/doctorsheader.png";
import Header from "../../components/header/Header";
import SidePanel from "../../components/sidePanel/SidePanel";
import FlexContainer from "../../components/UI/containers/FlexContainer";
import GridContainer from "../../components/UI/containers/GridContainer";
import ProfileCard from "../../components/UI/profileCard/ProfileCard";
import Pagination from "../../components/pagination/Pagination";
import { doctorsList } from "../../Data";
import Footer from "../../components/footer/Footer";

function DoctorsPage() {
  const [currentPage, setCurrentPage] = useState(1); //the page on current display
  const [startIndex, setStartIndex] = useState(0); //the start index of the items to display on a current page
  const [endIndex, setEndIndex] = useState(12); //the end index of the items to display on a current page
  const [cardList, setCardList] = useState([]);

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

  useEffect(() => {
    const data = doctorsList.slice(startIndex, endIndex);
    setCardList([...data]);
  }, [currentPage, startIndex, endIndex]);
  //background : #F8F9FC

  return (
    <div>
      <Header backgroundImage={doctorsHeader} />
      <FlexContainer
        style={{
          backgroundColor: "#F8F9FC",
          paddingTop: "34px",
          paddingBottom: "60px",
          paddingRight: "2.44rem",
          paddingLeft: "2.44rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <SidePanel />
        <FlexContainer
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "77%",
          }}
        >
          <GridContainer>
            {cardList.map((doctor, index) => (
              <ProfileCard
                key={index}
                name={doctor.name}
                address={doctor.address}
                image={doctor.image}
                specialty={doctor.specialty}
              />
            ))}
          </GridContainer>
          <Pagination
            currentPage={currentPage}
            onChange={paginationClickHandler}
            pageSize={12}
            itemCount={doctorsList.length}
          />
        </FlexContainer>
      </FlexContainer>
      <Footer />
    </div>
  );
}

export default DoctorsPage;
