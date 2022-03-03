import React from 'react';
import ShowCard from './ShowCard';

function ShowList({allShows, onWatchList, setOnWatchList}) {

    // function onWatchClick(item) {
    //     if (!allShows.includes(item)) {
    //         setOnWatchList([...allShows, item])
    //     }
    // }

    return(
        <div className="show-container">
            {allShows.map((show) => {
                function onWatchClick(item) {
                    if (!onWatchList.includes(item)) {
                        setOnWatchList([...allShows, item])
                    }
                }
        return(
            <ShowCard 
                key={show.id}
                show={show}
                onWatchList={onWatchList}
                setOnWatchList={setOnWatchList}
                onWatchClick={onWatchClick}
            />
        )
    })}
        </div>
    );
}

export default ShowList;