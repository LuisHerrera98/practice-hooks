import React, { useState } from "react";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: "lucho",
    email: "lucho@gmail.com",
  })

  const { username, email} = formState;

  const onImputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }


  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onImputChange}
      />

<input
        type="email"
        className="form-control mt-2"
        placeholder="lucho@gmail.com"
        name="email"
        value={email}
        onChange={onImputChange}
      />
    </>
  );
};
