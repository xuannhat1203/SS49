import { NavLink, Outlet } from "react-router-dom";

export default function BT10() {
  return (
    <>
      <nav>
        <NavLink to="/BT10/ListUser">ListUser</NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
