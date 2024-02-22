import * as s from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ onLoadMoreBtn }) => {
  return (
    <s.Container>
      <s.Button onClick={onLoadMoreBtn}>Load more</s.Button>
    </s.Container>
  );
};

export default LoadMoreBtn;
