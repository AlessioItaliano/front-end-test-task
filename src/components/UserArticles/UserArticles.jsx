import ArticleForm from 'components/ArticleForm';
import * as s from './UserArticles.styled';

const UserArticles = () => {
  // const { urlToImage, author, description, title } = article;

  return (
    <s.Container>
      <s.Title>My articles</s.Title>
      <ArticleForm />

      {/* <UserArticlesList /> */}
    </s.Container>
  );
};

export default UserArticles;
