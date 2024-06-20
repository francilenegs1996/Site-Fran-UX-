import styled from "styled-components";


export const Divdoselementos = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;


export const Section = styled.div<{ alignRight: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => (props.alignRight ? 'flex-end' : 'flex-start')};
  align-items: center;
`;

export const EfeitoBlur = styled.div`
  width: 30vw;
  height: 30vw;
  background-color: #e82e5d;
  border-radius: 50%;
  filter: blur(270px);
`;