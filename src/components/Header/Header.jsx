import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import mainLogo from 'images/logo.png';

import UserMenu from 'components/UserMenu';
import AuthNavigation from 'components/AuthNavigation';

import * as s from './Header.styled';

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
