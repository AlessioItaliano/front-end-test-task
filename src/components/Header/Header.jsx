import * as s from './Header.styled';

const Header = () => {
  return (
    <s.Container>
      <p>Ciao</p>
      {/* <Navigation /> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </s.Container>
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
