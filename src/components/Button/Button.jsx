import * as s from './Button.styled';

const Button = ({ func, name }) => {
  return (
    <s.Button type="button" onClick={func}>
      {name}
    </s.Button>
  );
};

export default Button;
