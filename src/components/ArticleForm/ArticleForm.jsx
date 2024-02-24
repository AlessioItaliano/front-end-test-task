import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { addUserArticle } from '../../redux/userArticles/slice';
import { selectUser } from '../../redux/auth/selectors';

import Button from 'components/Button';

import * as s from './ArticleForm.styled';

const ArticleForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const article = {
      publishedAt: nanoid(), // тут має бути використаний id, оскільки не усіх даних з newapi.org є id
      author: user.name,
      title: form.elements.title.value,
      description: form.elements.description.value,
    };
    dispatch(addUserArticle(article));

    form.reset();
  };

  return (
    <s.Form onSubmit={handleSubmit} autoComplete="off">
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
