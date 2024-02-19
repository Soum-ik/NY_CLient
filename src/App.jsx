import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import CouresPage from "./components/pages/CouresPage";
import DeshBorad from "./components/(deshboard)/Admin/admin";
import FormFeild from "./components/(alloverNeed)/forms";
import HeroDesh from "./components/(deshboard)/pages/component/HeroDesh";
import CourseOfferDesh from "./components/(deshboard)/pages/component/CourseOfferDesh";
import Knowledge from "./components/(deshboard)/pages/component/KnowledgeDesh";
import CouresPageDesh from "./components/(deshboard)/pages/CourseDesh";
import RecviewPageDesh from "./components/(deshboard)/pages/ReviewDesh";
import SocialPageDesh from "./components/(deshboard)/pages/SocialDesh";
import CatagoriDesh from "./components/(deshboard)/pages/CTDesh";
import CeoPageDesh from "../src/components/(deshboard)/pages/component/CeoDesh";
import EditDelete from "../src/components/(deshboard)/pages/component/CourseEditAndDelete/Course";
import PostCourse from "../src/components/(deshboard)/pages/component/CourseEditAndDelete/Post";
import Banner from "./components/(deshboard)/pages/BannerDesh";
import ApplyNow from "./components/(deshboard)/pages/component/applyNow";
import ImagesDesh from "./components/(deshboard)/pages/ImagesDesh";
import ForgotPassword from "./components/(alloverNeed)/forgot-password";
import ResetPassword from "./components/(alloverNeed)/reset-password";
export default function App() {
  return (
    <div className=" w-full min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/coures/:id" element={<CouresPage />} />
        <Route path="/admin" element={<FormFeild />} />
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset_password/:id" element={<ResetPassword />}></Route>
        <Route path="/Apply-now-data" element={<ApplyNow />} />
        <Route path="/Images" element={<ImagesDesh />} />
        <Route path="/panel" element={<DeshBorad />} />
        <Route path="/customer-review" element={<RecviewPageDesh />} />
        <Route path="/social-media" element={<SocialPageDesh />} />
        <Route path="/hero" element={<HeroDesh />} />
        <Route path="/course-offer" element={<CourseOfferDesh />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/ceo" element={<CeoPageDesh />} />
        <Route path="/courses" element={<CouresPageDesh />} />
        <Route path="/courses/edit/:id" element={<EditDelete />} />
        <Route path="/courses/post" element={<PostCourse />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/categories" element={<CatagoriDesh />} />
      </Routes>
    </div>
  );
}
