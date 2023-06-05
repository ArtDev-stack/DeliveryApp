import TotalPriceSection from "./TotalPriceSection/TotalPriceSection"
import { getOrders } from "../../../../../../Backend";
import "./SectionSubmit.css"

function SectionSubmit() {
   return (
      <section className="section-submit">
         <TotalPriceSection totalPrice={3333}/>
         <div>
            <button type="submit" className="section-submit-btn" onClick={getOrders}>Submit</button>
         </div>
      </section>
   )
}

export default SectionSubmit;