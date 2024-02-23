// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/operations';

import Button from 'components/Button';

import * as s from './ArticleForm.styled';

const ArticleForm = () => {
  // const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;

  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  return (
    <s.Form
      // onSubmit={handleSubmit}
      autoComplete="off"
    >
      <s.Label>
        Title
        <s.InputTitle type="text" name="title" required />
      </s.Label>
      <s.Label>
        Description
        <s.InputDescription type="text" name="description" required />
      </s.Label>
      <Button type={'submit'} name={'Create'} />
    </s.Form>
  );
};

export default ArticleForm;
