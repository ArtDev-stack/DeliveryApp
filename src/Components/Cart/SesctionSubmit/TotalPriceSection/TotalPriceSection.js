import "./TotalPriceSection.css"

function TotalPriceSection({totalPrice}) {
   return (
      <div>
         <span style={{fontSize: "23px"}}>Total price: {totalPrice} $</span>
      </div>
   )
}

export default TotalPriceSection;