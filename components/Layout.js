import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
