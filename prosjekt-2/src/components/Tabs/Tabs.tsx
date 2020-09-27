import React, { useContext } from 'react';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import './Tabs.css';

function Tabs() {
  const { tabProvider } = useContext(GlobalStateContext)!;

  return (
    <div className="buttonContainer">
      <button className="button" onClick={() => tabProvider.setActiveTab(0)}>
        Bilde 1
      </button>
      <button className="button" onClick={() => tabProvider.setActiveTab(1)}>
        Bilde 2
      </button>
      <button className="button" onClick={() => tabProvider.setActiveTab(2)}>
        Bilde 3
      </button>
    </div>
  );
}

export default Tabs;
