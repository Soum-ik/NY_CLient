import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import CouresPage from "./components/pages/CouresPage";
// import Server from "./components/backend/backend";

export default function App() {
  return (
    <div className=" w-full min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/coures/:id" element={<CouresPage />} />
      </Routes>
    </div>
  );
}
