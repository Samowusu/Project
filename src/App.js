import "./App.css";
import Search from "./components/search/Search";
import { doctorsList, blogsList, specialtiesList, hospitalsList } from "./Data";
import Blogs from "./components/blogs/Blogs";
import PopularSearches from "./components/popularSearches/PopularSearches";
import Header from "./components/header/Header";
import Doctors from "./components/doctors/Doctors";
import Hospitals from "./components/hospitals/Hospitals";
import Banner from "./components/banner/Banner";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <Button>Testing...</Button>
      <Search />
      <div className="doctors">
        <Doctors doctorsList={doctorsList} />
        <Hospitals hospitalsList={hospitalsList} />
      </div>
      <Banner />
      <div className="container">
        <Blogs blogsList={blogsList} />
      </div>
      <PopularSearches specialtiesList={specialtiesList} />
    </div>
  );
}

export default App;
