import React, { useState } from "react";
import SearchComponent from "../components/SearchComponent";
import HotelList from "../components/HotelList";
import { fetchHotels } from "../utils/clientApi";
import { Grid } from "@mui/material";

const HotelSearchContainer = () => {
    const [hotels, setHotels] = useState([]); //state to hold API data 
    const [loading, setLoading] = useState(false);
    const [searchCriteria, setSearchCriteria] = useState({
        location: '',
        checkin: '',
        checkout: '',
        adults: '1',
        children: '0',
        pets: '0',
        currency: 'USD', // Default currency to USD
    }); //state to hold user-input

    //on clicking search button, this function is called
    const handleSearch = (searchCriteria) => {
        // Perform validation for checkin and checkout dates
        if (
            !searchCriteria.location ||
            !searchCriteria.checkin ||
            !searchCriteria.checkout ||
            !searchCriteria.adults
        ) {
            alert('Something is wrong! \nPlease check your search criteria and retry. \nMake sure you fill in all required fields marked with *.');
            return;
        }
        // Additional validation can be done here, e.g., date format and range checks

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
                    alert(hotelResults.message);
                    setHotels([]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching hotel data: ', error);
                setLoading(false);
            });
    }

    return (
        <Grid container spacing={2} direction="row">
            <Grid item xs={3}>
                <SearchComponent
                    searchCriteria={searchCriteria}
                    setSearchCriteria={setSearchCriteria}
                    handleSearch={handleSearch}
                /> {/*Search component*/}
            </Grid>
            <Grid item xs={9}>
                {/*Result component*/}
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <HotelList hotels={hotels} />
                )}</Grid>
        </Grid>
    );
}

export default HotelSearchContainer;
