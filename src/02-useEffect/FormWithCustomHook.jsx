import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onImputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const {username, email, password} = formState;


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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="lucho@gmail.com"
        name="password"
        value={password}
        onChange={onImputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>resert form</button>
    </>
  );
};
