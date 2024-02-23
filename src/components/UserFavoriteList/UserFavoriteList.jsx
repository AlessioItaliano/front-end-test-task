import { useSelector } from 'react-redux';

import { selectFavorite } from '../../redux/favorites/selectors';

// import Article from 'components/Article';

import * as s from './UserFavoriteList.styled';
import ArticlesList from 'components/ArticlesList';

const UserFavoriteList = () => {
  const favorite = useSelector(selectFavorite);

  return (
    <s.Container>
      <s.Title>My favorite list</s.Title>
      {!favorite.length ? (
        <s.EmptyTitle>
          Oops, you don't have a favorite article! Please choose an article, but
          remember that you can choose only one article.
        </s.EmptyTitle>
      ) : (
        <ArticlesList article={favorite} />
      )}
    </s.Container>
  );
};

export default UserFavoriteList;
