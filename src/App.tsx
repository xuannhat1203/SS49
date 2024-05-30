import { Route, Routes } from "react-router-dom";
import BT01 from "./Components/BT01";
import BT02 from "./Components/BT02";
import BT03 from "./Components/BT03";
import BT04 from "./Components/BT04";
import Notfound from "./Components/Notfound";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import BT07 from "./Components/BT07";
import BT06 from "./Components/BT06";
import Products from "./Components/Products";
import Details from "./Components/Details";
import BT08 from "./Components/BT08";
import Admin from "./Components/Admin/Admin";
import Account from "./Components/Account/Account";
import Product from "./Components/Product/Product";
import BT09 from "./Components/BT09";
import HomePage from "./Components/HomePage/HomePage";
import BT10 from "./Components/BT10";
import ListUser from "./Components/ListUser/ListUser";
import UserDetails from "./Components/UserDetail/UserDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BT01 />} />
        <Route path="/contact" element={<BT02 />} />
        <Route path="/login" element={<BT03 />} />
        <Route path="/register" element={<BT04 />} />
        <Route path="/BT06" element={<BT06 />}>
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/BT07" element={<BT07 />}>
          <Route path="home" element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/BT08" element={<BT08 />}>
          <Route path="admin" element={<Admin />} />
          <Route path="account" element={<Account />} />
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="/BT09" element={<BT09 />}>
          <Route path="homepage" element={<HomePage />} />
        </Route>
        <Route path="/BT10" element={<BT10 />}>
          <Route path="ListUser" element={<ListUser />} />
          <Route path="UserDetail" element={<UserDetails></UserDetails>} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}
