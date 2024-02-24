import * as s from './Footer.styled';

const Footer = () => {
  return (
    <s.Footer>
      <s.Title>Scientia potentia est!</s.Title>
      <>
        <s.CopyRight>
          Copyright © 2024. Created by{' '}
          <s.Link href="https://www.linkedin.com/in/vasyl-lepish/">
            Vasyl Lepish
          </s.Link>
        </s.CopyRight>
      </>
    </s.Footer>
  );
};

export default Footer;
