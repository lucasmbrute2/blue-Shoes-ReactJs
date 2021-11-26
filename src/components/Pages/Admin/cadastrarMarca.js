import { useState, useEffect } from "react";
import { Api } from "../../../Api/Api";
import "./Admin.css";

export default function CadastarProd(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="cad__main">
      <form className="form__main" onSubmit={handleSubmit}>
        <h1 className="h1__inicio">Cadastrar Marca</h1>
        <label htmlFor="nome" className="form__label">
          Nome:
          <input type="text" id="nome" name="nome" className="form__input" />
        </label>
        <label htmlFor="nome" className="form__label">
          Logo:
          <input type="text" id="logo" name="logo" className="form__input" />
        </label>
        <button type="submit" className="button__enviar">Enviar</button>
      </form>
    </div>
  );
}
