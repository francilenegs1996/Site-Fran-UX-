import "./style.css";
import Nav from "../components/Nav/Nav";
import Sectionmain from "../components/Sectionmain/Sectionmain";
import imagemfran from './../assets/imagemfran.svg'




export default function SinglePage() {
  return (
    <div className="conteudoTodo">
      <Nav />
      <Sectionmain
        img={imagemfran}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor posuere."
        title="Olá, seja bem vindo!??"
        buttonText="Entrar em contato"
        existButton


      />
     
    </div>
  );
}
