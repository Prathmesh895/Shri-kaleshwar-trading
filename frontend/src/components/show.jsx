import React, { useEffect, useState } from 'react';
import { API } from '../https'; // Make sure API is correctly defined in your `https.js` file

function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`${API}/books`);
                const data = await response.json(); // Convert response to JSON
                setBooks(data); // Use the JSON data directly
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
                setError('Failed to load books');
                setLoading(false);
            }
        };

        fetchBooks();
    }, []); // Empty dependency array means this runs once when the component mounts

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="mt-20 min-h-screen flex flex-col items-center">
            <h1 className="text-2xl mb-4">Book List</h1>
            <ul className="w-1/2">
                {books.map((book) => (
                    <li key={book._id} className="border p-4 mb-2">
                        <h2 className="text-xl font-semibold">{book.b_title}</h2>
                        <img src={book.b_image} alt={book.b_title} className="w-full h-auto mt-2" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
