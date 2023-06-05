import "./Tab.css"

function Tab ({ label, isActive, isDisabled, onClick }) {
   return (
      <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
         {label}
      </button>
   );
};

export default Tab;