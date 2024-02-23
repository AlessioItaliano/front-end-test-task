import * as s from './Section.styled';

const Section = ({ children }) => (
  <s.Section>
    <s.Container>{children}</s.Container>
  </s.Section>
);

export default Section;
