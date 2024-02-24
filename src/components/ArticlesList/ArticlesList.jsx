import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFirstPage, getNextPage } from '../../redux/articles/operation';
import {
  selectArticles,
  selectError,
  selectIsLoading,
} from '../../redux/articles/selectors';

import Article from 'components/Article';
import Loader from 'components/Loader';
import Button from 'components/Button';

import * as s from './ArticlesList.styled';
import { selectUserArticles } from '../../redux/userArticles/selectors';

const ArticlesList = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);

  const articles = useSelector(selectArticles);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const userArticles = useSelector(selectUserArticles);

  console.log(articles);

  const onLoadMoreBtn = () => {
    setPage(page + 1);
  };

  const checkTotalResults = (response, page) => {
    return (
      response.payload.totalResults > response.payload.articles.length * page
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      let response;
      if (page === 1) {
        response = await dispatch(getFirstPage());
      } else {
        response = await dispatch(getNextPage({ page }));
      }

      setShowLoadMoreBtn(checkTotalResults(response, page));
    };

    fetchData();
  }, [dispatch, page]);

  const allArticles = [...userArticles, ...articles];

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
