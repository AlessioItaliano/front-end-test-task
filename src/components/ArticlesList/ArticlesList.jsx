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

const ArticlesList = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);

  const articles = useSelector(selectArticles);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

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
        response = await dispatch(getNextPage(page));
      }

      setShowLoadMoreBtn(checkTotalResults(response, page));
    };

    fetchData();
  }, [dispatch, page]);

  return (
    <s.Container>
      {isLoading && !error ? (
        <Loader />
      ) : (
        <>
          {articles &&
            articles.map(article => (
              <div key={article.publishedAt}>
                <Article article={article} />
              </div>
            ))}
          {showLoadMoreBtn && (
            <Button func={onLoadMoreBtn} name={'Load more'} />
          )}
        </>
      )}
    </s.Container>
  );
};

export default ArticlesList;
