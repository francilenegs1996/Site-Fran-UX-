import styled from "styled-components";


export const Container = styled.main`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
background-color: '#030202';

@media (max-width: 720px) {
	flex-direction: column-reverse;
}

`;