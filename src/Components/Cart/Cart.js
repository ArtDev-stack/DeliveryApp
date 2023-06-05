import SectionForm from "./SectionForm/SectionForm";
import SectionSubmit from "./SesctionSubmit/SectionSubmit";
import "./Cart.css"

function Cart() {
   return (
      <div className="cart-container">
         <div className="order-section">
            <SectionForm />
         </div>
         <SectionSubmit />
         
      </div>
   )
}

export default Cart;