import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {

    const {id} = useParams();

    return (
        <div>
            <h3>I am book details of {id}</h3>
        </div>
    );
};

export default BookDetails;