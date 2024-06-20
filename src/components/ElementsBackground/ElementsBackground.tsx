import { Divdoselementos, EfeitoBlur, Section, } from "./style";


interface BackgroundProps {
  alignRight: boolean;
}

const Background: React.FC<BackgroundProps> = ({ alignRight }) => {
  return (
    <Divdoselementos>
      <Section alignRight={alignRight}>
        <EfeitoBlur />
      </Section>
    </Divdoselementos>
  );
};

export default Background;

