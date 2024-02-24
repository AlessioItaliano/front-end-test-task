import { useDispatch, useSelector } from 'react-redux';

import { removeUserArticle } from '../../redux/userArticles/slice';
import { selectUserArticles } from '../../redux/userArticles/selectors';

import Button from 'components/Button';

import * as s from './UserArticle.styled';

const UserArticle = () => {
  const dispatch = useDispatch();

  const userArticles = useSelector(selectUserArticles);

  const handleRemove = e => {
    e.stopPropagation();
    dispatch(removeUserArticle(e.currentTarget.publishedAt));
  };

  return (
    <>
      {!userArticles.length ? (
        <s.EmptyContainer>
          <s.EmptyTitle> Oops, you don't have any articles yet!</s.EmptyTitle>
        </s.EmptyContainer>
      ) : (
        <s.Container>
          <s.List>
            {userArticles.map(article => (
              <s.Item key={article.publishedAt}>
                {/* // тут має бути використаний id, оскільки не усіх даних з
                  newapi.org є id// */}

                <s.ImgBox>
                  <s.Image src={article.urlToImage} alt="Article_img" />
                </s.ImgBox>
                <s.Author>{article.author}</s.Author>
                <s.Description>{article.description}</s.Description>
                <s.Title>{article.title}</s.Title>
                <Button
                  id={article.publishedAt}
                  func={handleRemove}
                  name={'Remove'}
                  type={'submit'}
                />
              </s.Item>
            ))}
          </s.List>
        </s.Container>
      )}
    </>
  );
};

export default UserArticle;
