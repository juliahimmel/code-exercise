import React from 'react';
import LikedPets from './LikedPets'
import DisconnectedAppNav from './DisconnectedAppNav'
import DisconnectedAppMessage from './DisconnectedAppMessage'
import './DisconnectedApp.css';


export default () => {
  return <div className="disconnected-app">
    <DisconnectedAppNav />
    <div className="disconnected-app-info">
      <LikedPets />
      <DisconnectedAppMessage />
    </div>

  </div>
}
