import FormInput from "./FormInput/FormInpit";
import "./SectionForm.css"

function SectionForm() {
   return (
      <section className="section-form">
         <form>
            <FormInput labelValue="Name" inputType="text"/>
            <FormInput labelValue="Email" inputType="email"/>
            <FormInput labelValue="Phone" inputType="tel"/>
            <FormInput labelValue="Address" inputType="text"/>
         </form>
      </section>
   )
}

export default SectionForm;