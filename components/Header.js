import axios from "axios";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");
    router.push("/");
    console.log(user);
  };
  return (
    <div className="db__header">
      <div className="db__header-icon">
        <i className="fa-solid fa-circle-user"></i>
      </div>
      <div className="db__header-title">Welcome John</div>
      <span style={{ margin: "0px 0px 0px 10px" }}></span>
      <button onClick={() => handleLogOut()}> Logout </button>
    </div>
  );
};

export default Header;
