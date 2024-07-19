import React from "react";
import recipes from "./recipes";


const Menu = () => {
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>

            {/* card menu  */}

            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                        <img src={recipe.image}></img>
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p className="priceTag">${recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderBtn">Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Menu;