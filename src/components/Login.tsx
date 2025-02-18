import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleLoggedIn = () => {
    const isValid =
      user.email === "akd279@gmail.com" && user.password === "akd@";

    if (!isValid) {
      return alert("Your email or password is wrong!");
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      handleLoggedIn();
    }
  };

  return (
    <Layout>
      <div className="flex  justify-center items-center w-full h-full ">
        {" "}
        <div className="flex flex-col justify-center items-center">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 mb-4 py-3 pl-2 rounded-sm w-[250px]"
            onChange={(evt) => {
              setUser({ ...user, email: evt.target.value });
            }}
            onKeyDown={handleKeyDown}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 mb-4 py-3 pl-2 rounded-sm w-[250px]"
            onChange={(evt) => {
              setUser({ ...user, password: evt.target.value });
            }}
            onKeyDown={handleKeyDown}
          />
          <button
            className="border  mb-4 w-24  p-2 rounded-3xl hover:bg-blue-500 hover:text-white border-neutral-500 bg-white text-black  hover:font-bold"
            onClick={handleLoggedIn}
          >
            {" "}
            Login
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
