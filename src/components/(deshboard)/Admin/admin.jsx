import Layout from "../../Layout/layout";
import AdminNav from "../../Navbar/adminNav";
import SideBar from "../../(alloverNeed)/SideBar";
// eslint-disable-next-line react/prop-types
export default function Admin({ data }) {
  return (
    <div className=" bg-slate-200/70  backdrop-blur-3xl sm:min-h-[150vh]">
      <Layout>
        <AdminNav />
        <div className=" flex items-center justify-center gap-20 ">
          <SideBar />
          <div>
            {data ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem facere, libero cumque dolorem numquam nisi suscipit nam, quibusdam veniam ab voluptatem error, voluptatibus animi hic fugiat dicta accusantium? Fuga."}
          </div>
        </div>
      </Layout>
    </div>
  );
}
