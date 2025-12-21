const MenuCard = ({ title, description, ingredients, price, image }) => {
  const safeId = title.replace(/\s+/g, "-");

  return (
    <div className="card-menu shadow" role="region" aria-labelledby={safeId}>
      <div className="card-menu-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-menu-info">
        <h3 id={safeId}>{title}</h3>
        <p className="description">{description}</p>
        <p className="ingredients">{ingredients.join(", ")}</p>
        <p className="price" aria-label={`${price} dollars`}>
          {price}$
        </p>
      </div>
    </div>
  );
};

export default MenuCard