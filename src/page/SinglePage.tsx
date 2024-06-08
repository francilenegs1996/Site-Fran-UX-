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
                <a className="nav-button" href="#">HOME</a>
                <div></div>
              </li>
              <li>
                <a className="nav-button" href="#">PORTFÓLIO</a>
                <div></div>
              </li>
              <li>
                <a className="nav-button" href="#">SERVIÇOS</a>
                <div></div>
              </li>
              <li>
                <a className="nav-button" href="#">CONTATO</a>
                <div></div>
              </li>
            </ul>
          </nav>
        </header>
    </div>
  );
}
