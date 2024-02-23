import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm';
import Section from 'components/Section';

const Register = () => {
  return (
    <Section>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Section>
  );
};

export default Register;
