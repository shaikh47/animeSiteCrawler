import AnimeCard from "./AnimeCard";

// const animeData = [
//   {
//     rawTxt: "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
//     rawLink:
//       "https://9animetv.to/watch/demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc-18056",
//     rawImage:
//       "https://img.bunnycdnn.ru/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",
//     rawImageAltText: "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
//   },
//   // Add more anime data objects here
// ];

const AnimeList = (props) => {
  const { animeData } = props;
  console.log("at anime list")

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      padding: "20px",
      flexWrap: "wrap"
    }}>
      {animeData.map((anime, index) => (
        <AnimeCard key={index} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
