import styled from 'styled-components';
/* 
interface PropQuadrado {
  largura: number
  altura: number
  scroll?: boolean
}
 */


export const ContainerPages = styled.div`
  max-width: 1920px;
  min-width: 300px;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
  justify-content: center;
`;


/*  export const ContainerFilho= styled.a`
  width: 90%;
  height: 100%;
  background-color: #D9D9D9;
  opacity: 0.1;
  display: flex;
  position: absolute;
  z-index: -1;
  flex-direction: row; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center; 
`;  */



/* 
export const QuadradoMenor = styled.div`
width: 18%;
height: 80%;
background-color: #fff;
border-radius: 20px; 
opacity: 0.1;
 position: absolute;
  top: 50%;
  left: 9%;
  transform: translateY(-50%); 
`;

export const QuadradoMaior = styled.div`
  width: 60%;
  height: 300vh;
  background-color: #fff;
  opacity: 0.1;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 31%;
  transform: translateY(73px);
`; */

/* export const Quadrado = styled.div<PropQuadrado>`
  width: ${({ largura }) => largura}%;
  height: ${({ altura }) => altura}vh;
  background-color: #D9D9D9;
  margin-top: ${({altura}) => altura > 90 ? 10 : 0}vh;
  display: flex;
  opacity: 0.1;
  border-radius: 30px; */
  /* overflow-y: ${({scroll}) => scroll ? 'hidden' : 'auto'}; */
 /*  overflow-y: ${({ scroll }) => (scroll ? 'hidden' : 'auto')};
  position: relative; 
`; */


