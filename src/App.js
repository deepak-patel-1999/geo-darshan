// src/App.js
import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Publications from "./Components/Publications";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Tutorial from "./Components/Tutorial";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Auth/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Blogs from "./Components/Blogs/Blog";
import Tutorials from "./Components/Tutorials/Tutorials";
import GalleryList from "./Components/Gallery/Gallery";
// import PrivateRoute from "./Components/PrivateRoute"; // Assuming you created this to protect the admin route

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Route with Blogs as a subroute */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          >
            <Route path="blogs" element={<Blogs />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="gallery" element={<GalleryList />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
