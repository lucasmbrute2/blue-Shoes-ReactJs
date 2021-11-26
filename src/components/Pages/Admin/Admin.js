import "./Admin.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminHeader from "./headerAdmin";
import CadastarProd from "./cadastarProduto";
import CadastarMarca from "./cadastrarMarca";

export default function AdminPage(props) {
  return (
    <div>
      <Router>
        <AdminHeader />
        <Switch>
          <Route path="/admin/prod" component={CadastarProd} />
          <Route path="/admin/marca" component={CadastarMarca} />
        </Switch>
      </Router>
    </div>
  );
}
