import "./App.css";
import Search from "./components/search/Search";
import DoctorProfile from "./components/doctors/DoctorProfile";
import BlogItem from "./components/blogs/BlogItem";
import SpecialtyItem from "./components/popularSearches/specialties/SpecialtyItem";

function App() {
  return (
    <div className="App">
      <Search />
      <div className="doctors">
        <DoctorProfile />
        <SpecialtyItem />
      </div>
      <BlogItem />
    </div>
  );
}

export default App;
