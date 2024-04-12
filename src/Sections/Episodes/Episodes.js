import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from '../../Components/EpisodeCard';
import { useAuth } from '../../Services/AuthContext';
import './Episodes.scss';

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [offset, setOffset] = useState(0);  // Track the current offset
    const { accessToken } = useAuth();
    const limit = 6; // Episodes fetched per request
    const showId = '6BZ7BmCQxqlxoJ9fZBzATR'; // Show ID

    useEffect(() => {
        const fetchData = async () => {
            if (!accessToken) {
                console.log('No access token available.');
                return;
            }

            console.log('Fetching episodes from Spotify...');
            try {
                const response = await axios.get(`https://api.spotify.com/v1/shows/${showId}/episodes?market=ES&limit=${limit}&offset=${offset}`, {
                    headers: { Authorization: `Bearer ${accessToken}` }
                });
                setEpisodes(prevEpisodes => [...prevEpisodes, ...response.data.items]);
                console.log('Episodes fetched and stored.');
            } catch (error) {
                console.error('Failed to fetch episodes:', error);
            }
        };

        fetchData();
    }, [accessToken, offset]);  // Include offset in the dependency array

    const handleMoreEpisodes = () => {
        setOffset(prevOffset => prevOffset + limit);
    };

    return (
        <div className='episodes-container'>
            <div className="episode-section">
                <h2 className="section-title">Recent Episodes</h2>
                <div className="episode-cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {episodes.map(episode => (
                        <div key={episode.id} style={{ flex: '1 0 30%' }}> {/* Flex item style */}
                            <EpisodeCard episode={episode} />
                        </div>
                    ))}
                </div>
                <button onClick={handleMoreEpisodes} style={{ margin: '20px 0', padding: '10px 20px' }}>More Episodes</button>
            </div>
        </div>
    );
};

export default Episodes;
