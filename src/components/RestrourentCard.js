const RestrourentCard = ({name, image, cuisine, rating}) => {
  return (
    <div className="card">
      <img src={image} alt="Restaurant Image" />
      <h2>{name}</h2>
      <h3>{cuisine.join(", ")}</h3>
      <h4>{rating} Starts</h4>
    </div>
  );
};

export default RestrourentCard;