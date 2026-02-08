import { useState } from "react";
import restaurantList from "../utils/mockData";
import RestrourentCard from "./RestrourentCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
              const filteredList = listOfRestaurants.filter((restaurant) => restaurant.rating > 4);
              setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => {
          return <RestrourentCard key={restaurant.id} {...restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
