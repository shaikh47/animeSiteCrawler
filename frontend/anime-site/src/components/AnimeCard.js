import { Card } from 'antd';

const { Meta } = Card;

const AnimeCard = ({ anime }) => {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt={anime.rawImageAltText} src={anime.rawImage} />}
    >
      <Meta title={anime.rawTxt} />
      <a href={anime.rawLink} target="_blank" rel="noopener noreferrer">
        Watch
      </a>
    </Card>
  );
};

export default AnimeCard;