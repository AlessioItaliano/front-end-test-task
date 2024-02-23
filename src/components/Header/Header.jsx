import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

// import Button from 'components/Button';

import mainLogo from 'images/logo.png';

import * as s from './Header.styled';

import UserMenu from 'components/UserMenu';
import AuthNavigation from 'components/AuthNavigation';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <s.Header>
      <s.Container>
        <>
          <s.Logo to="/">
            <img src={mainLogo} alt="News_logo" />
          </s.Logo>
          {isLoggedIn ? <s.Link to="/account">Account</s.Link> : null}
        </>

        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </s.Container>
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
