import React, {useEffect, useState} from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {
    const [onShows, setOnShows] = useState([]);
    const [onWatchList, setOnWatchList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/shows')
        .then(resp => resp.json())
        .then(showData => {
            console.log(showData)
            setOnShows(showData)
        })
    }, []);

    return(
        <>
            <MyWatchList 
                onWatchList={onWatchList}
                setOnWatchList={setOnWatchList}
            />
            <hr/>
            <ShowList 
                allShows={onShows}
                onWatchList={onWatchList}
                setOnWatchList={setOnWatchList}
            />
        </>
    );
}

export default ShowCatalog;

// have shows showing, need to click on it from show list and move it over to watch list.
// need to do this by doing somthing on each list, have to pass the data from catalog to show list to card, and also from category to watch list to card
// first passed the watch list state variables from the category for the show list, then did my watch click function there, and passed that to the watch card 
// then passed the watch state variables to the watch list 
// had my stuff showing and then i tried to change soemthing and now nothing is showing and i cant go back to where it was at