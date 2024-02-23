import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import Button from 'components/Button';

import * as s from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <s.Form onSubmit={handleSubmit} autoComplete="off">
      <s.Label>
        Email
        <s.Input type="email" name="email" />
      </s.Label>
      <s.Label>
        Password
        <s.Input type="password" name="password" />
      </s.Label>
      <Button type={'submit'} name={'Log In'} />
    </s.Form>
  );
};

export default LoginForm;
