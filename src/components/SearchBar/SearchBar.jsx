import { useDispatch } from 'react-redux';
import { getRequest } from '../../redux/articles/operation';

import Button from 'components/Button';

import * as s from './SearchBar.styled';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const findRequest = form.elements.findRequest.value;

    console.log(form);
    console.log(findRequest);
    dispatch(getRequest(findRequest));
    form.reset();
  };

  return (
    <s.Form onSubmit={handleSubmit} autoComplete="off">
      <s.Input type="text" name="findRequest" required />
      <Button type={'submit'} name={'Find'} />
    </s.Form>
  );
};

export default SearchBar;
