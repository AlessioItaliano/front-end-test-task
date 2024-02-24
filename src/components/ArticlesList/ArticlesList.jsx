import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFirstPage, getNextPage } from '../../redux/articles/operation';
import {
  selectArticles,
  selectError,
  selectIsLoading,
} from '../../redux/articles/selectors';
import { selectFavorite } from '../../redux/favorites/selectors';
import { selectUserArticles } from '../../redux/userArticles/selectors';

import Article from 'components/Article';
import Loader from 'components/Loader';
import Button from 'components/Button';

import * as s from './ArticlesList.styled';

const ArticlesList = () => {
  const dispatch = useDispatch();

  const articles = useSelector(selectArticles);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const favoriteArticle = useSelector(selectFavorite);
  const userArticles = useSelector(selectUserArticles);

  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      if (page === 1) {
        response = await dispatch(getFirstPage());
      } else {
        response = await dispatch(getNextPage(page));
      }

      setShowLoadMoreBtn(checkTotalResults(response, page));
    };

    fetchData();
  }, [dispatch, page]);

  useEffect(() => {
    const allArticles = [
      ...favoriteArticle,
      ...userArticles,
      ...articles,
    ].slice(0, page * 10);

    const filteredArticles = allArticles.filter(
      (article, index, self) =>
        index === self.findIndex(a => a.publishedAt === article.publishedAt)
    );

    if (filteredArticles.length < page * 10) {
      const lastArticle = page * 10 - filteredArticles.length;
      const remainingArticles = articles.slice(-lastArticle);
      setAllArticles([...filteredArticles, ...remainingArticles]);
    } else {
      setAllArticles(filteredArticles);
    }
  }, [favoriteArticle, userArticles, articles, page]);

  const onLoadMoreBtn = () => {
    setPage(page + 1);
  };

  const checkTotalResults = (response, page) => {
    return (
      response.payload.totalResults > response.payload.articles.length * page
    );
  };

  return (
    <>
      {isLoading && !error ? (
        <Loader />
      ) : (
        <>
          <s.Container>
            {allArticles &&
              allArticles.map(article => (
                <div key={article.publishedAt}>
                  {/* // тут має бути використаний id, оскільки не усіх даних з
                  newapi.org є id // */}
                  <Article article={article} />
                </div>
              ))}
          </s.Container>

          {showLoadMoreBtn && (
            <s.ButtonContainer>
              <Button func={onLoadMoreBtn} name={'Load more'} type={'button'} />
            </s.ButtonContainer>
          )}
        </>
      )}
    </>
  );
};

export default ArticlesList;
