import React from 'react';
import ShowCard from './ShowCard';

function ShowList({allShows, onWatchList, setOnWatchList, handleDelete}) {

    const showItems = allShows.map((show) => {
        function onWatchClick() {
            if (!onWatchList.includes(show)) {
                setOnWatchList([...onWatchList, show]);
            }
        }

    return (
        <ShowCard 
            key={show.id}
            show={show}
            onWatchClick={onWatchClick}
            handleDelete={handleDelete}
        />
    )
    })
    return (
        <div className="show-container">
            {showItems}
        </div>
    );
}

export default ShowList;