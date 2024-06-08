import "./style.css";
import logo from "../assets/Logofran.svg";

export default function SinglePage() {
  return (
    <div className="conteudoTodo">
        <header>
          <nav className="navbar">
            <div className="logo">
              <a href="# observacão, o # é um link">
                <img className="logofran" src={logo} alt="Logo Fran UX"></img>
              </a>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">PORTFÓLIO</a>
              </li>
              <li>
                <a href="#">SERVIÇOS</a>
              </li>
              <li>
                <a href="#">CONTATO</a>
              </li>
            </ul>
          </nav>
        </header>
    </div>
  );
}
