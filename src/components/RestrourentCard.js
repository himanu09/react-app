import { IMG_CDN_URL } from "../utils/common";

const RestrourentCard = ({name, image, cuisine = [], rating}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + image} alt="Restaurant Image" />
      <h2>{name}</h2>
      <h3>{cuisine.join(", ")}</h3>
      <h4>{rating} ⭐</h4>
    </div>
  );
};

export default RestrourentCard;