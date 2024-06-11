import imagemfran from "../../assets/imagemfran.svg"
import './style-sectionmain.css'

interface Coisasdapagina  {
  img: string;
  text?: string;
  title?: string;
  subTitulo?: string
  name?: string;
  buttonText?: string;
  existButton?: boolean
}


export default function Sectionmain({...props}: Coisasdapagina) {
  return (
    <div className="container">
      <section className="intro">
        <div className="container-text">
          <p>{props.title}</p>
          <h1>Eu sou <span className="highlight">Fran</span><br />UX/UI Designer</h1>
          <p>{props.text}</p>
          {props.existButton && <a href="#portfolio" className="button">{props.buttonText}</a>}
        </div>
        <div className="container-img">
          <img className="imagemfran" src={props.img} alt="ImagemFran UX"></img>
        </div>
      </section>
    </div>
  );
}
