import "./App.css";
import { doctorsList, blogsList, specialtiesList, hospitalsList } from "./Data";
import Blogs from "./components/blogs/Blogs";
import PopularSearches from "./components/popularSearches/PopularSearches";
import Header from "./components/header/Header";
import Doctors from "./components/doctors/Doctors";
import Hospitals from "./components/hospitals/Hospitals";
import Banner from "./components/banner/Banner";
import HealthPartners from "./components/healthPartners/HealthPartners";
import Footer from "./components/footer/Footer";
import Featured from "./components/featured/Featured";
function App() {
  return (
    <div className="App">
      <Header />
      <Featured doctorsList={doctorsList} hospitalsList={hospitalsList} />
      {/* <div className="doctors">
        <Doctors doctorsList={doctorsList} />
        <Hospitals hospitalsList={hospitalsList} />
      </div> */}
      <HealthPartners />
      <Banner />
      <Blogs blogsList={blogsList} />
      <PopularSearches specialtiesList={specialtiesList} />
      <Footer />
    </div>
  );
}

export default App;
