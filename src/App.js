import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Tab from './Components/TabsComponent/Tab';
import TabContent from './Components/TabsComponent/TabContent';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <Router>
      <div className="App">
        <div className="tabs-container">
          <div className="tabs">
            <Link to="/Shop">
              <Tab
                label="Shop"
                isActive={activeTab === 1}
                onClick={() => handleTabClick(1)}
              />
            </Link>
            <div className='line'></div>
            <Link to="/ShoppingCart">
              <Tab
                label="Shopping Cart"
                isActive={activeTab === 2}
                onClick={() => handleTabClick(2)}
              />
            </Link>

          </div>
          <div className="tab-contents">
            {activeTab === 1 && <TabContent children={<Shop />} />}
            {activeTab === 2 && <TabContent children={<Cart />} />}
          </div>
        </div>

      </div>
    </Router>
  )
}

export default App;
