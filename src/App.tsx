import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";
import Main from "./pages/Home/Main";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About/About";
import Layout from "./widgets/Layout/Layout";
import Blog from "./pages/Blog/Blog";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Blog/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
