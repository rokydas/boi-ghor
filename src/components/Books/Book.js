import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book, setIsOpen, setCurrentBook }) => {
    
    const seeDetails = () => {
        setCurrentBook(book);
        setIsOpen(true);
    }

    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <div className="pt-4 pb-4 ps-3 pe-3 h-100 border shadow text-center">
                <img src={book.img} alt="" className="img-fluid mb-3" /> <br />
                <h5>{book.name}</h5>
                <button onClick={seeDetails} className="custom-btn mb-2">See Details</button>
                <button className="custom-btn">Issue Book</button>
            </div>
        </div>
    );
};

export default Book;