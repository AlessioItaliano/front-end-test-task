import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

import Button from 'components/Button';

import * as s from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <s.Container>
      <s.UserName>Welcome, {user.name}</s.UserName>
      <Button func={onLogOut} name={'Logout'} type={'button'} />
    </s.Container>
  );
};

export default UserMenu;
