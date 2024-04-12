import React from 'react';

const EpisodeCard = ({ episode }) => {
    const { name, description, audio_preview_url, html_description, images } = episode;

    // Improved image selection logic
    const imageUrl = images && images.length > 0 ? images.reduce((closest, image) => {
        const closestDiff = Math.abs(300 - (closest.width || 300));
        const currentDiff = Math.abs(300 - (image.width || 300));
        return currentDiff < closestDiff ? image : closest;
    }, images[0]) : null; // Default to the first image if no other image matches better

    return (
        <div className="episode-card">
            {imageUrl && <img src={imageUrl.url} alt={name} className="episode-image" />}
            <h3 className="episode-title">{name}</h3>
            <p className="episode-description">{description}</p>
            {audio_preview_url && (
                <audio controls>
                    <source src={audio_preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}
            {html_description && <div dangerouslySetInnerHTML={{ __html: html_description }} />}
        </div>
    );
};

export default EpisodeCard;
