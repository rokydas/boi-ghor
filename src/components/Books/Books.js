import React from 'react';
import { useState } from 'react';
import data from '../Home/data';
import Book from './Book';
import Modal from 'react-modal';
import './Books.css';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        width: '500px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Books = () => {

    const [books, setBooks] = useState(data);
    const [isOpen, setIsOpen] = useState(false);
    const [currentBook, setCurrentBook] = useState({});

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="container">
            <div className="row">
                {
                    books.map(book => <Book book={book} setIsOpen={setIsOpen} setCurrentBook={setCurrentBook} />)
                }
            </div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="row mb-3">
                    <div className="col-md-6">
                        <img src={currentBook.img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4>{currentBook.name}</h4>
                        <p>Author: {currentBook.author}</p>
                        <p>Category: {currentBook.category}</p>
                        <p>Price: {currentBook.price}</p>
                        {currentBook.stock > 0 ? `Stock: $currentBook.stock` : 'Stock out'}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="custom-btn" onClick={closeModal}>Close</button>
                </div>
            </Modal>
        </div>
    );
};

export default Books;