import { useLocation } from "react-router-dom";

export default function UserDetails() {
  const location = useLocation();
  const { state } = location;
  return (
    <div>
      <h5>ID: {state.id}</h5>
      <h5>UserName: {state.name}</h5>
      <h5>Email: {state.email}</h5>
      <h5>Address: {state.address}</h5>
    </div>
  );
}
