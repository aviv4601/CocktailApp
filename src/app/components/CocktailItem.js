import React from "react";

const CocktailItem = (props) => {
  console.log(" cocktails", props.cocktailItem);
  const cocktail = props.cocktailItem;
  return (
    <div>
      <div>
        <ul>
          {cocktail.ingredients.map((item) => {
            return (
              <li
                key={item.name}
                className="text-white font-mono font-bold -scale-x-100"
              >
                {item.name} - {item.amount}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-white font-mono font-semibold -scale-x-100">
          {cocktail.instructions}
        </p>
      </div>
    </div>
  );
};

export default CocktailItem;
