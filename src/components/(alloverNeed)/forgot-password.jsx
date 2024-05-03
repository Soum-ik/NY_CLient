import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../config";

function ForgotPassword() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = async () => {
      const res = await axios.post(`${config.apiUrl}forgot-password`, {
        email,
      });
      console.log(res, "res data");
      if (res.data.Status === "Success") {
        navigate("/admin");
        alert("Check Your Email Please");
      } else {
        alert("Operation faild");
      }
    };
    result();
  };

  return (
    <div className=" bg-gray-50 grid place-content-center min-h-screen">
      <div className=" space-y-6 bg-white rounded-md min-w-[300px] border px-5 py-3">
        <h1 className=" text-xl">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className=" border px-2 py-1 min-w-[330px]"
              onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;
