import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
    console.log(foodItems);

    return (
        <>
            {foodItems.map((foodItems) => (
                <MenuItem key={foodItems.id}
                    itemName={foodItems.itemName}
                    description={foodItems.description}
                    foodImage={foodItems.foodImage}
                    price={foodItems.price}
                    isFavorite={foodItems.isFavorite}
                />
            ))}
        </>
    );
}

export default MenuList;