import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      {/* <div> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Layout;
