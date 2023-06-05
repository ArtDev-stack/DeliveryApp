import FoodCart from "./FoodCart/FoodCart.js";
import "./SuppliesSection.css"



function SuppliesSection({arraySupplies}) {

   return (
      <section className="supplies-section">
         
         {/* <FoodCart photo={burgers[0].photo} name={burgers[0].name} price={burgers[0].price} /> */}

         {arraySupplies.map((item, index) => {
            return <FoodCart key={index} photo={item.photo} name={item.name} price={item.price}/>
         }) }       


      </section>
   )
}

export default SuppliesSection;