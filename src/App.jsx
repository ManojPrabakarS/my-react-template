import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from './Pages/About';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<h3 className="text-center mt-5">404 Page Not Found</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
