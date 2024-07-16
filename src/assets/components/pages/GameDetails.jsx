import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GameDetails = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=YOUR_API_KEY`);
                setGame(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchGame();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!game) return <p>Game not found</p>;

    return (
        <div className="p-4">
            <img src={game.background_image} alt={game.name} className="w-full h-96 object-cover" />
            <h1 className="text-2xl font-bold mt-2">{game.name}</h1>
            <p>{game.description_raw}</p>
        </div>
    );
};

export default GameDetails;
