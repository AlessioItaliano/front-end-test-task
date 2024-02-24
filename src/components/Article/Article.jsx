import { useSelector, useDispatch } from 'react-redux';

import { selectFavorite } from '../../redux/favorites/selectors';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';

import { ReactComponent as IconFavorite } from '../../icons/favorite.svg';
import { ReactComponent as IconNotFavorite } from '../../icons/notFavorite.svg';

import * as s from './Article.styled';

const Article = ({ article }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favorite = useSelector(selectFavorite);

  const { urlToImage, author, description, title } = article;

  const handleFavorite = e => {
    e.stopPropagation();
    if (
      favorite.some(
        favoriteItem => favoriteItem.publishedAt === article.publishedAt
      )
    ) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }
  };

  return (
    <s.Container>
      <s.ImgBox>
        <s.Image src={urlToImage} alt="Article_img"></s.Image>
      </s.ImgBox>

      {isLoggedIn && (
        <s.FavoriteContainer onClick={handleFavorite}>
          {favorite.some(
            favoriteItem => favoriteItem.publishedAt === article.publishedAt
          ) ? (
            <s.StyledActiveIcon>
              <IconFavorite />
            </s.StyledActiveIcon>
          ) : (
            <s.StyledNormalIcon>
              <IconNotFavorite />
            </s.StyledNormalIcon>
          )}
        </s.FavoriteContainer>
      )}

      <s.Author>{author}</s.Author>
      <s.Description>{description}</s.Description>
      <s.Title>{title}</s.Title>
    </s.Container>
  );
};

export default Article;
