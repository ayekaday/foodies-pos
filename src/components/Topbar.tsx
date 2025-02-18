import { useNavigate } from "react-router-dom";

export function Topbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div
      className={`flex ${
        isLoggedIn ? "justify-between" : "justify-center"
      } bg-[#c1121f] text-[#fdf0d5] px-3  text-[30px] h-[10%] items-center`}
    >
      {isLoggedIn ? (
        <>
          <h3>Foodies Pos</h3>
          <h3>Yangon</h3>
          <h3 className="cursor-pointer" onClick={handleLogout}>
            Logout
          </h3>
        </>
      ) : (
        <h3>Login</h3>
      )}
    </div>
  );
}
