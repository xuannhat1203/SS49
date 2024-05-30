import { NavLink, Outlet } from "react-router-dom";

export default function BT08() {
  return (
    <>
      <nav>
        <NavLink to="admin">Admin</NavLink>
        <NavLink to="product">Product</NavLink>
        <NavLink to="account">Account</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
