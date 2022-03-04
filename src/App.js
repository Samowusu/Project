import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Glossary from "./pages/Glossary";
import DoctorsPage from "./pages/DoctorsPage";
import Landing from "./pages/Landing";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Landing />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/glossary" element={<Glossary />} />

      <Route path="*" element={<Navigate replace to={"/home"} />} />
    </Routes>
  );
}

export default App;
