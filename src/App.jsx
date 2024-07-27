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
import LogoDesh from "./components/(deshboard)/pages/logosDesh";
import ContactPage from "./components/pages/ContactPage";
import Meta from './components/meta';
export default function App() {
  return (
    <div className=" w-full min-h-screen">
      <Meta />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/course/:id" element={<CouresPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset_password/:id" element={<ResetPassword />}></Route>
        <Route path="/login" element={<FormFeild />} />
        <Route path="/admin/hero" element={<HeroDesh />} />
        <Route path="/admin/courses" element={<CouresPageDesh />} />
        <Route path="/admin/knowledge" element={<Knowledge />} />
        <Route path="/admin/Apply-now-data" element={<ApplyNow />} />
        <Route path="/admin/Images" element={<ImagesDesh />} />
        <Route path="/admin/panel" element={<DeshBorad />} />
        <Route path="/admin/customer-review" element={<RecviewPageDesh />} />
        <Route path="/admin/social-media" element={<SocialPageDesh />} />
        <Route path="/admin/course-offer" element={<CourseOfferDesh />} />
        <Route path="/admin/ceo" element={<CeoPageDesh />} />
        <Route path="/admin/courses/edit/:id" element={<EditDelete />} />
        <Route path="/admin/courses/post" element={<PostCourse />} />
        <Route path="/admin/logo" element={<LogoDesh />} />
        <Route path="/admin/Banner" element={<Banner />} />
        <Route path="/admin/categories" element={<CatagoriDesh />} />
      </Routes>
    </div>
  );
}
