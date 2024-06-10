import imagemfran from "../../assets/imagemfran.svg"
import './style-sectionmain.css'

export default function Sectionmain() {
    return (
      <div className="container" style={{ width: 1000, height: 1000, backgroundColor: 'white' }}>
        <section className="intro">
          <div className="intro-text">
            <p>Olá, seja bem-vindo!</p>
            <h1>Eu sou <span className="highlight">Fran</span><br />UX/UI Designer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor posuere.</p>
            <a href="#portfolio" className="button">Entrar em contato</a>
          </div>
          <div className="intro-image">
          <img className="imagemfran" src={imagemfran} alt="ImagemFran UX"></img>
          </div>
        </section>
      </div>
    );
  }
