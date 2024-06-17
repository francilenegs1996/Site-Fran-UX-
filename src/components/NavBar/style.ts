import styled from "styled-components";
import { PropsContainer, PropsItem } from "./interfaces";

const ContainerNavBar = styled.div<PropsContainer>`
width: 10vw;
height: 100%;
background-color: #2421ff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;

const Item = styled.a<PropsItem>`
  width: 8vw;
  height: 4vw;
  background-color: #000;
		text-decoration: none;
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		transition: 0.3s;
		
  &:hover {
			transition: 0.3s;
   width: 10vw;
   height: 6vw;
  }

		&:active {
			transition: 500ms;
			background-color: red;
		}
`;







export { ContainerNavBar, Item }