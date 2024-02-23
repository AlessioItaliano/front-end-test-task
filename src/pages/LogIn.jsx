import { Helmet } from 'react-helmet';
import LoginForm from 'components/LoginForm';
import Section from 'components/Section';

const Login = () => {
  return (
    <Section>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Section>
  );
};

export default Login;
