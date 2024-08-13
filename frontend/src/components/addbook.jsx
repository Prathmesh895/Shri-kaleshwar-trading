import React, { useState } from 'react';
import { API } from '../https'

function AddBook() {
    console.log(API)
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null); // Initialize as null to handle file upload
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (!title || !image) {
            setMessage('Title and image are required!');
            return;
        }

        // Create a FormData object to hold the form data
        const formData = new FormData();
        formData.append('b_title', title);
        formData.append('b_image', image);

        try {
            setLoading(true);
            // POST the form data to your backend
            const res = await fetch(`${API}/books`, {
                method: "POST",
                body: formData
            });
            if (res.ok) {
                setMessage(res.data.message);
                setLoading(false);
                setTitle(''); // Reset title
                setImage(null); // Reset image input
            }

        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Failed to upload file');
            setLoading(false);
        }
    };

    return (
        <div className="mt-20 min-h-screen flex flex-col justify-between items-center border">
            <form onSubmit={handleOnSubmit} className="border p-10 space-y-4 m-5">
                <div className="w-full">
                    <label htmlFor="title">Enter title</label>
                    <input
                        type="text"
                        id="title"
                        className="w-full"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="title"
                    />
                </div>
                <div>
                    <label htmlFor="file">Upload file</label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setImage(e.target.files[0])} // Update state with selected file
                        className="w-full"
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value={loading ? 'Submitting...' : 'Submit'}
                        className="h-10 w-24 float-end bg-black text-white cursor-pointer hover:font-semibold"
                        disabled={loading} // Disable submit button while loading
                    />
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddBook;
