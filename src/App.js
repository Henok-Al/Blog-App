import "./App.css";
import "./style.scss";
import "./media-query.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import AddEditBlog from "./pages/AddEditBlog";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <Header 
      setActive={setActive}
      active={active}
      user={user}
      />
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<AddEditBlog />} />
        <Route path="/update/:id" element={<AddEditBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth setActive={setActive} setUser={setUser}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
