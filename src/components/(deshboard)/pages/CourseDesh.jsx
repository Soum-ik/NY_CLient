// import Addnewcourse from "../../UI/Addnewcourseform";
import Admin from "../Admin/admin";

const CouresPage = () => {
  const courses = [
    {
      id: 1,
      name: "Course A",
      description: "Short description for Course A",
      // logo: "course_a_logo.png",
    },
    {
      id: 2,
      name: "Course B",
      description: "Short description for Course B",
      // logo: "course_b_logo.png",
    },
    // Add more courses as needed
  ];
  return (
    <Admin>
      <div className="container mx-auto p-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Course Name</th>
              <th className="p-2">Short Description</th>
              <th className="p-2">Logo</th>
              <th className="p-2">Number</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="p-2">{course.name}</td>
                <td className="p-2">{course.description}</td>
                <td className="p-2">
                  <img
                    src={course.logo}
                    alt={`${course.name} Logo`}
                    className="logo"
                  />
                </td>
                <td className="p-2">{course.id}</td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white px-4 py-2 mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 mr-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Admin>
  );
};
export default CouresPage;
