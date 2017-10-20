import React from 'react';
import './LikedPets.css';

export default () => {
  return <div className="liked-pets">
    <h1>Liked Pets</h1>
    <ul className="pet-list">
      <li className="pet">
        <img className="pet-image" src="https://images.unsplash.com/photo-1456081445129-830eb8d4bfc6"/>
        <div className="description">
          <p className="pet-name">Pudge</p>
          <p className="liked">Liked <span className="status">Pending: Please connect Ethereum</span></p>
        </div>
      </li>
      <li className="pet">
        <img className="pet-image" src="https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=1350"/>
        <div className="description">
          <p className="pet-name">Loki</p>
          <p className="liked">Liked <span className="status">Pending: Please connect Ethereum</span></p>
        </div>
      </li>
      <li className="pet">
        <img className="pet-image" src="https://images.unsplash.com/photo-1474088122367-1c381a17db5c"/>
        <div className="description">
          <p className="pet-name">Hazel</p>
          <p className="liked">Liked <span className="status">Pending: Please connect Ethereum</span></p>
        </div>
      </li>
    </ul>

  </div>
}
