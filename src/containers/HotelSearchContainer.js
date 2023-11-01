import React, { useState } from "react";
import SearchComponent from "../components/SearchComponent";
import HotelList from "../components/HotelList";
import { fetchHotels } from "../utils/clientApi";

const HotelSearchContainer = ({ collapse, setCollapse }) => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleSearch = (searchCriteria) => {
        setLoading(true);

        //Make an API call to fetch hotel data
        fetchHotels(searchCriteria)
            .then(response => {
                const hotelResults = response.data;
                if (hotelResults && !hotelResults.error && hotelResults.results) {
                    console.log('Data: ', hotelResults.results);
                    setHotels([...hotelResults.results]);
                } else {
                    console.error('API returned an error', hotelResults);
                    setHotels([]);
                }
                setCollapse(true);
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching hotel data: ', error);
                setLoading(false);
            });
    }

    return (
        <div className="container">
            <SearchComponent onSearch={handleSearch} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <HotelList hotels={hotels} />
            )}
        </div>
    );
}

export default HotelSearchContainer;
