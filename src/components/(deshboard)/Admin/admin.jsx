import Layout from "../../Layout/layout";
import AdminNav from "../../Navbar/adminNav";
import SideBar from "../../(alloverNeed)/SideBar";
// eslint-disable-next-line react/prop-types
export default function Admin({ children }) {
  return (
    <div className=" bg-white/5 ">
      <Layout>
        <AdminNav />
        <div className="min-h-[1000px] flex items-start justify-center gap-10 fixed">
          <SideBar />
          <div className=" mt-10 ">
            {children || "Welcome to our deshboard"}
          </div>
        </div>
      </Layout>
    </div>
  );
}
