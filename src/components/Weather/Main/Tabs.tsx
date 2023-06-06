import { useState } from 'react';
import BlockNowNew from './Tabs/BlockNowNew/BlockNowNew';
import BlockDetails from './Tabs/BlockDetails/BlockDetails';

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
      </div>
    </div>
  );
};

export default Tabs;
