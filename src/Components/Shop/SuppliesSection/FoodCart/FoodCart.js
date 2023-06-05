import "./FoodCart.css"



function FoodCart({ photo, name, price, handleAddToCart }) {
   return (
      <section>
         <div className="food-product-card">
            <img src={photo} alt={name} className="food-product-card__photo" />
            <div className="food-product-card__information">
               <div className="name__price">
                  <h3 className="food-product-card__name">{name}</h3>
                  <h3><p className="food-product-card__price">$ {price}</p></h3>
               </div>
               <button className="food-product-card__add-to-cart" onClick={handleAddToCart}>
                  Add to Cart
               </button>
            </div>
         </div>
      </section>
   )
}

export default FoodCart;