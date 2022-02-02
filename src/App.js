import "./App.css";
import Search from "./components/search/Search";
import DoctorProfile from "./components/doctors/DoctorProfile";
import SpecialtyItem from "./components/popularSearches/specialties/SpecialtyItem";
import Button from "./components/UI/Button";
import { doctorsList, blogsList, specialtiesList, hospitalsList } from "./Data";
import Blogs from "./components/blogs/Blogs";
import PopularSearches from "./components/popularSearches/PopularSearches";

function App() {
  return (
    <div className="App">
      <Search />
      <div className="container">
        {doctorsList.map((doctor) => (
          <DoctorProfile
            key={doctor.id}
            name={doctor.name}
            address={doctor.address}
            image={doctor.image}
            specialty={doctor.specialty}
          />
        ))}
      </div>
      <div className="container">
        {hospitalsList.map((hospital) => (
          <DoctorProfile
            key={hospital.id}
            name={hospital.name}
            address={hospital.address}
            image={hospital.image}
          />
        ))}
      </div>
      <div className="container">
        {/* {blogsList.map((blogItem) => (
          <BlogItem
            key={blogItem.id}
            title={blogItem.title}
            date={blogItem.date}
            image={blogItem.image}
          />
        ))} */}
        <Blogs blogsList={blogsList} />
      </div>
      <PopularSearches specialtiesList={specialtiesList} />
      <Button className="ui-button">All Doctors</Button>
    </div>
  );
}

export default App;
