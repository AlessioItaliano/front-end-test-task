import ArticleForm from 'components/ArticleForm';
import * as s from './UserAccount.styled';
import UserArticle from 'components/UserArticle';

const UserAccount = () => {
  return (
    <s.Container>
      <s.Title>My articles</s.Title>
      <ArticleForm />
      <UserArticle />
    </s.Container>
  );
};

export default UserAccount;
