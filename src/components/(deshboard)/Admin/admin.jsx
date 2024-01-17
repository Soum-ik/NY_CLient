import Layout from "../../Layout/layout";
import AdminNav from "../../Navbar/adminNav";
import SideBar from "../../(alloverNeed)/SideBar";
// eslint-disable-next-line react/prop-types
export default function Admin({ children }) {
  return (
    <div className=" bg-slate-100/70  backdrop-blur-3xl sm:min-h-[150vh]">
      <Layout>
        <AdminNav />
        <div className=" flex items-start justify-center gap-10 fixed">
          <SideBar />
          <div className=" mt-10 ">
            {children || "Welcome to our deshboard"}
          </div>
        </div>
      </Layout>
    </div>
  );
}
