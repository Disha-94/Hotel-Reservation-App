import React, { useState } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

const SearchComponent = ({ onSearch }) => {
    const [searchCriteria, setSearchCriteria] = useState({
        location: '',
        checkin: '',
        checkout: '',
        adults: '1',
        children: '0',
        pets: '0',
        currency: 'USD', // Default currency to USD
    });

    const handleSearch = () => {
        // Perform validation for checkin and checkout dates
        if (
            !searchCriteria.location ||
            !searchCriteria.checkin ||
            !searchCriteria.checkout ||
            !searchCriteria.adults
        ) {
            alert('Please fill in all required fields.');
            return;
        }

        // Additional validation can be done here, e.g., date format and range checks

        onSearch(searchCriteria);
    };

    return (
        <Box mt={3}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="Location (City, State, Country)"
                        variant="outlined"
                        value={searchCriteria.location}
                        onChange={(e) =>
                            setSearchCriteria({ ...searchCriteria, location: e.target.value })
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Check-in (YYYY-MM-DD)"
                        variant="outlined"
                        type="date"
                        value={searchCriteria.checkin}
                        onChange={(e) =>
                            setSearchCriteria({ ...searchCriteria, checkin: e.target.value })
                        }
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Check-out (YYYY-MM-DD)"
                        variant="outlined"
                        type="date"
                        value={searchCriteria.checkout}
                        onChange={(e) =>
                            setSearchCriteria({ ...searchCriteria, checkout: e.target.value })
                        }
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Adults (13 and over)"
                        variant="outlined"
                        type="number"
                        value={searchCriteria.adults}
                        onChange={(e) =>
                            setSearchCriteria({ ...searchCriteria, adults: e.target.value })
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Children"
                        variant="outlined"
                        type="number"
                        value={searchCriteria.children}
                        onChange={(e) =>
                            setSearchCriteria({ ...searchCriteria, children: e.target.value })
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Pets"
                        variant="outlined"
                        type="number"
                        value={searchCriteria.pets}
                        onChange={(e) =>
                            setSearchCriteria({ ...searchCriteria, pets: e.target.value })
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Currency"
                        variant="outlined"
                        value={searchCriteria.currency}
                        onChange={(e) =>
                            setSearchCriteria({ ...searchCriteria, currency: e.target.value })
                        }
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                fullWidth
                sx={{ marginTop: '20px' }}
            >
                Search
            </Button>


        </Box>
    );
};

export default SearchComponent;