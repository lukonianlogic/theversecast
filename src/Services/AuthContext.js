import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        console.log("Attempting to log in to Spotify...");
        const authenticate = async () => {
            const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
            const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
            try {
                const response = await axios.post(
                    'https://accounts.spotify.com/api/token',
                    `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }
                );
                setAccessToken(response.data.access_token);
                console.log("Authentication successful. Access token set.");
            } catch (error) {
                console.error('Error authenticating with Spotify:', error);
            }
        };

        authenticate();
    }, []);

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
