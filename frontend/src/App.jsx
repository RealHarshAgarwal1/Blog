import "./App.css"
import {HashRouter as Router ,Routes,Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import CreateBlog from "./pages/CreateBlog"
import Landing from "./pages/Landing"
import Profile from "./pages/Profile"
import ReadBlog from "./pages/ReadBlog"
// import Navbar from "../src/Components/Navbar"
import Layout from "../src/Components/Layout" 


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="*" element={<Landing />}/>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/createblog" element={<CreateBlog />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/readblog/:id" element={<ReadBlog />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
