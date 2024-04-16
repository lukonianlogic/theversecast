import React from 'react';
import './EpisodeCard.scss';

const EpisodeCard = ({ episode }) => {
    const { name, description, audio_preview_url, images, external_urls } = episode;

    // Improved image selection logic
    const imageUrl = images && images.length > 0 ? images.reduce((closest, image) => {
        const closestDiff = Math.abs(500 - (closest.width || 500));
        const currentDiff = Math.abs(500 - (image.width || 500));
        return currentDiff < closestDiff ? image : closest;
    }, images[0]) : null; // Default to the first image if no other image matches better

    return (
        <div className="episode-card">
            {imageUrl && <img src={imageUrl.url} alt={name} className="episode-image" />}
            <h3 className="episode-title">{name}</h3>
            <p className="episode-description">{description}</p>
            <p>Preview Clip</p>
            {audio_preview_url && (
                <audio controls>
                    <source src={audio_preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}
            {external_urls && external_urls.spotify && (
                <a href={external_urls.spotify} target="_blank" rel="noopener noreferrer" className="spotify-link-button">
                    Listen on Spotify
                </a>
            )}
        </div>
    );
};

export default EpisodeCard;
