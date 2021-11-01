import { Link } from "react-router-dom";
import "./SignIn.css";
import offV from "../assets/off_visibility_icon.png";
import onV from "../assets/visibility_icon.png";
import { useState } from "react";

export default function SignIn() {
  const [botao, setBotao] = useState(false);

  function handleClick() {
    const novoValor = botao ? false : true;
    setBotao(novoValor);
  }
  return (
    <div className="form-container">
      <form className="form">
        <h1 className="form-h1">Entrar</h1>
        <div className="form-div">
          <input className="form-div-input" placeholder=" "></input>
          <label className="form-div-label">Email</label>
        </div>
        <div className="form-div">
          <input
            className="form-div-input"
            type={botao ? 'text' : 'password'}
            placeholder=""
            autoComplete={false}
          ></input>
          <label className="form-div-label">Senha</label>
          <span onClick={handleClick}>
            <img className="form__img" src={botao ? offV : onV} alt="off" />
          </span>
        </div>
        <div>
          <input
            type="submit"
            className="form-button"
            autoComplete={false}
          ></input>
        </div>
        <div className="form-div-links">
          <p className="form-div-links-p underline">Esqueceu sua senha?</p>
          <p className="form-div-links-p">
            <Link to="/register" className="form-button-links-link">
              Não está Cadastrado ainda?
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
