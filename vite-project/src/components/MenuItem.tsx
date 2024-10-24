import { useState } from "react";


function MenuItem({ itemName, description, foodImage, price, isFavorite }) {
    //create a state isFavorite that has the inital value of isFavorite that comes from the props
    console.log(isFavorite);
    const [isItFavorite, setIsItFavorite] = useState(false);

    const handleClickFavorite = () => {
        setIsItFavorite(true);
    };

    return (
        <section className="itemContainer">
            <figure className="imgContainer">
                <img src={foodImage} alt="" />
                <figcaption>
                    {/* the h2 will receive the item name from the props */}
                    <h2>{itemName}</h2>
                    {/* the p will receive the item description from the props */}
                    <p>{description}</p>
                </figcaption>
            </figure>
            {/* the span will receive the item price from the props */}
            <aside>{price} EUR</aside>

            {/* the button to play with the isFavorite state:
                - onClick, will toggle the isFavorite state,
                - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
            */}
            <button type="button" onClick={handleClickFavorite}>
                {isItFavorite ? "❤️" : "🖤"}
            </button>
        </section>
    );
}

export default MenuItem;
