import { useState } from 'react';
import BlockNowNew from './Tabs/BlockNowNew/BlockNowNew';
import BlockDetails from './Tabs/BlockDetails/BlockDetails';
import BlockForecast from './Tabs/BlockForecast/BlockForecast';
import './TabsStyle.css';

const Tabs = () => {
  const tabs = {
    now: 'now',
    details: 'details',
    forecast: 'forecast'
  };

  const [activeTab, setActiveTab] = useState(tabs.now);

  return (
    <div className="section-tabs">
      <div className="block-tabs">
        <div className={`tab-content ${activeTab === tabs.now ? 'active' : ''}`}>
          <BlockNowNew />
        </div>
        <div className={`tab-content ${activeTab === tabs.details ? 'active' : ''}`}>
          <BlockDetails />
        </div>
        <div className={`tab-content ${activeTab === tabs.forecast ? 'active' : ''}`}>
          <BlockForecast />
        </div>
      </div>
      <div className="block-links">
        <button className={`tab-links ${activeTab === tabs.now ? 'active' : ''}`}
        onClick={() => (activeTab !== tabs.now ? setActiveTab(tabs.now): null)}>
            Сейчас
        </button>
        <button className={`tab-links ${activeTab === tabs.details ? 'active' : ''}`}
        onClick={() => (activeTab !== tabs.details ? setActiveTab(tabs.details): null)}>
          Детали
        </button>
        <button className={`tab-links ${activeTab === tabs.forecast ? 'active' : ''}`}
        onClick={() => (activeTab !== tabs.forecast ? setActiveTab(tabs.forecast): null)}>
          Прогноз
        </button>
      </div>
    </div>
  );
};

export default Tabs;
