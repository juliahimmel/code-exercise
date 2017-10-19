import React from 'react';
import './DisconnectedAppMessage.css';

export default () => {
  return <div className="disconnected-app-message">
    <h1>Please connect your account to Ethereum to turn your likes into donations</h1>
    <h2>Whenever you &#8220;like&#8221; a pet, a small donation is made to support the pets in our care.</h2>
    <p>In order to make that happen, please connect your account to Ethereum. Ethereum offers a highly secure way to make payments without going through banks or credit cards.</p>
    <a href="#">Click here to learn more about Ethereum</a>
    <p>MetaMask simple way to connect to Ethereum. To enable it in your browser:</p>
    <ul>
      <li>
        <span>Chrome: </span>Download the MetaMask Chrome extension <a href="#">here</a>.
      </li>
      <li>
        <span>Brave: </span>In the menu bar, select Window > Extensions, then enable MetaMask
      </li>
    </ul>
  </div>
}
