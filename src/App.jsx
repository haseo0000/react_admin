import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Tobbar from "./components/topbar/Tobbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
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
          <Route path="/quickmenu/newUser" element={<NewUser />} />
          <Route path="/quickmenu/products" element={<ProductList />} />
          <Route path="/quickmenu/product/:productId" element={<Product />} />
          <Route path="/quickmenu/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
