import "./HomePage.scss"

import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import baseUrl from '../../consts'

function HomePage() {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPodcasts();
    }, []);

    const fetchPodcasts = async () => {
        try {
            const response = await axios.get(`${baseUrl}/podcasters/`);
            setPodcasts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching podcasts:', error);
            setLoading(false);
        }
    };
    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>Podcasts</h1>
            {/* {loading ? (
                <p>Loading...</p>
            ) : ( */}
            {/* <div> */}
                <SearchBar />
                {podcasts.map(podcast => (
                    <div key={podcast.id} className="podcast-item">
                        <h2>{podcast.title}</h2>
                        <p>Channel: {podcast.channel}</p>
                        <p>Channel View Count: {podcast.channelViewCount}</p>
                        <p>Subscriber Count: {podcast.subscriberCount}</p>
                        <p>Country: {podcast.country}</p>
                    </div>
                ))}
            {/* </div> */}
            {/* )} */}
        </div>
    );
}

export default HomePage;
