import * as s from './Button.styled';

const Button = ({ func, name, type, id }) => {
  return (
    <s.Button type={type} onClick={func} id={id}>
      {name}
    </s.Button>
  );
};

export default Button;
