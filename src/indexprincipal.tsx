/* Arquivo principal, importar aqui os*/
import styled from "styled-components";
import Background from "./components/ElementsBackground/ElementsBackground";
import { ContainerPages } from "./components/ContainerPages/ContainerPages";

export const ElementPai = styled.div `
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
display: flex;
`;



const Principal = () => {
	return (
	<ElementPai>
		<ContainerPages/>
		<Background alignRight={true} />
			
</ElementPai>

 
 
 
	);
  };
  
  export default Principal;