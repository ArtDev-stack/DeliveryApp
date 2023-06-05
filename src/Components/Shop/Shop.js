import { useState } from "react";
import ShopCurrent from "./ShopCurrent/ShopCurrent";
import TabContent from "../TabsComponent/TabContent";
import { burgers } from "../../data/Supplies/Burger";
import { sushi } from "../../data/Supplies/Sushi";
import { pizzas } from "../../data/Supplies/Pizza";
import SuppliesSection from "./SuppliesSection/SuppliesSection";
import "./Shop.css"

function Shop() {
   const [activeTab, setActiveTab] = useState(1);

   const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
   };

   return (
      <div className="shop-container">
         <div className="shops__list">
            <ShopCurrent
               label="BurgerBlast"
               isActive={activeTab === 1}
               onClick={() => handleTabClick(1)}
            />
            <ShopCurrent
               label="TacoTreats"
               isActive={activeTab === 2}
               onClick={() => handleTabClick(2)}
            />
            <ShopCurrent
               label="PizzaPalace"
               isActive={activeTab === 3}
               onClick={() => handleTabClick(3)}
            />
         </div>
         <div className="shop__supplies">
            {activeTab === 1 && (
               <TabContent children={<SuppliesSection arraySupplies={burgers}/>} />
            )}
            {activeTab === 2 && (
               <TabContent children={<SuppliesSection arraySupplies={sushi}/>} />
            )}
            {activeTab === 3 && (
               <TabContent children={<SuppliesSection arraySupplies={pizzas}/>} />
            )}
         </div>
      </div>
   );
};

export default Shop;