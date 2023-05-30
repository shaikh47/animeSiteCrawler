import { useState } from "react";
import { Input, Button, Alert, Spin, Switch } from "antd";
import AnimeList from "./AnimeList";

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [searchSuccess, setSearchSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    console.log(`searching the anime ${searchText} ...`);

    setLoading(true);

    fetch(
      `http://127.0.0.1:3000/homepage/searchAnime?animeName=${searchText}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log("from search component: ", JSON.parse(result).result);
        setAnimeList(JSON.parse(result).result);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error: ", error);
        setLoading(false);
      });

    setSearchSuccess(true);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Spin spinning={loading}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Search anime..."
            value={searchText}
            onChange={handleInputChange}
            style={{ marginRight: "16px" }}
          />
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </div>
        {searchSuccess && <AnimeList animeData={animeList} />}
      </Spin>
    </>
  );
};

export default SearchComponent;
