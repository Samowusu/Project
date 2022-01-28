import "./App.css";
import Search from "./components/search/Search";
import DoctorProfile from "./components/doctors/DoctorProfile";
import BlogItem from "./components/blogs/BlogItem";
import SpecialtyItem from "./components/popularSearches/specialties/SpecialtyItem";
import Button from "./components/UI/Button";
import { doctorsList, blogsList, specialtiesList } from "./Data";

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
        {blogsList.map((blogItem) => (
          <BlogItem
            title={blogItem.title}
            date={blogItem.date}
            image={blogItem.image}
          />
        ))}
      </div>
      <div className="container">
        {specialtiesList.map((item) => (
          <SpecialtyItem title={item.title} image={item.image} />
        ))}
      </div>
      <Button className="ui-button">All Doctors</Button>
    </div>
  );
}

export default App;
