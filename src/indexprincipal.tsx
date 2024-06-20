/* Arquivo principal, importar aqui os*/
import styled from "styled-components";
import Background from "./components/ElementsBackground/ElementsBackground";
import { ContainerPages, Quadrado } from "./components/ContainerPages/ContainerPages";
import { useEffect, useState } from "react";

export const ElementPai = styled.div`
width: 100%;
min-height: 100vh;
align-items: center;
display: flex;
flex-direction: column;
align-self: center;
`;



const Principal = () => {
	const [scroll, setScroll] = useState(30)
	
	useEffect(() => {
		window.addEventListener('scroll', () => {
			const scrollTop = document.documentElement.scrollTop;			
			setScroll(Math.round(scrollTop + 30))
});
	}, [])

	return (
		<ElementPai>
			<ContainerPages>
				<Quadrado style={{position: 'absolute', left: 20, top: scroll}} altura={90} largura={20} />
				<Quadrado altura={300} largura={70} />
			</ContainerPages>
			<Background alignRight={true} />
		</ElementPai>




	);
};

export default Principal;