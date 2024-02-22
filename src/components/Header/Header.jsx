import Button from 'components/Button';
import * as s from './Header.styled';

import mainLogo from 'images/logo.png';

const Header = () => {
  return (
    <s.Header>
      <s.Logo to="/">
        <img src={mainLogo} alt="News_logo" />
      </s.Logo>
      <Button name={'Register'} />
      <Button name={'Log in'} />
      {/* <Navigation /> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </s.Header>
  );
};

export default Header;

// import Navigation from 'components/navigation';
// import UserMenu from 'components/userMenu';
// import AuthNav from 'components/authNav';
// import { useAuth } from 'hooks';
// import { HeaderNav } from './Header.styled';

// const Header = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <Container>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </Container>
//   );
// };

// export default Header;
