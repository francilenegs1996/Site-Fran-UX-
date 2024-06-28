import styled from 'styled-components';

export const Card = styled.div`
  background: blue;
  box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45);
  position: relative;
  width: 240px;
  height: 480px;
  display: flex;
  border-radius: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;


export const Foto = styled.div`
width: 5.8em;
  height: 5.8em;
  border-radius: 50px;
  background-color: aliceblue;
  transition: 0.2s;
  
  &:active {
  scale: 110%;
  transition: 0.2s;
}
  
`;

export const TituloCard = styled.h2`
font-weight: 400;
  color: white;
  display: block;
  text-align: center;
  font-size: 0.8;
`;


export const TextoCard = styled.h3`
font-weight: 400;

  color: white;
  text-align: center;
  font-size: 0.6em;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  
`;

export const ContainerButton = styled.div `
margin-top: 10px;
width: 100%;
height: 40%;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
gap: 17px;
`;



export const ButtonSociais = styled.a`
width: 210px ;
height: 30px;
background: #fff;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
border-radius: 7px;
transition: 0.2s;
text-decoration: none;
color: black;

&:hover {
  background: red;
  transition: 0.2s;
  color: white;
}
`;

