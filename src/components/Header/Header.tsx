import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./style.css";

interface HeaderPros {
  title: string;
}

export function Header({ title }: HeaderPros) {
  return (
    <div className="header">
      <div>
        <Link to="/modulo-cadastro-fornecedor">
          <img src={logo} alt="" />
        </Link>
      </div>
      <h1>{title}</h1>
    </div>
  );
}
