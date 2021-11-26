import blueShoes from "../../../components/assets/blueShoes.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../context/CtxApp";
import "./Admin.css";
import { Redirect } from "react-router-dom";

export default function AdminHeader(props) {
  const { user } = useContext(Context);

  function verificaUsuario(user) {
    if (user.role !== "ADMIN") {
      alert("usuario não adm");
      return <Redirect to="/" />;
    }
  }
  verificaUsuario(user);

  return (
    <div>
      <div className="main-container">
        <Link to="/">
          <img src={blueShoes} className="logo__admin" alt="logo" />
        </Link>
        <div className="dp-menu">
          <ul className="ul_primary">
            <li>
              <Link to="#">Cadastrar</Link>
              <ul>
                <li>
                  <Link to="/admin/marca">Marca</Link>
                </li>
                <li>
                  <Link to="/admin/prod">Produto</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/admin/alt">Alterar</Link>
            </li>
            <li>
              <Link to="/admin/exc">Excluir</Link>
            </li>
            <li>
              <Link to="/admin/list">Listar Todos</Link>
            </li>
          </ul>
          <ul className="ul_second">
            <li>
              <span>Olá, {user.nome}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
