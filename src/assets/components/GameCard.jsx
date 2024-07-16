import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-bold mt-2">{game.name}</h2>
            <p>Rating: {game.rating}</p>
            <Link to={`/game/${game.id}`} className="text-blue-500">View Details</Link>
        </div>
    );
};

export default GameCard;
