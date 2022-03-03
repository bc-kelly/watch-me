import React from 'react';
import ShowCard from './ShowCard';

function MyWatchList({onWatchList, setOnWatchList, handleDelete}) {

    const myWatchShows = onWatchList.map((show) => {
        function onWatchClick() {
            const newWatchList = onWatchList.filter((otherShow) => {
                return otherShow !== show
            })
            setOnWatchList(newWatchList);
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

    return(
        <div className="watch-list-container">
            {myWatchShows}
        </div>
    )
}

export default MyWatchList;