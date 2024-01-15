import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import CouresPage from "./components/pages/CouresPage";
import DeshBorad from "./components/(deshboard)/Admin/admin";
import FormFeild from "./components/(alloverNeed)/forms";

export default function App() {
  return (
    <div className=" w-full min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/coures/:id" element={<CouresPage />} />
        <Route path="/admin" element={<FormFeild />} />
        <Route path="/panel/*" element={<DeshBorad />} />
      </Routes>
    </div>
  );
}
