import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/common";
import Shimmer from "./Shimmer";
import RestrourentCard from "./RestrourentCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    const restaurants = json?.data?.cards
      ?.flatMap(
        (card) => card?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [],
      )
      .map((r) => r?.card?.card?.info)
      .filter((info) => info && info.id && Array.isArray(info.cuisines));

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurents"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const filterdRestaurents = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filterdRestaurents);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.avgRating > 4,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((info) => (
          <RestrourentCard
            key={info.id}
            name={info.name}
            image={info.cloudinaryImageId}
            cuisine={info.cuisines}
            rating={info.avgRating}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
