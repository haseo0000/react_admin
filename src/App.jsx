import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Tobbar from "./components/topbar/Tobbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import "./App.css";

function App() {
  return (
    <div>
      <Tobbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quickmenu/users" element={<UserList />} />
          <Route path="/quickmenu/user/:userId" element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
