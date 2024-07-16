import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <Link to="/" className="mr-4">Home</Link>
        </nav>
    );
};

export default Navbar;
