import "./App.css";
import Search from "./components/search/Search";
import { doctorsList, blogsList, specialtiesList, hospitalsList } from "./Data";
import Blogs from "./components/blogs/Blogs";
import PopularSearches from "./components/popularSearches/PopularSearches";
import Header from "./components/header/Header";
import Doctors from "./components/doctors/Doctors";
import Hospitals from "./components/hospitals/Hospitals";
import Banner from "./components/banner/Banner";
import HealthPartners from "./components/healthPartners/HealthPartners";

function App() {
  return (
    <div className="App">
      <Header />

      <Search />
      <div className="doctors">
        <Doctors doctorsList={doctorsList} />
        <Hospitals hospitalsList={hospitalsList} />
      </div>
      <HealthPartners />
      <Banner />
      <div className="container">
        <Blogs blogsList={blogsList} />
      </div>
      <PopularSearches specialtiesList={specialtiesList} />
    </div>
  );
}

export default App;
