import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import config from "../../../config";

function ResetPassword() {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${config.apiUrl}reset-password/${id}`, {
        password,
      });
      if (res.data) {
        alert("Password change succes fully");
        navigate("/admin");
      }
    } catch (error) {
      alert("Password are not change succes fully");
      console.log(error);
    }
  };

  return (
    <div className=" bg-gray-100 grid place-content-center min-h-screen">
      <div className=" space-y-6 bg-white rounded-md min-w-[300px] border px-5 py-3">
        <h1 className=" text-xl">New Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <input
              type="password"
              placeholder="password"
              autoComplete="off"
              name="password "
              className=" border px-2 py-1 min-w-[330px]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className=" w-100 rounded bg-color px-2 py-1">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
