import { NavLink, Outlet } from "react-router-dom";
import "./BT07.css";

export default function BT07() {
  return (
    <div>
      BT07
      <nav>
        <NavLink to="/BT07/home">Home</NavLink>
        <NavLink to="/BT07/products">Products</NavLink>
        <NavLink to="/BT07/details">Details</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
