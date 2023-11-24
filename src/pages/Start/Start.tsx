import React from 'react';
import './Start.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeroCreative } from '../../assets/images/hero_creative.svg';

function StartPage() {
  const navigate = useNavigate();

  const onStartClick = () => {
    navigate('/game');
  };

  return (
    <main className="start-page">
      <div className="container">
        <div className="start-page__hero-container">
          <div className="start-page__hero-image">
            <HeroCreative className="start-page__hero-creative" />
          </div>
          <div className="start-page__hero-cta">
            <h1 className="h1">Who wants to be a millionaire?</h1>
            <button type="button" className="button" onClick={onStartClick}>Start</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default StartPage;