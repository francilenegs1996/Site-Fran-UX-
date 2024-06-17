import styled from "styled-components";

const NavBarComponent = styled.div`
width: 10vw;
height: 100%;
background-color: #2421ff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

@media (max-width: 720px) {
	width: 100vw;
	height: 10vh;
	flex-direction: row;
}
`;

const ItemComponent = styled.a`
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


export { NavBarComponent, ItemComponent }