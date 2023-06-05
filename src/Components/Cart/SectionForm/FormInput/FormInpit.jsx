import "./FormInput.css"

function FormInput({inputValue, inputType, labelValue, handleChange}) {
   return (
      <div className="section-input">
         <label htmlFor={labelValue} style={{marginBottom: "15px", fontSize: "20px"}}>
            {labelValue}
         </label>
         <input 
            type={inputType} 
            value={inputValue} 
            onChange={handleChange} 
            id={labelValue}
            style={{
               width: "350px",
               fontSize: "20px",
               padding: "10px",
               borderRadius: "5px",
               border: "1px solid black"
            }}
         />
      </div>
   )
}

export default FormInput;