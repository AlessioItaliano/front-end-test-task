import * as s from './Article.styled';

const Article = ({ article }) => {
  const { urlToImage, author, description, title } = article;

  return (
    <s.Container>
      <s.Image src={urlToImage} alt="Article_img"></s.Image>
      <s.Author>{author}</s.Author>
      <s.Description>{description}</s.Description>
      <s.Title>{title}</s.Title>
    </s.Container>
  );
};

export default Article;
