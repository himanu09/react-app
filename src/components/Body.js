import restaurantList from "../utils/mockData"; 
import RestrourentCard from "./RestrourentCard";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
          return <RestrourentCard key={restaurant.id} {...restaurant} />;
        })
      }
    </div>
  );
};

export default Body;