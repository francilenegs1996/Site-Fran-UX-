import {
  ButtonSociais,
  Card,
  ContainerButton,
  Foto,
  TextoCard,
  TituloCard,
} from "./style";

export default function CardPerfil() {
  return (
    <Card>
      <Foto />
      <TituloCard> Francilene Pinheiro </TituloCard>
      <TextoCard>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </TextoCard>

      <ContainerButton>
        <ButtonSociais href="https://www.figma.com/">Linkedin</ButtonSociais>
        <ButtonSociais href="https://www.figma.com/">Linkedin</ButtonSociais>
        <ButtonSociais href="https://www.figma.com/">Linkedin</ButtonSociais>
        <ButtonSociais href="https://www.figma.com/">Linkedin</ButtonSociais>
      </ContainerButton>
    </Card>
  );
}
