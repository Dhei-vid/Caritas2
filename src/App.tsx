import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AboutUs from "./pages/About-Us";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Members from "./pages/Members";
import Contact from "./pages/Contact-Us";
import Footer from "./components/footer/footer";
import Navigation from "./components/navbar/navbar";
import ScrollToTop from "./components/custom/scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={"/"} element={<Navigation />}>
          <Route path={"/"} element={<Footer />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/aboutus"} element={<AboutUs />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/gallery"} element={<Gallery />} />
            <Route path={"/members"} element={<Members />} />
            <Route path={"/contactus"} element={<Contact />} />
            <Route path={"/admin"} element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
