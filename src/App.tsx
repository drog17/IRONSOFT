import Main from "./pages/Home/Main";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About/About";
import Layout from "./widgets/Layout/Layout";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import Web from "./pages/WebDev/Web";
import BlogProd from "./pages/BlogProd/BlogProd";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path='/works' element={<Works />} />
          <Route path="/web" element={<Web />} />
          <Route path='/blogprod' element={<BlogProd />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
