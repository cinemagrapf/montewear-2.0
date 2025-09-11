import '../../styles/page-styles/home/cards-section.scss';
import React, { useState } from 'react';

// Importing images
import cardSectionBg from '../../assets/cards/cards-bg.png';

import streetwearCardBg from '../../assets/cards/streetwear-logo.png'; // Cards background images
import techwearCardBg from '../../assets/cards/techwear-logo.png';
import corporateCardBg from '../../assets/cards/corporate-logo.png';
import steampunkCardBg from '../../assets/cards/steampunk-logo.png';

import streetwearStyle from '../../assets/cards/streetwear-nobg.png'; // Cards style images
import techwearStyle from '../../assets/cards/techwear-nobg.png';
import corporateStyle from '../../assets/cards/corporate-nobg.png';
import steampunkStyle from '../../assets/cards/steampunk-nobg.png';

const CardSection = () => {
  const [title, setTitle] = useState('Pick Your Side');

  // Card data}
  const cards = [
    {
      name: 'Streetwear',
      background_image: { streetwearCardBg },
      style_image: { streetwearStyle },
    },
    { name: 'Techwear', background_image: { techwearCardBg }, style_image: { techwearStyle } },
    { name: 'Corporate', background_image: { corporateCardBg }, style_image: { corporateStyle } },
    { name: 'Steampunk', background_image: { steampunkCardBg }, style_image: { steampunkStyle } },
  ];

  return (
    <div className="card-section d-flex flex-column w-100 h-auto mt-0 position-relative">
      {/* Dynamic heading */}
      <h1 className="display-1 card-heading text-center text-white text-uppercase p-3 my-2 position-relative z-2">
        {title}
      </h1>

      {/* Background image */}
      <img
        src={cardSectionBg}
        alt="Card section background"
        className="card-section-bg w-100 position-absolute bottom-0 start-0 opacity-50 object-fit-cover"
      />

      {/* Cards */}
      <div className="d-flex flex-wrap justify-content-center gap-5 z-2 my-1">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`cards ${card.name.toLowerCase()}-card`}
            onClick={() => setTitle(card.name)}
            style={{
              backgroundImage: `url(${
                card.background_image[Object.keys(card.background_image)[0]]
              })`,
              backgroundSize: 'contain',
            }}>
            <img
              src={card.style_image[Object.keys(card.style_image)[0]]}
              alt={`${card.name} style`}
              className="card-styletranslate-middle w-100 h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
