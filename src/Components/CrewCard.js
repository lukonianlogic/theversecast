import React from 'react';
import './CrewCard.scss';

const CrewCard = ({ crew }) => {
  const { name, image, bio, nickname, likesDislikes, specialSkills, favoriteMovie, favoriteTVShow, favoriteNovel, rank, position } = crew;

  return (
    <div className="crew-card">
      <div className="crew-card-inner">
        <div className="crew-card-front">
          <div className="crew-image-container">
            <img src={image} alt={name} className="crew-image" />
          </div>
          <div className="crew-info">
            <h3 className="crew-name">{name}</h3>
            <p className="crew-position">{position}</p>
            <p className="crew-rank">{rank}</p>
          </div>
        </div>
        <div className="crew-card-back">
          <div className="crew-info">
            <p className="crew-bio">{bio}</p>
            <p className="crew-nickname"><strong>Nickname:</strong> {nickname}</p>
            <p className="crew-likes-dislikes"><strong>Likes/Dislikes:</strong> {likesDislikes}</p>
            <p className="crew-special-skills"><strong>Special Skills:</strong> {specialSkills}</p>
            <p className="crew-favorite-movie"><strong>Favorite Movie:</strong> {favoriteMovie}</p>
            <p className="crew-favorite-tv-show"><strong>Favorite TV Show:</strong> {favoriteTVShow}</p>
            <p className="crew-favorite-novel"><strong>Favorite Novel:</strong> {favoriteNovel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewCard;
