const MenuCard = ({title, description, ingredients, price, image}) => {
    return ( 
        <div className="card-menu shadow">
            <div className="card-menu-image">
                <img src={image} alt={`${title} menu image`}/>
            </div>
            <div className="card-menu-info">
                <h2>{title}</h2>
                <p className="description">{description}</p>
                <p className="ingredients">{ingredients.join(', ')}</p>
                <p className="price">{price}$</p>
            </div>
        </div>
     );
}
 
export default MenuCard;