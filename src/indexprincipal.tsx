/* Arquivo principal, importar aqui os*/
import styled from "styled-components";
import {

  ContainerPages,
 

  

} from "./components/ContainerPages/ContainerPages";
import CardPerfil from "./components/CardPerfil";

/* import Background from "./components/ElementsBackground/ElementsBackground";
import { ContainerPages, } from "./components/ContainerPages/ContainerPages"; */
/* import { useEffect, useState } from "react"; */

export const ElementPai = styled.div`
  width: 100%;
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export default function Background() {
  return (
    <div>
      <ContainerPages>
		<CardPerfil/>
		<CardPerfil/>
      </ContainerPages>

    </div>
  );
}

/* 
const Principal = () => {
	const [scroll, setScroll] = useState(30)
	
	useEffect(() => {
		const handleScroll = () => {
						const scrollTop = document.documentElement.scrollTop;
						setScroll(Math.round(scrollTop + 30));
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
						window.removeEventListener('scroll', handleScroll);
		};
}, []);

	return (
		<ElementPai>
			<ContainerPages>
				<Quadrado style={{position: 'absolute', left: 70, top: scroll}} altura={90} largura={20} />
				<Quadrado style={{position: 'relative', right: 70,}} altura={300} largura={70} />
				 {/* altura={30} largura={70}
			</ContainerPages>
			<Background alignRight={true} />
			<Background alignRight={false} />
		</ElementPai>




	);
};

export default Principal; */
