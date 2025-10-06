import React, { useState } from 'react';
import { Button } from '@mui/material';

const UseState3 = () => {
  let initialObj = [
    {
      id: 1,
      name: "sai",
      age: 27,
      phone: 9100949208,
      email: "basamgurusai123@gmail.com"
    },
    {
      id: 2,
      name: "gurusai",
      age: 27,
      phone: 9100949208,
      email: "basamgurusai123@gmail.com"
    },
    {
      id: 3,
      name: "gurusai",
      age: 27,
      phone: 9100949208,
      email: "basamgurusai123@gmail.com"
    }
  ];

  const [data, setData] = useState(initialObj);

  const changeName = (id) => {
    setData(
      data.map((item) =>
        item.id === id
          ? { ...item, name: "sai" }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <table border="1" cellPadding="5" style={{margin:"auto"}}  >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, age, phone, email }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>
                <button style={{ color: "red" }} onClick={() => changeName(id)}>Change Name</button>
                <Button
                  style={{ color: "white", backgroundColor: "red", marginLeft: "8px" }}
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseState3;
