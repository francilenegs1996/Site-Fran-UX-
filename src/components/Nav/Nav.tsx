import "./style-nav.css";
import logo from "../../assets/Logofran.svg";

export default function Nav() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#">
            <img className="logofran" src={logo} alt="Logo Fran UX"></img>
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a className="nav-button" href="#">
              HOME
            </a>
            <div></div>
          </li>
          <li>
            <a className="nav-button" href="#">
              PORTFÓLIO
            </a>
            <div></div>
          </li>
          <li>
            <a className="nav-button" href="#">
              SERVIÇOS
            </a>
            <div></div>
          </li>
          <li>
            <a className="nav-button" href="#">
              CONTATO
            </a>
            <div></div>
          </li>
        </ul>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
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
        </div>
      </nav>
    </header>
  );
}
