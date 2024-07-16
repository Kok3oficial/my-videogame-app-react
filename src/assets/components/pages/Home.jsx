import { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../components/GameCard';

const Home = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('https://api.rawg.io/api/games?key=YOUR_API_KEY');
                setGames(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchGames();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map(game => <GameCard key={game.id} game={game} />)}
        </div>
    );
};

export default Home;
