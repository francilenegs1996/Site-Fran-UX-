import "./style.css";
import Nav from "../components/Nav/Nav";
import Sectionmain from "../components/Sectionmain/Sectionmain";


export default function SinglePage() {
  return (
    <div className="conteudoTodo">
      <Nav />
      <Sectionmain />
    </div>
  );
}
