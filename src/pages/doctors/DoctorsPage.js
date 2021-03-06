import React, { useEffect, useState } from "react";
import doctorsHeader from "../../assets/images/background.png";
import Header from "../../components/header/Header";
import SidePanel from "../../components/sidePanel/SidePanel";
import FlexContainer from "../../components/UI/containers/FlexContainer";
import GridContainer from "../../components/UI/containers/GridContainer";
import ProfileCard from "../../components/UI/profileCard/ProfileCard";
import Pagination from "../../components/pagination/Pagination";
import { doctorsListPagination } from "../../Data";
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
      pageNumber > Math.ceil(doctorsListPagination.length / pageSize)
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
    const data = doctorsListPagination.slice(startIndex, endIndex);
    setCardList([...data]);
  }, [currentPage, startIndex, endIndex]);
  //background : #F8F9FC

  return (
    <div>
      <Header backgroundImage={doctorsHeader} />
      <FlexContainer
        style={{
          backgroundColor: "#F8F9FC",

          justifyContent: "center",
        }}
      >
        <FlexContainer
          style={{
            width: "90%",
            maxWidth: "1440px",
            paddingTop: "34px",
            paddingBottom: "60px",
            justifyContent: "flex-start",
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
              justifyContent: "space-between",
              height: "950px",
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
              itemCount={doctorsListPagination.length}
            />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <Footer />
    </div>
  );
}

export default DoctorsPage;
