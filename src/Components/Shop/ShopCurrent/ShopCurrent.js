function ShopCurrent({ label, isActive, onClick }) {
   return (
      <button
         className={`shop__tab ${isActive ? 'shop__active' : ''}`}
         onClick={onClick}
      >
         {label}
      </button>
   );
};

export default ShopCurrent;