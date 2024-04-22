import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from '../../Components/EpisodeCard';
import { useAuth } from '../../Services/AuthContext';
import './Episodes.scss';

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [offset, setOffset] = useState(0);
    const { accessToken } = useAuth();
    const limit = 6;
    const showId = '6BZ7BmCQxqlxoJ9fZBzATR';

    useEffect(() => {
        if (accessToken) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://api.spotify.com/v1/shows/${showId}/episodes?market=ES&limit=${limit}&offset=${offset}`, {
                        headers: { Authorization: `Bearer ${accessToken}` }
                    });
                    setEpisodes(prevEpisodes => [...prevEpisodes, ...response.data.items]);
                } catch (error) {
                    console.error('Failed to fetch episodes:', error);
                }
            };
            fetchData();
        }
    }, [accessToken, offset, limit, showId]);

    const handleMoreEpisodes = () => {
        setOffset(prevOffset => prevOffset + limit);
    };

    return (
        <div className='episodes-container'>
            <div className="episode-section">
                <h2 className="section-title">Recent Episodes</h2>
                <div className="episode-cards">
                    {episodes.map(episode => (
                        <div key={episode.id} style={{ flex: '1 0 30%' }}>
                            <EpisodeCard episode={episode} />
                        </div>
                    ))}
                </div>
                <button onClick={handleMoreEpisodes} className="btn-primary">More Episodes</button>
            </div>
        </div>
    );
};

export default Episodes;
