import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface List {
  id: number;
  name: string;
  email: string;
  address: string;
}

export default function ListUser() {
  let navigate = useNavigate();
  const [detail, setDetail] = useState<List>({
    id: 0,
    name: "",
    email: "",
    address: "",
  });

  const listUser: List[] = [
    {
      id: 1,
      name: "Nguyen Van A",
      email: "NguyenVanA@gmail.com",
      address: "Hai Duong",
    },
    {
      id: 2,
      name: "Nguyen Van B",
      email: "NguyenVanB@gmail.com",
      address: "Hai Duong",
    },
    {
      id: 3,
      name: "Nguyen Van C",
      email: "NguyenVanC@gmail.com",
      address: "Hai Duong",
    },
  ];

  const showDetail = (id: number) => {
    const findUser = listUser.find((user) => user.id === id);
    if (findUser) {
      setDetail(findUser);
      navigate("/BT10/UserDetail", { state: findUser });
    }
  };

  return (
    <>
      {listUser.map((user) => (
        <div key={user.id}>
          <h5>ID: {user.id}</h5>
          <h5>UserName: {user.name}</h5>
          <h5>Email: {user.email}</h5>
          <h5>Address: {user.address}</h5>
          <button onClick={() => showDetail(user.id)}>Show Detail</button>
        </div>
      ))}
    </>
  );
}
