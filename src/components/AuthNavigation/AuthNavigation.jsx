import * as s from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <s.Container>
      <s.Link to="/register">Register</s.Link>
      <s.Link to="/login">Log In</s.Link>
    </s.Container>
  );
};

export default AuthNavigation;
