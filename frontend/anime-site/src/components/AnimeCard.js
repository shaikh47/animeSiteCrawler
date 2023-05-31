import { Card } from "antd";

const { Meta } = Card;

const AnimeCard = ({ anime }) => {
  return (
    <Card
      hoverable
      style={{
        width: "250px",
        // padding: "10px",
        objectFit: "cover",
      }}
      cover={
        <img
          style={{
            margin: "0",
            padding: "0",
          }}
          alt={anime.rawImageAltText}
          src={anime.rawImage}
          height="350px"
          width="250px"
        />
      }
    >
      <Meta title={anime.rawTxt} />
      <a href={anime.rawLink} target="_blank" rel="noopener noreferrer">
        Watch
      </a>
    </Card>
  );
};

export default AnimeCard;
