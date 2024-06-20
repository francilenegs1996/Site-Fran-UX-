import styled from 'styled-components';

interface PropQuadrado {
  largura: number
  altura: number
  scroll?: boolean
}

export const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerPages = styled.div`
  max-width: 1920px;
  min-width: 300px;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;
export const Quadrado = styled.div<PropQuadrado>`
  width: ${({ largura }) => largura}%;
  height: ${({ altura }) => altura}vh;
  background-color: #D9D9D9;
  margin-top: ${({altura}) => altura > 90 ? 10 : 0}vh;
  display: flex;
  opacity: 0.1; 
  border-radius: 30px;
  overflow-y: ${({scroll}) => scroll ? 'hidden' : 'auto'};
`;