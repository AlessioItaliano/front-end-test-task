import * as s from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <div>
      <s.Link to="/register">Register</s.Link>
      <s.Link to="/login">Log In</s.Link>
    </div>
  );
};

export default AuthNavigation;
