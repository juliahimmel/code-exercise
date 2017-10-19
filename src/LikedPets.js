import React from 'react';
import './LikedPets.css';

export default () => {
  return <div className="liked-pets">
    <h1>Liked Pets</h1>
    <ul className="pet-list">
      <li className="pet">
        <img className="pet-image" src="https://images.unsplash.com/photo-1456081445129-830eb8d4bfc6?dpr=1&auto=format&fit=crop&w=1516&q=60&cs=tinysrgb"/>
        <div className="description">
          <p className="pet-name">Pudge</p>
          <p className="liked">Liked <span className="status">Pending: Please connect Ethereum</span></p>
        </div>
      </li>
      <li className="pet">
        <img className="pet-image" src="https://images.unsplash.com/photo-1456081445129-830eb8d4bfc6?dpr=1&auto=format&fit=crop&w=1516&q=60&cs=tinysrgb"/>
        <div className="description">
          <p className="pet-name">Pudge</p>
          <p className="liked">Liked <span className="status">Pending: Please connect Ethereum</span></p>
        </div>
      </li>
      <li className="pet">
        <img className="pet-image" src="https://images.unsplash.com/photo-1456081445129-830eb8d4bfc6?dpr=1&auto=format&fit=crop&w=1516&q=60&cs=tinysrgb"/>
        <div className="description">
          <p className="pet-name">Pudge</p>
          <p className="liked">Liked <span className="status">Pending: Please connect Ethereum</span></p>
        </div>
      </li>
    </ul>

  </div>
}
