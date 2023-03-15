import Home from "./pages/Home"
import Login from "./login/Login";
import Register from "./register/Register";
import Settings from "./Settings/Settings";
import Single from "./single/Single";
import Topbar from "./topbar/topbar";
import Write from "./write/Write";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Contact from "./pages/contact/Contact";
function App() {
  const user=false;
  return (
    <>
      <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Home/>:<Register/>}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Home/>:<Login/>}></Route>
      </Routes>
      <Routes>
        <Route path="/settings" element={user ? <Settings/>:<Register/>}></Route>
      </Routes>
      <Routes>
        <Route path="/write" element={user ? <Write/>:<Register/>}></Route>
      </Routes>
      <Routes>
        <Route path="/post/:postId/" element={<Single/>}></Route>
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
